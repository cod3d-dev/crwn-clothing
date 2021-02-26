import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD24SX8zEDsUBNAydnY8S9OTUkod--O6oE",
    authDomain: "react-crwn-db-61752.firebaseapp.com",
    projectId: "react-crwn-db-61752",
    storageBucket: "react-crwn-db-61752.appspot.com",
    messagingSenderId: "984976547520",
    appId: "1:984976547520:web:e1036de7bcfeb9fd3b9725",
    measurementId: "G-GGMRVCRPK3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

