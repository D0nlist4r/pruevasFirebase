  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import {getFirestore,collection,addDoc,getDocs,onSnapshot , deleteDoc, doc ,} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCsw7PgNwMfhYpp7nKF6tP1l8_hSLG4uok",
    authDomain: "fir-javascript-970a3.firebaseapp.com",
    projectId: "fir-javascript-970a3",
    storageBucket: "fir-javascript-970a3.appspot.com",
    messagingSenderId: "700348786192",
    appId: "1:700348786192:web:567a582ae72b6dec108c95"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export const Tasksave = (title,description) =>{
    addDoc(collection(db,'tasks'),{title,description});
  };

  export const getTasks = ()=> getDocs(collection(db,'tasks'));
  export const ongetTask = (callback) => onSnapshot(collection(db,'tasks'),callback);
  export const deleteTask = (id) => deleteDoc(doc(db,'tasks',id));