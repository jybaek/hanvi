const ttsConfig = require( "../config/process" ).ttsConfig;
const tts = require('./tts');
const youtube = require('./youtube');

const calltts = (data, callback) => 
{
  tts.speaker(data, callback);
}

exports.analysis = (data) =>
{
  var shutdown = false;

  // Add a condition
  // TODO. For now, this is only an `if else`, but we have to do something else in the future.
  if (data.match(/종료/g) || data.match(/중지/g) || data.match(/셧다운/g)) {
    data = '프로그램을 종료합니다.';
    shutdown = true;
  }

  // XXX. If you do not want to output speakers, Please change your settings ( config/process.js ).
  if (!ttsConfig.useSpeaker) {
    return;
  }

  calltts(data, function(result, err) {
    if (err) {
      console.log(`${result}: ${err}`);
    } else {
      if (shutdown) {
        console.log('\n ==> Exit the program. GoodBye !\n')
        process.exit(0);
      }
    }
  });
}
