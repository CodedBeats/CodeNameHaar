import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"
import "dotenv/config"

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "codedbeats-47589.firebaseapp.com",
  projectId: "codedbeats-47589",
  storageBucket: "codedbeats-47589.appspot.com",
  messagingSenderId: "927207907473",
  appId: process.env.FIREBASE_APP_ID
};

// init firebase app
const app = initializeApp(firebaseConfig)

// init services by connecting to database
export const db = getFirestore(app)


    
    