import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

//Your web app's Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnXnAc--z3ArgOBSkc8WIII8i6uHFwD3g",
    authDomain: "cristian-firegram.firebaseapp.com",
    projectId: "cristian-firegram",
    storageBucket: "cristian-firegram.appspot.com",
    messagingSenderId: "551403478184",
    appId: "1:551403478184:web:7c176538472ce6e915b69d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage =firebase.storage();
  const projectFirestore =  firebase.firestore();

  export { projectStorage, projectFirestore}