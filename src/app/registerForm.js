import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js"
import { auth } from "./firebase.js";

const resgisterUser = document.querySelector('#regUser')

resgisterUser.addEventListener('submit', (e) => {
    e.preventDefault()

    let mail = resgisterUser['sign-email'].value
    let pass = resgisterUser['sign-pass'].value

    async function getUser() {
        try {
            const usuario = await createUserWithEmailAndPassword(auth, mail, pass)
            console.log(usuario);

            //Cerrar el modal una vez cumplido el try
            //en closeModal seleccionamos el modal que queremos afectar
            const closeModal = document.querySelector('#registro')
            //obtenemos la informacion del modal a traves de los
            const modal = bootstrap.Modal.getInstance(closeModal).hide()

        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.info(errorCode)
            console.warn(errorMessage)
        }

    }
    getUser()
})