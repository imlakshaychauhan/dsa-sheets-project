import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {getFirestore} from '@firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyA62v5LOLdoXa8dc-1YN8mV8CIyKWY_ZtM",
    authDomain: "dsa-project-db.firebaseapp.com",
    projectId: "dsa-project-db",
    storageBucket: "dsa-project-db.appspot.com",
    messagingSenderId: "67584183202",
    appId: "1:67584183202:web:d22547ab11253543a380fb",
    measurementId: "G-6DTR9XFCDJ",
})

export default app

export const auth = app.auth()
export const db = getFirestore();