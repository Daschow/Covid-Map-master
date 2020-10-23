const logOut = document.querySelector('#logOut');
const mergeAccounts = document.querySelector('#mergeAccounts');
const modifyAccount = document.querySelector('#modifyAccount');
const displayNameHolder = document.querySelector('#displayNameHolder');
const photoHolder = document.querySelector('#photoHolder');

const auth = firebase.auth();

logOut.addEventListener('click', () => {
    //signOut() is a built in firebase function responsible for signing a user out
    auth.signOut()
    .then(() => {
        window.location.assign('../');
    })
    .catch(error => {
        console.error(error);
    })
})