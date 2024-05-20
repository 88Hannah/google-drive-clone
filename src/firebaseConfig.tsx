import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ6kfvOF1IQWn4fs1d2xc7AKhZg7CMVho",
  authDomain: "drive-clone-4064f.firebaseapp.com",
  projectId: "drive-clone-4064f",
  storageBucket: "drive-clone-4064f.appspot.com",
  messagingSenderId: "50456241978",
  appId: "1:50456241978:web:4f5c781d7a7119f5955203"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);