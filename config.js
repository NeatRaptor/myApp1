import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyC-428sAlpJ0xVyiiIa8XXVie1tSwiFY94",
  authDomain: "myapp-c5340.firebaseapp.com",
  databaseURL: "https://myapp-c5340.firebaseio.com",
  projectId: "myapp-c5340",
  storageBucket: "myapp-c5340.appspot.com",
  messagingSenderId: "84319334426",
  appId: "1:84319334426:web:b7e65cc501abcbeb5ba1a3"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database;