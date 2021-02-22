import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAlFzy8B9UvkpjxOw1kYGGU1cDyqRY2aSA",
  authDomain: "pitpat-9800f.firebaseapp.com",
  projectId: "pitpat-9800f",
  storageBucket: "pitpat-9800f.appspot.com",
  messagingSenderId: "576792965190",
  appId: "1:576792965190:web:78837f5de8f3200e5c1a47"
})

/*
const auth = firebase.auth();
const firestore = firebase.firestore();

const [user] = useAuthState();
*/
