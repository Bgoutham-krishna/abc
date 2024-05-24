function validation() 
{
    const nameInput = document.getElementById('exampleInput1');
    const emailInput = document.getElementById('exampleInput2');
    const unitCodeInput = document.getElementById('exampleInput3');
    const phoneInput = document.getElementById('exampleInput4');

    const nameMsg = document.getElementById('nameMsg');
    const emailMsg = document.getElementById('emailMsg');
    const message = document.getElementById('unitCodeMsg');
    const phoneMsg = document.getElementById('phoneMsg');

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameMsg.textContent = 'You did not enter your name';
        nameMsg.style.color = 'red';
        isValid = false;
    } else {
        nameMsg.textContent = 'Valid';
        nameMsg.style.color = 'green';
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(emailInput.value)) {
        emailMsg.textContent = 'Must be your email @gmail.com';
        emailMsg.style.color = 'red';
        isValid = false;
    } else {
        emailMsg.textContent = 'Valid';
        emailMsg.style.color = 'green';
    }

    
    if (unitCodeInput.value.trim() === '') {
        message.textContent = 'Please enter your message';
        message.style.color = 'red';
        isValid = false;
    } else {
        message.textContent = 'Valid';
        message.style.color = 'green';
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneInput.value)) {
        phoneMsg.style.color = 'red';
        const nonDigitCharacter = phoneInput.value.match(/[^0-9]/);
        if (nonDigitCharacter) {
            phoneMsg.textContent = `Contains character ${nonDigitCharacter[0]}. Numbers only!`;
        } else {
            phoneMsg.textContent = 'Phone number must be exactly 10 digits';
        }
        isValid = false;
    } else {
        phoneMsg.textContent = 'Valid';
        phoneMsg.style.color = 'green';
    }

    return isValid;
}

function cusreset()
{
    const nameMsg = document.getElementById('nameMsg');
    const emailMsg = document.getElementById('emailMsg');
    const message = document.getElementById('unitCodeMsg');
    const phoneMsg = document.getElementById('phoneMsg');
    nameMsg.textContent = '';
    emailMsg.textContent = '';
    message.textContent = '';
    phoneMsg.textContent = '';
}



