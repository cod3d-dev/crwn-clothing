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

export const createUserProfileDocument = async (userAuth, addtionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...addtionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

