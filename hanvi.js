const hanvi = require( './controllers/stt' );

console.log("START PROGRAM");

hanvi.speaker(function(results, error) {
  // TODO. ...
  console.log(error);
  process.exit(255);
});
