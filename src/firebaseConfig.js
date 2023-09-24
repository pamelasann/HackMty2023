import firebase from 'firebase/compat/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyD21oePSDTpTA9Qp9s9WxRsodSCj2If_6Y",
    authDomain: "banco-cd4de.firebaseapp.com",
    databaseURL: "https://banco-cd4de-default-rtdb.firebaseio.com",
    projectId: "banco-cd4de",
    storageBucket: "banco-cd4de.appspot.com",
    messagingSenderId: "1003178469339",
    appId: "1:1003178469339:web:b599a30c40bd2cb070e9fe",
    measurementId: "G-LS98RQY4C4"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
};

const db = getDatabase();
export { db };
