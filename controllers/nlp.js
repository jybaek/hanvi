const tts = require('./tts');
const youtube = require('./youtube');

const calltts = (data) => 
{
  tts.speaker(data);
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

  // XXX. If you do not want to output speakers, please comment here.
  calltts(data);

  if (shutdown) {
    console.log(' ==> program shutdown')
    process.exit(0);
  }
}
