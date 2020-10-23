const btnRegister = document.querySelector("#signup");
const submitButton = document.querySelector("#push");
const emailField = document.querySelector("#mail");
const passwordFiel = document.querySelector("#password");

// Initialize the FirebaseUI Widget using Firebase.
const config = {
  apiKey: "AIzaSyDss330-ZBxn1pdxSjxS_oHjDah4O1Ksrw",
  authDomain: "covid-proj-ae853.firebaseapp.com",
  databaseURL: "https://covid-proj-ae853.firebaseio.com",
  projectId: "covid-proj-ae853",
  storageBucket: "covid-proj-ae853.appspot.com",
  messagingSenderId: "250905634850",
  appId: "1:250905634850:web:d1d8069eddf6bee7d9c27b",
  measurementId: "G-2DP6ZZEVD3",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
database = firebase.database();
var ref = database.ref("users/");

function addFirebaseUser(longitude, latitude) {
  let data = {
    longitude: longitude,
    latitude: latitude,
  };
  console.log(data);
  const ref = database.ref("users/");
  ref.push(data);
}
function errData(err) {
  console.log("Error!");
  console.log(err);
}
