import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showToast.js";

const resgisterUser = document.querySelector('#regUser')

resgisterUser.addEventListener('submit', async (e) => {
    e.preventDefault()

    let mail = resgisterUser['sign-email'].value
    let pass = resgisterUser['sign-pass'].value


    try {
        const usuario = await createUserWithEmailAndPassword(auth, mail, pass)
        console.log(usuario.user.email);

        //Cerrar el modal una vez cumplido el try
        //en closeModal seleccionamos el modal que queremos afectar
        const closeModal = document.querySelector('#registro')
        //obtenemos la informacion del modal a traves de los
        const modal = bootstrap.Modal.getInstance(closeModal).hide()

        showMessage('Bienvenido ' + usuario.user.email, 'success')

        pass.reset()

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.info(errorCode)
        //console.warn(errorMessage)

        if (errorCode === 'auth/email-already-in-use') {
            showMessage('El usuario ya exsiste', 'failed')
        } else if (errorCode === 'auth/invalid-email') {
            showMessage('Correo incorrecto', 'failed')
        } else if (errorCode === 'auth/weak-password') {
            showMessage('Contraseña demasiado corta', 'failed')
        } else if (errorCode) {
            showMessage('Algo salió mal', 'failed')
        }
    }

})