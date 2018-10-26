const tts = require('./tts');
const record = require('node-record-lpcm16');

// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');

// Creates a client
const client = new speech.SpeechClient();

const audio = require( "../config/process" ).audio;

const request = {
  config: {
    encoding: audio.encoding,
    sampleRateHertz: audio.sampleRateHertz,
    languageCode: audio.languageCode,
  },
  interimResults: false, // If you want interim results, set this to true
};

const calltts = (data) => 
{
  tts.speaker(data.results[0].alternatives[0].transcript);
}

exports.speaker = () =>
{
  // Create a recognize stream
  const recognizeStream = client
    .streamingRecognize(request)
    .on('error', console.error)
    .on('data', data => {
      if (data.results[0] && data.results[0].alternatives[0]) {
        console.log(`Transcription: ${data.results[0].alternatives[0].transcript}`);
        calltts(data);
      } 
      else {
        console.log(`\n\nReached transcription time limit, press Ctrl+C\n`);
      }
    });

  // Start recording and send the microphone input to the Speech API
  record
    .start({
      sampleRateHertz: audio.sampleRateHertz,
      threshold: 0,
      // Other options, see https://www.npmjs.com/package/node-record-lpcm16#options
      verbose: false,
      recordProgram: 'rec', // Try also "arecord" or "sox"
      silence: '10.0',
    })
    .on('error', console.error)
    .pipe(recognizeStream);

  console.log('Listening, press Ctrl+C to stop.');
}
