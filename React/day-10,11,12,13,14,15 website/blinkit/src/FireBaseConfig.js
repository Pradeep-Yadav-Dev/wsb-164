
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB-YfZFnH9UkLLMk37FgUVIbX8JK0hL5jM",
  authDomain: "wsb-164.firebaseapp.com",
  projectId: "wsb-164",
  storageBucket: "wsb-164.firebasestorage.app",
  messagingSenderId: "612367868988",
  appId: "1:612367868988:web:14c917923fa3be8e824f39",
  measurementId: "G-YFXEZJ6DVE"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);