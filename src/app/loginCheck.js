const loggedOutLink = document.querySelectorAll('.logged-out')
const loggedInLink = document.querySelectorAll('.logged-in')

console.log(loggedInLink);
console.log(loggedOutLink);


export const loginCheckF = user => {
    if (user) {
        loggedOutLink.forEach(element => element.style.display = 'none')
        loggedInLink.forEach(element => element.style.display = 'display')
    } else {
        loggedOutLink.forEach(element => element.style.display = 'display')
        loggedInLink.forEach(element => element.style.display = 'none')
    }
}