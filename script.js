const submit = document.getElementById('submit')
const fName = document.getElementById('fName')
const lName = document.getElementById('lName')
const email = document.getElementById('email')
const password = document.getElementById('password')

// The addEventListener does not work with 'submit'... just change to button click...
submit.addEventListener('click', e => {
    e.preventDefault()
    checkInputs()
})

function checkInputs() {
    const fNameValue = fName.value.trim()
    const lNameValue = lName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    if(fNameValue === '') {
        setError(fName, 'First Name cannot be empty!')
    } else {
        setSuccess(fName, 'Ok!')
    }

    if(lNameValue === '') {
        setError(lName, 'Last Name cannot be empty!')
    } else {
        setSuccess(lName, 'Ok!')
    }

    if(emailValue === '') {
        setError(email, 'E-mail cannot be empty!')
    } else if(!validateEmail(emailValue)) {
        setError(email, 'Looks like this is not an email!')
    } else {
        setSuccess(email, 'Ok!')
    }

    if(passwordValue === '') {
        setError(password, 'Password cannot be empty!')
    } else {
        setSuccess(password, 'Ok!')
    }
}

function setError(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    formControl.className = 'form-control error'
    small.innerText = message
}

function setSuccess(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    formControl.className = 'form-control success'
    small.innerText = message
    
}
// This is not mine --> stackoverflow's (Knows nothing about regex..)
function validateEmail(email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return re.test(String(email).toLowerCase());
}
