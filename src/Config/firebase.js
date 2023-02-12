// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvFcUYlSu_t99DDzA6Nc0-_-uWWBE2GX0",
  authDomain: "last-hackathon-fda62.firebaseapp.com",
  projectId: "last-hackathon-fda62",
  storageBucket: "last-hackathon-fda62.appspot.com",
  messagingSenderId: "780156323426",
  appId: "1:780156323426:web:fb216a0b8bb18f482a333b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("application",app)
const auth = getAuth(app)
const db = getFirestore(app)





async function signUpFirebase(userInfo) {
  const { email, password } = userInfo;
  //=================call the firebase built in function to import line No #4
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  
  await addUserToDb(userInfo, userCredential.user.uid)

  console.log("user==>",userCredential)
  console.log("userID ===", userCredential.user.uid);
  //=================call the function to make the blew
//   await addUserToDb(userInfo, userCredential.user.uid, imageurl);
}

function addUserToDb(userInfo, uid) {
  const { username, email,contact } = userInfo;
  //call the firebase built in function to import the line No #4
  return setDoc(doc(db, "users", uid), { username, email, contact});
}

async function signInFirebase(email,password){
  const user = await signInWithEmailAndPassword(auth,email,password)
  // console.log("user",user)
  return user
  // alert("Login Successfully")
}

export {signUpFirebase,signInFirebase}