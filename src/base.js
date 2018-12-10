var Rebase = require("re-base");
var firebase = require("firebase");


const config = {
  apiKey: "AIzaSyDjlIQ7YxnjVzoruwVGu-svlB_drohcxwo",
  authDomain: "bora-ajudarr.firebaseapp.com",
  databaseURL: "https://bora-ajudarr.firebaseio.com",
  projectId: "bora-ajudarr",
  storageBucket: "bora-ajudarr.appspot.com",
  messagingSenderId: "702594277236"
  };
  
  const app  = firebase.initializeApp(config)
  export const base = Rebase.createClass(app.database())
  export const auth = firebase.auth();