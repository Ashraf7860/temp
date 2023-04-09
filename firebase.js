import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBxr8irCZUDqIfK6bUktDoo-QBAdK2dOJ8",
    authDomain: "ott-platform-3a473.firebaseapp.com",
    projectId: "ott-platform-3a473",
    storageBucket: "ott-platform-3a473.appspot.com",
    messagingSenderId: "953493131805",
    appId: "1:953493131805:web:8c48cdcfab63eaaf99acf4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db = firebaseApp.firestore(); 
   const auth = firebase.auth(); 
   
  export { auth }; 
  export default db;