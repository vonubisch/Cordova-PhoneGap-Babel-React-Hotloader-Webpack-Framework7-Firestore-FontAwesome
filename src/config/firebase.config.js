import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};

firebase.initializeApp(firebaseConfig);

export default firebase;
