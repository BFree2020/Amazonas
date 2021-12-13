// import firebase from "firebase";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';



 const firebaseConfig = {
    apiKey: "AIzaSyDtYb2QFn0Fbq5H6ct0uzly4Cx88_fdj80",
    authDomain: "as-8b347.firebaseapp.com",
    projectId: "as-8b347",
   storageBucket: "as-8b347.appspot.com",
    messagingSenderId: "753087574417",
    appId: "1:753087574417:web:59d8318736e9b9134cea30"
  
   };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);

//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();

//   export {db, auth};
  

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp
const auth = firebase.auth()

export { db, auth }