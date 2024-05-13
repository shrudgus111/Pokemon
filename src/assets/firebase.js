import firebase from 'firebase/compat/app'
import 'firebase/compat/database';
import 'firebase/compat/storage';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBk_TI-0VyBLWAf9mCdGN6cgCzj8yQXzFE",
  authDomain: "soo-project-73ca3.firebaseapp.com",
  databaseURL: "https://soo-project-73ca3-default-rtdb.firebaseio.com/",
  projectId: "soo-project-73ca3",
  storageBucket: "soo-project-73ca3.appspot.com",
  messagingSenderId: "512535586432",
  appId: "1:512535586432:web:6254d32353d8d9848ba865"
  });

const oDB = firebaseConfig.database()
export const productDB = oDB.ref('products')
export const cartDB = oDB.ref('carts')
export const memberDB = oDB.ref('members')
export const noticeDB = oDB.ref('notice')
export const reviewDB = oDB.ref('review')


export const oStorage = firebaseConfig.storage();