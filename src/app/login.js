import { signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js"
import { auth } from './firebase.js';
import { showMessage } from "./showToast.js";

const inicioUser = document.querySelector('#loginUser')

inicioUser.addEventListener('submit', async (e) => {
    e.preventDefault()
    let email = inicioUser['mail'].value
    let pwd = inicioUser['pass'].value

    console.log(email);
    console.log(pwd);


    try {
        const usuario = await signInWithEmailAndPassword(auth, email, pwd)
        console.log(usuario);

        const closeModal = document.querySelector('#inicio')
        //obtenemos la informacion del modal a traves de los
        const modal = bootstrap.Modal.getInstance(closeModal).hide()
        showMessage('Bienvenido ', 'success')



    } catch (error) {
        const msm = error.code
        console.log(msm);
        if (msm === 'auth/user-not-found') {
            showMessage('Usuario no encontrado ', 'failed')
        } else if (msm === 'auth/wrong-password') {
            showMessage('Password incorrectos ', 'failed')
        }
    }

    /* Funcion que cierra la sesión al pasar 1 minuto */
    setInterval(async () => {
        await signOut(auth);
    }, 60000);

})

