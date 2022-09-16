const firstName = document.getElementById('f-name')
const lastName = document.getElementById('l-name')
const Email = document.getElementById('email')

firstName.addEventListener('keyup', validateFirstName)
lastName.addEventListener('keyup', validateLastName)
Email.addEventListener('keyup', validateEmail)

function validateFirstName(e) {
    const fName = firstName.value;
    const re = /^[a-zA-Z]{2,10}$/;
    if (!fName.match(re)) {
        firstName.classList.remove('is-valid')
        firstName.classList.add('is-invalid')
        setTimeout(() => {
            firstName.classList.remove('is-invalid')
        }, 1500)
    } else {
        firstName.classList.remove('is-invalid')
        firstName.classList.add('is-valid')
        setTimeout(() => {
            firstName.classList.remove('is-valid')
        }, 1500)
    }
    e.preventDefault()
}

function validateLastName(e) {
    const lName = lastName.value;
    const re = /^[a-zA-Z]{2,10}$/;
    if (!lName.match(re)) {
        lastName.classList.remove('is-valid')
        lastName.classList.add('is-invalid')
        setTimeout(() => {
            lastName.classList.remove('is-invalid')
        }, 1500)
    } else {
        lastName.classList.remove('is-invalid')
        lastName.classList.add('is-valid')
        setTimeout(() => {
            lastName.classList.remove('is-valid')
        }, 1500)
    }
    e.preventDefault()
}


function validateEmail(e) {

    const email = Email.value
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})/;
    if (!email.match(re)) {
        Email.classList.remove('is-valid')
        Email.classList.add('is-invalid')
        setTimeout(() => {
            Email.classList.remove('is-invalid')
        }, 1500)
    } else {
        Email.classList.remove('is-invalid')
        Email.classList.add('is-valid')
        setTimeout(() => {
            Email.classList.remove('is-valid')
        }, 1500)
    }
    e.preventDefault()
}