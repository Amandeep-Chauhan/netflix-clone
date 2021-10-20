import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8mB_XwdwqrWs2soA7LhDORBbanCyqgdA",
  authDomain: "netflix-clone-62a0d.firebaseapp.com",
  projectId: "netflix-clone-62a0d",
  storageBucket: "netflix-clone-62a0d.appspot.com",
  messagingSenderId: "859817191525",
  appId: "1:859817191525:web:d29a5054fccee751f07e8c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebaseApp;
