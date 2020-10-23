const mailContainer = document.querySelector(".mail-container");
const shownMailContainer = "container mail-container shown-container";
const hiddenMailContainer = "container mail-container hidden-container";
const shownSocialMediaContainer =
  "container socialMedia-container shown-container";
const hiddenSocialMediaContainer =
  "container socialMedia-container hidden-container";
const phoneContainer = document.querySelector(".phone-container");
const mailField = document.getElementById("mail");
const passwordField = document.getElementById("password");
const labels = document.getElementsByTagName("label");
const signInWithMail = document.getElementById("signInWithMail");
const signUp = document.getElementById("signUp");
const failureModal = document.querySelector(".failure");

//Necessary part for the firebase built in functions
//It's easier and cleaner to type auth.signInWithEmailAndPassword
//than firebase.auth().signInWithEmailAndPassword
//also it's less repetitive since we are using it more than once
const auth = firebase.auth();

//Sign in function
const signInWithEmailFunction = () => {
  const email = mailField.value;
  const password = passwordField.value;

  //Built in firebase function responsible for authentication
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      //Signed in successfully
      window.location.assign("./profile");
    })
    .catch((error) => {
      //Something went wrong
      console.error(error);
    });
};

//Adds the click event to the signInWithMail button
//so it calls the signInWithEmail function whenever a user clicks on it
signInWithMail.addEventListener("click", signInWithEmailFunction);

//Go to signup page
signUp.addEventListener("click", () => {
  window.location.assign("./signup");
});
