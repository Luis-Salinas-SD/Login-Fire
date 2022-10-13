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
            console.log(usuario.code);

            //Cerrar el modal una vez cumplido el try
            //en closeModal seleccionamos el modal que queremos afectar
            const closeModal = document.querySelector('#registro')
            //obtenemos la informacion del modal a traves de los
            const modal = bootstrap.Modal.getInstance(closeModal).hide()

        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.info(errorCode)
            //console.warn(errorMessage)

            if (errorCode === 'auth/email-already-in-use') {
                Toastify({
                    text: "El usuario ya exsiste",
                    duration: 3000,
                    newWindow: true,
                    close: true,
                    gravity: "bottom", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: " #f5b041 ",
                    },
                    onClick: function () { console.log('click sobre el toast') } // Callback after click
                }).showToast();

            } else if (errorCode === 'auth/invalid-email') {
                alert('Correo invalido');
            } else if (errorCode === 'auth/weak-password') {
                alert('Password demasiado corto');
            } else if (errorCode) {
                alert('Algo salió mal')
            }
        }

    }
    getUser()
})