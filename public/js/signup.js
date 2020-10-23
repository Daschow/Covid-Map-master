const mailField = document.querySelector('#mail');
const passwordField = document.querySelector('#password');
const displayNameField = document.querySelector('#displayName');
const photoField = document.querySelector('#photo');
const labels = document.querySelector('label');
const signUp = document.querySelector('#signUp');
const failureModal = document.querySelector('.failure');

const auth = firebase.auth();
auth.useDeviceLanguage();


const logout = () => {
    const email = mailField.value;
    const password = passwordField.value;

    //Built in firebase function responsible for signing up a user
    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
        console.log('Signed Up Successfully !');
        sendVerificationEmail();
    })
    .catch(error => {
        console.error(error);
        //Shows a modal as feedback if there's an error
        failureModal.style.display = 'flex';
        setTimeout(()=>{
            failureModal.style.display = 'none';
        }, 1000);
    })
}

signUp.addEventListener('click', logout);
