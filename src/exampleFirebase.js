import firebase from 'firebase'

var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const dbRefBooks = firebase.database().ref("books/")
export const fbAuth = firebase.auth;
export default firebase