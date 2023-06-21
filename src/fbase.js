import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  getDocs,
  query,
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
  where,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  getFirestore,
  addDoc,
  getDocs,
  query,
  collection,
  onSnapshot,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
  ref,
  uploadString,
  getDownloadURL,
  deleteObject,
  where,
  updateProfile,
};

export const dbService = getFirestore();
export const storageService = getStorage();
