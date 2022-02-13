import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3ryT1fZwbaSNumHH20NvAa3zPkY63F7c",
  authDomain: "smoothieapp-dc49e.firebaseapp.com",
  projectId: "smoothieapp-dc49e",
  storageBucket: "smoothieapp-dc49e.appspot.com",
  messagingSenderId: "184792580386",
  appId: "1:184792580386:web:a78e2416b4c1291afda57b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();