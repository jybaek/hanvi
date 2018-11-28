

![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)
![node](https://img.shields.io/badge/node-6.15.x-brightgreen.svg)
![node](https://img.shields.io/badge/node-9.4.x-brightgreen.svg)

# hanvi project
> AI( Artificial Intelligent ) Speaker. 

Listen to my voice and reinvent it with a new voice. In the future, Natural Language Processing(NLP) should be possible.

## Simple Architecture
<img src="/arch/architecture.png" style="max-width:100%;max-height:100%;">

## Prerequisite
### Authentication
```bash
$ gcloud auth application-default login
```

### Error
If the following error is found when running, the API key is missing. 
Download the API key as a json file as described [here](https://cloud.google.com/docs/authentication/getting-started#auth-cloud-implicit-nodejs). 
You must also specify the path to the file as an environment variable.
```bash
ERROR: { Error: 7 PERMISSION_DENIED: Your application has authenticated using end user credentials from the Google Cloud SDK or Google Cloud Shell which are not supported by the texttospeech.googleapis.com. We recommend that most server applications use service accounts instead. For more information about service accounts and how to use them in your application, see https://cloud.google.com/docs/authentication/.
    at Object.exports.createStatusError (/Users/caley/hanvi/node_modules/grpc/src/common.js:87:15)
    at Object.onReceiveStatus (/Users/caley/hanvi/node_modules/grpc/src/client_interceptors.js:1188:28)
    at InterceptingListener._callNext (/Users/caley/hanvi/node_modules/grpc/src/client_interceptors.js:564:42)
    at InterceptingListener.onReceiveStatus (/Users/caley/hanvi/node_modules/grpc/src/client_interceptors.js:614:8)
    at callback (/Users/caley/hanvi/node_modules/grpc/src/client_interceptors.js:841:24)
  code: 7,
  metadata: Metadata { _internal_repr: {} },
  details:
   'Your application has authenticated using end user credentials from the Google Cloud SDK or Google Cloud Shell which are not supported by the texttospeech.googleapis.com. We recommend that most server applications use service accounts instead. For more information about service accounts and how to use them in your application, see https://cloud.google.com/docs/authentication/.',
  note:
   'Exception occurred in retry method that was not classified as transient' }
```
### Firebase settings
To use firebase, you must issue a json key and specify it in the path specified in `config/process.js`.
Then change the setting to `true`. The default is to not use firebase.
```bash
exports.firebaseConfig =
{
  useFirebase     : true,
  databaseURL     : "https://hanvi-223711.firebaseio.com",
  serviceAccount  : "../your_service_account_key.json"
};
```

### Install Dependencies
```bash
$ npm install
```

## Usage
```bash
$ node hanvi.js
Listening, press Ctrl+C to stop.
Transcription: 좋은 아침입니다
Audio content written to file: output.mp3
Transcription:  음성인식을 테스트 중입니다
Audio content written to file: output.mp3
Transcription:  생각보다 잘 됩니다
Audio content written to file: output.mp3
```
Currently, the recognized voice is _ping/pong_ and saved as `output.mp3` file. 
In future, it will be added the function to output directly through the speaker.
Check the audio samples in the [sampleAudio](./sampleAudio/) directory.
You can also check it on [YouTube](https://youtu.be/9-4r1coNIos).

## reference
  - https://github.com/googleapis/nodejs-speech
  - https://github.com/googleapis/nodejs-text-to-speech

## TODO
  - [ ] Fixed to respond only when calling `hanvi`
  - [ ] Analyzes the voice and returns the desired answer in `TTS( text to speech )`.
  - [ ] TTS and STT development. ( Without using the Google API )
