import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC00NLwblwg7EO5gvLgIdXNlnLZBlbpgZE",
  authDomain: "marioplan-754fd.firebaseapp.com",
  databaseURL: "https://marioplan-754fd.firebaseio.com",
  projectId: "marioplan-754fd",
  storageBucket: "",
  messagingSenderId: "644513862023",
  appId: "1:644513862023:web:445323e20f3efea51f4322",
  measurementId: "G-3H7RHZT24D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.firestore();
export default firebase;
