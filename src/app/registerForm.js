import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js"
import { auth } from "./firebase.js";

const resgisterUser = document.querySelector('#regUser')

resgisterUser.addEventListener('submit', (e) => {
    e.preventDefault()

    let mail = resgisterUser['sign-email'].value
    let pass = resgisterUser['sign-pass'].value

    createUserWithEmailAndPassword(auth, mail, pass)
})