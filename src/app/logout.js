import { signOut } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js"
import { auth } from "./firebase.js";

let logout = document.querySelector('#logout')

logout.addEventListener('click', async () => {
    await signOut(auth);
    console.log('El usuario cerró sesión');
})




