// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8jaUmSSYcKuUWBbQ0nuQvnywkoo96MOc",
  authDomain: "used-products-resale-client.firebaseapp.com",
  projectId: "used-products-resale-client",
  storageBucket: "used-products-resale-client.appspot.com",
  messagingSenderId: "305518564181",
  appId: "1:305518564181:web:fa844206efb595ba5595dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;