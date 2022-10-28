import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showToast.js";

const googleBtn = document.querySelector('#googleBtn');

googleBtn.addEventListener('click', async () => {
    //Se debe instanciar el obj
    const provider = new GoogleAuthProvider();

    try {
        const credenciales = await signInWithPopup(auth, provider)
        console.log(credenciales);
        //Cerramos el Modal
        const closeModal = document.querySelector('#registro')
        //obtenemos la informacion del modal a traves de los
        const modal = bootstrap.Modal.getInstance(closeModal).hide()

        showMessage('Bienvenido ' + credenciales.user.displayName, 'success')

    } catch (error) {
        console.log(error);
    }

})