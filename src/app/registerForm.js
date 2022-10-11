const resgisterUser = document.querySelector('#regUser')

resgisterUser.addEventListener('submit', (e) => {
    e.preventDefault()

    let mail = resgisterUser['sign-email'].value
    let pass = resgisterUser['sign-pass'].value
    console.log(mail, pass);
})