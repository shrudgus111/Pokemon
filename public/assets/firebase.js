import firebase from 'firebase/compat/app'
import 'firebase/compat/database';
import 'firebase/compat/storage';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAxHUZaYTLdx-Tt1JMSXfJBrLPsgoq1KG0",
  authDomain: "starship-54cea.firebaseapp.com",
  databaseURL: "https://starship-54cea-default-rtdb.firebaseio.com",
  projectId: "starship-54cea",
  storageBucket: "starship-54cea.appspot.com",
  messagingSenderId: "425785201040",
  appId: "1:425785201040:web:19dcfcb1ff477643c9a315"
  });

const oDB = firebaseConfig.database()
export const productDB = oDB.ref('products')
export const cartDB = oDB.ref('carts')
export const memberDB = oDB.ref('members')

export const oStorage = firebaseConfig.storage();