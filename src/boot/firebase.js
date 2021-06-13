import firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"




var firebaseConfig = {
  apiKey: "AIzaSyCsElI9QYkaRwLOGHCSgig19Jpoo-3WbHA",
  authDomain: "quasardemo-13004.firebaseapp.com",
  databaseURL: "https://quasardemo-13004-default-rtdb.firebaseio.com",
  projectId: "quasardemo-13004",
  storageBucket: "quasardemo-13004.appspot.com",
  messagingSenderId: "39773473865",
  appId: "1:39773473865:web:aac9f3ec486c8c90d94398"
};





let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }