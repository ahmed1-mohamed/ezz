import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  onMessage,
  Messaging,
} from "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const isFirebaseConfigured = () => {
  return !!(
    firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.storageBucket &&
    firebaseConfig.messagingSenderId &&
    firebaseConfig.appId
  );
};

const isAnyFirebaseVariableSet = () => {
  return !!(
    firebaseConfig.apiKey ||
    firebaseConfig.authDomain ||
    firebaseConfig.projectId ||
    firebaseConfig.storageBucket ||
    firebaseConfig.messagingSenderId ||
    firebaseConfig.appId
  );
};

let app: FirebaseApp | undefined;
let messaging: Messaging | undefined;

if (typeof window !== "undefined" && isFirebaseConfigured()) {
  try {
    if (!getApps().length) {
      app = initializeApp(firebaseConfig);
    } else {
      app = getApps()[0];
    }

    messaging = getMessaging(app);
  } catch (error) {
    console.error("Firebase initialization error:", error);
  }
} else if (typeof window !== "undefined" && !isFirebaseConfigured() && isAnyFirebaseVariableSet()) {
  console.warn(
    "Firebase is partially configured. Please set up all Firebase environment variables in .env file."
  );
}

export { app, messaging, getToken, onMessage };