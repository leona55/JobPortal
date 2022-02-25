import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDneKoM_9RvuOhZCfIqFznwNxPRQ0Rsc0Q",
  authDomain: "smoothie-app-4ec9a.firebaseapp.com",
  projectId: "smoothie-app-4ec9a",
  storageBucket: "smoothie-app-4ec9a.appspot.com",
  messagingSenderId: "999341107241",
  appId: "1:999341107241:web:d6aad23739ffabbe9b5438"
};
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const timestamp =firebase.firestore.FieldValue.serverTimestamp;
  export {timestamp};
  export default firebaseApp.firestore();