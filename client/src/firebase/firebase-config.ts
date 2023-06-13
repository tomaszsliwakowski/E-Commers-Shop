import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import { getAuth } from "firebase/auth";

type firetype = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};

const firebaseConfig: firetype = {
  apiKey: "AIzaSyCV64H2GYbRwFrQpczhwWk4BxEEtBUS4IA",
  authDomain: "e-commers-shop-d9ad0.firebaseapp.com",
  projectId: "e-commers-shop-d9ad0",
  storageBucket: "e-commers-shop-d9ad0.appspot.com",
  messagingSenderId: "81437723823",
  appId: "1:81437723823:web:c15cbee254b94e6599d85a",
  measurementId: "G-BNE6G5ZD95",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
