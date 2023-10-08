
import * as firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyDP4wf2NY1HUhzPaRRLm1E4sLnDWkFOHpM",
  authDomain: "dormitoryrent.firebaseapp.com",
  projectId: "dormitoryrent",
  storageBucket: "dormitoryrent.appspot.com",
  messagingSenderId: "440171648400",
  appId: "1:440171648400:web:72b2de0d92fe35549f4f15",
  measurementId: "G-GFZG534F8T"
};

firebase.initializeApp(firebaseConfig);

export default firebase;