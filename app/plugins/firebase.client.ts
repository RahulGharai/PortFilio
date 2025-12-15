import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyBxOtJ_2Gd3TjIprqMJpMXEIB5Vc8wv3L",
    authDomain: "portfoliogharairahul.firebaseapp.com",
    projectId: "portfoliogharairahul",
    storageBucket: "portfoliogharairahul.firebasestorage.app",
    messagingSenderId: "872779821615",
    appId: "1:872779821615:web:37bc198f26092e51824cda",
    measurementId: "G-5N6X86RTH0"
  };

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  // Initialize Firestore
  const firestore = getFirestore(firebaseApp);

  return {
    provide: {
      firestore
    }
  };
});