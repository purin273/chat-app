import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyBoHDo27qLCDYEQZW8GP8oNMbOHn0YMBPs",
  authDomain: "chat-web-app-f95c7.firebaseapp.com",
  projectId: "chat-web-app-f95c7",
  storageBucket: "chat-web-app-f95c7.appspot.com",
  messagingSenderId: "807426671926",
  appId: "1:807426671926:web:a34e2eb547c20bd673df97"
};

const app =firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
