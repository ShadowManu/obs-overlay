import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC5ivdPZWP7y8LUjwfBMPvmHUTePKGjfVs",
  authDomain: "manuelpachecodev.firebaseapp.com",
  projectId: "manuelpachecodev",
  storageBucket: "manuelpachecodev.appspot.com",
  messagingSenderId: "288872120223",
  appId: "1:288872120223:web:b1c078f25aa778170647aa",
};

export const firebase = initializeApp(firebaseConfig);
