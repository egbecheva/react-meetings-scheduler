import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyD9tfXirarT71fDR5bgMtFI7r43PtN3SC4",
    authDomain: "react-meeting-spa.firebaseapp.com",
    databaseURL: "https://react-meeting-spa.firebaseio.com",
    projectId: "react-meeting-spa",
    storageBucket: "react-meeting-spa.appspot.com",
    messagingSenderId: "16151934429"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;