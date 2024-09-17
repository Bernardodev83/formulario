const firstName = document.querySelector('#firstNameInput');
const lastName = document.querySelector('#lastNameInput');
const email = document.querySelector('#emailInput');
const password = document.querySelector('#passwordInput');

const button = document.querySelector('#submitInput');

const firstContentError = document.querySelector('#firstcontentError');
const lastContentError = document.querySelector('#lastcontentError')
const emailContentError = document.querySelector('#emailcontentError')
const passswordContentError = document.querySelector('#passwordcontentError')



button.addEventListener('click', (e) => {
    e.preventDefault() 
    validation(firstName.value, firstName, firstContentError,'First Name cannot be empty');
    validation(lastName.value, lastName, lastContentError, 'Last Name cannot be empty');
    validationEmail(email.value, email, emailContentError, 'email error cannot be empty');
    validation(password.value, password, passswordContentError,'Password cannot be empty')
})

function validation(value, divInput, error, message) {
    if (value.length == 0) {
        showError(divInput, error, message)
    } else {
       hiddenError(divInput, error)
    }
}

function validationEmail(value, divInput, error, message) {
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    if (expReg.test(value) == true) {
        hiddenError(divInput, error, message)
    } else {
       showError(divInput, error)
    }
}


function showError(divInput, error, message) {
    divInput.style.border ='1px solid hsl(0, 100%, 74%)'
    error.innerHTML =`<img class="icon-error" src="./images/icon-error.svg" alt=""><p class="text-error">${message}</p>` 
}

function hiddenError(divInput, error) {
    divInput.style.border = '1px solid hsl(246, 25%, 77%)'
    error.innerHTML = ''; 

}

