const firebase = require('../config/process').firebaseConfig;
const admin = require("firebase-admin");

var serviceAccount = require(firebase.serviceAccount);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: firebase.databaseURL
});

module.exports = admin.firestore();
