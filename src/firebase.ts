import 'firebase/firestore';

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB0um44kLZNKM1jKB3fD-E2PEmoagtBSZc",
  authDomain: "analog-notes-65364.firebaseapp.com",
  databaseURL: "https://analog-notes-65364.firebaseio.com",
  projectId: "analog-notes-65364",
  storageBucket: "analog-notes-65364.appspot.com",
  messagingSenderId: "66145307452",
  appId: "1:66145307452:web:737dfaae94c9cb291a6c39",
  measurementId: "G-K29DJR7G5P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
