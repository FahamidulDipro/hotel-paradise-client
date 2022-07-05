// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDixAkwDYWZHqu-se0U-Kd37u4aKER6E4U",
  authDomain: "hotel-paradise-30c30.firebaseapp.com",
  projectId: "hotel-paradise-30c30",
  storageBucket: "hotel-paradise-30c30.appspot.com",
  messagingSenderId: "66890796859",
  appId: "1:66890796859:web:fdd8c1a99a1c059755f11e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
