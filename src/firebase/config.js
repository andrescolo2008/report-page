// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZnlSQ4G1fASJkObpRttTTcSrwqaHLLKc",
  authDomain: "report-page-405e1.firebaseapp.com",
  projectId: "report-page-405e1",
  storageBucket: "report-page-405e1.appspot.com",
  messagingSenderId: "137321925681",
  appId: "1:137321925681:web:f7bde4628edbb9e49d5910"
};
// Initialize Firebase
// esta es la aplicación- sirve para hacer le pruebas
export const fireBaseApp = initializeApp(firebaseConfig);
//Aquí estan todas las funcionalidades de autenticación 
export const fireBaseAuth = getAuth(fireBaseApp);
// Aquí está la conficuración de mibase de datos
export const fireBaseDB = getFirestore(fireBaseApp);

