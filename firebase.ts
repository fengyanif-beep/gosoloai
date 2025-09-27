import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// =================================================================================
// CRITICAL: YOU MUST REPLACE THIS WITH YOUR OWN FIREBASE CONFIGURATION
// =================================================================================
// 1. Go to the Firebase console: https://console.firebase.google.com/
// 2. Create a new project (or use an existing one).
// 3. Go to Project Settings > General tab.
// 4. Under "Your apps", click the web icon (</>) to add a web app.
// 5. Follow the steps and copy the `firebaseConfig` object here.
// =================================================================================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // <-- PASTE YOURS HERE
  authDomain: "YOUR_AUTH_DOMAIN", // <-- PASTE YOURS HERE
  projectId: "YOUR_PROJECT_ID", // <-- PASTE YOURS HERE
  storageBucket: "YOUR_STORAGE_BUCKET", // <-- PASTE YOURS HERE
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // <-- PASTE YOURS HERE
  appId: "YOUR_APP_ID" // <-- PASTE YOURS HERE
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
