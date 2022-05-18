import firebase from "firebase/app";
import "firebase/auth";




export const auth = firebase.initializeApp({ 
    apiKey: "AIzaSyBpe3jTh8_7IkiRuJDpm8Tzj-w-llDefxo",
    authDomain: "wemeet-c4ef8.firebaseapp.com",
    projectId: "wemeet-c4ef8",
    storageBucket: "wemeet-c4ef8.appspot.com",
    messagingSenderId: "1002575193741",
    appId: "1:1002575193741:web:e90d211e9ef0fde7f124c4"
  }).auth();