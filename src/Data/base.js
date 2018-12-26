var config = {
  apiKey: "AIzaSyDjlIQ7YxnjVzoruwVGu-svlB_drohcxwo",
  authDomain: "bora-ajudarr.firebaseapp.com",
  databaseURL: "https://bora-ajudarr.firebaseio.com",
  projectId: "bora-ajudarr",
  storageBucket: "bora-ajudarr.appspot.com",
  messagingSenderId: "702594277236"
};
//   firebase.initializeApp(config);

const firebaseToAuth = require("firebase")
const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')
require('firebase/storage')
const app = firebase.initializeApp(config);

const base = Rebase.createClass(app.database())
export default base
export const storage = app.storage();
export const auth = firebaseToAuth.auth();
// var Rebase = require("re-base");
// var firebase = require("firebase");


// const config = {
//   apiKey: "AIzaSyDjlIQ7YxnjVzoruwVGu-svlB_drohcxwo",
//   authDomain: "bora-ajudarr.firebaseapp.com",
//   databaseURL: "https://bora-ajudarr.firebaseio.com",
//   projectId: "bora-ajudarr",
//   storageBucket: "bora-ajudarr.appspot.com",
//   messagingSenderId: "702594277236"
//   };

//   const app  = firebase.initializeApp(config)
//   export const base = Rebase.createClass(app.database())
//   export const auth = firebase.auth();