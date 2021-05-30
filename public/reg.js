'use strict';

function clearBox(id) {
    document.getElementById(id).innerHTML = "";
}



// -------REG------ \\
let password = document.getElementById('password');
const passwordCheck = document.getElementById('passwordAgain');
const regBtn = document.getElementById('reg');
const regBody = document.querySelector('.container');
let inputEmail = document.getElementById('email');


///-----LOGIN------\\\
let passwordLogIn = document.getElementById('passwordLogIn');
const logInBtn = document.getElementById('logIn');
const loginBody = document.querySelector('.container2');
const loggedIn = document.getElementById('loggedIn'); //üdvöző szöveg
let emailLogIn = document.getElementById('emailLogIn')



///----to login link----\\\

const loginLink = document.querySelector('.login');

loginLink.addEventListener('click', (e) => {

    e.preventDefault();
    regBody.classList.add('d-none');
    loginBody.classList.remove('d-none');
})

///----to reg link----\\\

const regLink = document.querySelector('.regBack');

regLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginBody.classList.add('d-none');
    regBody.classList.remove('d-none');
})


//---checking the state of login---\\\

let User = null;

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        User = Object.assign({}, user);

        loginBody.classList.add('d-none');


    } else {
        //ha vmiért nem sikerül, megjelenik a login, többi rejtve van
        loginBody.classList.remove('d-none');
        regBody.classList.add('d-none');
        loggedIn.classList.add('d-none');
    }
});


///----sign in existing useres----\\\

//send auth req.

const loginForm = document.getElementById('logInForm');
const logOutLink = document.getElementById('logOut');



//ha lefut, akkor megváltozik a státusz, belefut az onAuthStateChanged függvénybe
loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(emailLogIn.value, passwordLogIn.value)
            .then((userCredential) => {
                // Signed in

                if (emailLogIn.value.includes('@') && passwordLogIn.value.length > 5) {
                    const welcome = document.getElementById('welcome');
                    loginBody.classList.add('d-none');
                }
            })
            .catch((error) => {

                alert(error.message)
            })
    })
    /*
    logOutLink.addEventListener('click', (e) => {
        e.preventDefault();
        clearBox('welcome');
        firebase.auth().signOut();
    });*/




///----REG----\\\
const regForm = document.getElementById('regForm')



//ha lefut, akkor megváltozik a státusz, belefut az onAuthStateChanged függvénybe
regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    firebase
        .auth()
        .createUserWithEmailAndPassword(inputEmail.value, password.value)
        .then((userCredential) => {
            // Signed in

            if (inputEmail.value.includes('@') && password.value.length > 5 && password.value === passwordCheck.value) {

                regBody.classList.add('d-none');
                const welcome = document.getElementById('welcome');
                welcome.textContent = `Welcome ${inputEmail.value}!`;
                loggedIn.classList.remove('d-none');

            }
        })
        .catch((error) => {
            alert(error.message)
        });

})

/*
logOutLink.addEventListener('click', (e) => {
    e.preventDefault();
    clearBox('welcome');
    firebase.auth().signOut();
});
*/




//---eye icon---\\
function codeReveal() {
    let x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}