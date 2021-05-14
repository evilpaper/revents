import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3JO2S0Wi25gGazKu47BmXfJtLZ3o6iFM",
  authDomain: "revents-6fc4b.firebaseapp.com",
  projectId: "revents-6fc4b",
  storageBucket: "revents-6fc4b.appspot.com",
  messagingSenderId: "162390945526",
  appId: "1:162390945526:web:bfd7ef92bd4655278dc6d7",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
