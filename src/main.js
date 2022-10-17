import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js"
import { auth } from './app/firebase.js';
import { loginCheckF } from './app/loginCheck.js';
import './app/registerForm.js'
import './app/logout.js';

onAuthStateChanged(auth, async (user) => {
    loginCheckF(user)
})

