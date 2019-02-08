const opn = require('opn');
const ttsConfig = require( "../config/process" ).ttsConfig;
const program = require( "../config/process" ).program;
const firebase = require('../config/process').firebaseConfig.useFirebase;
const tts = require('./tts');
const youtube = require('./youtube');
const format = require('date-format');
if (firebase) {
  const db = require('./firebase');
  db.settings({ timestampsInSnapshots: true });
}

const calltts = (data, callback) => 
{
  tts.speaker(data, callback);
}

exports.analysis = (data) =>
{
  var shutdown = false;

  var re = new RegExp(program.name, 'g');
  if (!data.match(re)) {
    console.log('It should work with the word [' + program.name + ']');
    return;
  }

  if (data.match(/열어/g) || data.match(/켜줘/g) || data.match(/틀어/g)) {
    // browser section
    if (data.match(/유튜브/g) || data.match(/유투브/g)) {
      data = '유튜브로 이동합니다.';
      opn('https://www.youtube.com/');
    } else if (data.match(/메일/g)) {
      data = '메일함으로 이동합니다.';
      opn('https://www.gmail.com/');
    } else if (data.match(/깃헙/g)) {
      data = '깃헙으로 이동합니다.';
      opn('https://www.github.com/');
    }
  } else if (data.match(/안녕/g)) {
    // hello section
    data = '안녕하세요?';
  } else if (data.match(/종료/g) || data.match(/중지/g) || data.match(/셧다운/g)) {
    // terminate section
    data = '프로그램을 종료합니다.';
    shutdown = true;
  } else {
    // unknown section
    data = '다시 한번 말씀해주세요.';
  }

  if (firebase) {
    var date = format.asString('yyyy-MM-dd', new Date());
    var docRef = db.collection(date).doc();
    docRef.set({
      text: data
    }).then(ref => {
    }).catch(err => {
      console.log(err);
    });
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
