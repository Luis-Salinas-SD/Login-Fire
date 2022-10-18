const loggedOutLink = document.querySelectorAll('.logged-out')
const loggedInLink = document.querySelectorAll('.logged-in')

console.log(loggedInLink);
console.log(loggedOutLink);


export const loginCheckF = user => {
    if (user) {
        loggedInLink.forEach(element => element.style.display = 'block')
        loggedOutLink.forEach(element => element.style.display = 'none')
    } else {
        loggedOutLink.forEach(element => element.style.display = 'block')
        loggedInLink.forEach(element => element.style.display = 'none')
    }
}