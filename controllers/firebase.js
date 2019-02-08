const firebase = require('../config/process').firebaseConfig;
const admin = require("firebase-admin");

if (firebase.useFirebase) {
  var serviceAccount = require(firebase.serviceAccount);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: firebase.databaseURL
  });

  module.exports = admin.firestore();
}
