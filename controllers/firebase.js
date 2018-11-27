const firebase = require('firebase');

var config = {
  apiKey: "AIzaSyC5O3__8dbPlgPn7fmhTsCfhLQPS7URW4Q",
  authDomain: "hanvi-ea6d1.firebaseapp.com",
  databaseURL: "https://hanvi-ea6d1.firebaseio.com",
  projectId: "hanvi-ea6d1",
  storageBucket: "hanvi-ea6d1.appspot.com",
  messagingSenderId: "955546589766"
};

const admin = firebase.initializeApp(config);

module.exports = admin.firestore();
