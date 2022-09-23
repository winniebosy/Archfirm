inputFirstName = document.querySelector('#firstName');
inputLastName = document.querySelector('#lastName');
let phoneNumber = document.querySelector('#telNumber')
    // console.log(inputFirstName)
    //listening to user input for first name
inputFirstName.addEventListener('blur', (e) => {
    let userInput = inputFirstName.value;
    //console.log(userInput)
    let errDisplay = document.querySelector('#fnameError')
    if (userInput === '') {
        errDisplay.textContent = "Error: first name field cannot be empty";
        errDisplay.focus();
    } else if (userInput) {
        errDisplay.innerText = '✔️ OK';
    } else {
        errDisplay.textContent = " "

    }

});
//listening to user input for last name
inputLastName.addEventListener('blur', (e) => {
    let userInput = inputLastName.value;
    console.log(userInput)
    let errDisplay = document.querySelector('#lnameError')
    if (userInput === '') {
        errDisplay.textContent = "Error: last name field cannot be empty";
        errDisplay.focus();
    } else if (userInput) {
        errDisplay.innerText = '✔️ OK';
    } else {
        errDisplay.textContent = " "

    }

});


//validating telephone number
function validatePhoneNumber(telnumber) {
    const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(telnumber)

}
phoneNumber.addEventListener('blur', (e) => {
    let userTelNumber = phoneNumber.value;
    let phoneErrorDisplay = document.querySelector('#telError');
    if (!validatePhoneNumber(userTelNumber)) {
        phoneErrorDisplay.textContent = 'Error: wrong telephone number format';
        phoneErrorDisplay.focus()
    } else if (validatePhoneNumber(userTelNumber)) {
        phoneErrorDisplay.textContent = '✔️ OK';
    } else {
        phoneErrorDisplay.textContent = " ";
    }
})


//validating email
function validateEmail(mail) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(mail).toLowerCase());

}

let email = document.querySelector('#email');
email.addEventListener('blur', (e) => {
    let userEmail = email.value;
    let mailError = document.querySelector('#emailError');

    if (validateEmail(userEmail)) {
        mailError.textContent = '✔️ OK';
    } else if (!validateEmail(userEmail)) {
        mailError.textContent = 'Error: wrong email format';
        mailError.focus();
    }
})