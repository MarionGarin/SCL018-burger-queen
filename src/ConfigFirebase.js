// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2_m7yZR4TRcdV3ejkWH1FMuw-UI4k8WI",
  authDomain: "thea-a4379.firebaseapp.com",
  projectId: "thea-a4379",
  storageBucket: "thea-a4379.appspot.com",
  messagingSenderId: "775296544896",
  appId: "1:775296544896:web:954734e0d853726974b665"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};