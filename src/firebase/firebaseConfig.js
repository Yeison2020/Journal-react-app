import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiHrfRs-h6_uN7vIGinWe3jUyqQoa50jM",
  authDomain: "journal-app-react-c3a2c.firebaseapp.com",
  projectId: "journal-app-react-c3a2c",
  storageBucket: "journal-app-react-c3a2c.appspot.com",
  messagingSenderId: "481786488907",
  appId: "1:481786488907:web:2ff33882d72578925d45ce",
};

firebase.initializeApp(firebaseConfig);
// Here there is the database and my new connection to google.
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
