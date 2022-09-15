inputFirstName = document.querySelector('#firstName');
inputLastName = document.querySelector('#lastName')
    // console.log(inputFirstName)
    //listening to user input for first name
inputFirstName.addEventListener('input', (e) => {
    let userInput = inputFirstName.value;
    console.log(userInput)
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
inputLastName.addEventListener('input', (e) => {
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