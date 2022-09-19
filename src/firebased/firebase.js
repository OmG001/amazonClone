import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB7DwyiMYkiGSC9bfuQyYiq4DvGMys5YpE",
    authDomain: "clone-react-f9f59.firebaseapp.com",
    projectId: "clone-react-f9f59",
    storageBucket: "clone-react-f9f59.appspot.com",
    messagingSenderId: "914034222189",
    appId: "1:914034222189:web:2c30da189cc43496520b64",
    measurementId: "G-MYDDLX4C03"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};