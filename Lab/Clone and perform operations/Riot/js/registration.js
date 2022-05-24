const getAge = document.getElementById('age');
const getDob = document.getElementById('dob');
const getFName = document.getElementById('fname');
const fNameErrorDisplay = document.getElementById('fname-error');
const getLName = document.getElementById('lname');
const lNameErrorDisplay = document.getElementById('lname-error');
const getUName = document.getElementById('uname');
const uNameErrorDisplay = document.getElementById('uname-error');
const getPassword1 = document.getElementById('password');
const getPassword2 = document.getElementById('confirm-password');
const password1ErrorDisplay = document.getElementById('password-error');
const password2ErrorDisplay = document.getElementById('confirm-password-error');

getFName.addEventListener('keyup', () => {
    const nameRegex = /^[a-zA-Z]+$/;
    const fName = getFName.value;
    if (!nameRegex.test(fName))
        fNameErrorDisplay.innerHTML = 'First Name should be alphabetical';
    else
        fNameErrorDisplay.innerHTML = '';
});

getLName.addEventListener('keyup', () => {
    const nameRegex = /^[a-zA-Z]+$/;
    const lName = getLName.value;
    if (!nameRegex.test(lName))
        lNameErrorDisplay.innerHTML = 'Last Name should be alphabetical';
    else
        lNameErrorDisplay.innerHTML = '';
});

getUName.addEventListener('keyup', () => {
    let error = '';

    const uName = getUName.value;
    const uNameRegex = /^[a-zA-Z0-9]{6,}$/;

    if (uName.length < 6)
        error += 'User Name should be atleast 6 characters<br/>';
    if (!uNameRegex.test(uName))
        error += 'User Name should be alphanumeric<br/>';

    if (error)
        uNameErrorDisplay.innerHTML = error;
    else
        uNameErrorDisplay.innerHTML = '';
});

getDob.addEventListener('change', () => {
    const dob = new Date(getDob.value);
    const ageDifMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDifMs);
    let age = ageDate.getUTCFullYear() - 1970;
    getAge.value = age > 0 ? age : 0;
});

// Password - At least 8 characters, atleast one special character and one number

getPassword1.addEventListener('keyup', () => {
    let errorMsg = '';
    const password = getPassword1.value;
    const alphaRegexp = new RegExp('[a-zA-Z]', 'g');
    const numericRegexp = new RegExp('[0-9]', 'g');
    const specialRegexp = new RegExp('[^a-zA-Z0-9 ]', 'g');
    let specialCharacterCount = 0;
    let numericCount = 0;
    let alphaCount = 0;
    for (let match of password.matchAll(alphaRegexp))
        alphaCount++;
    for (let match of password.matchAll(numericRegexp))
        numericCount++;
    for (let match of password.matchAll(specialRegexp))
        specialCharacterCount++;

    if (password.length > 7 && alphaCount > 0 && numericCount > 0 && specialCharacterCount > 0) {
        password1ErrorDisplay.innerHTML = '';
        getPassword2.disabled = false;
        getPassword2.background = auto;
    }
    else {
        if (password.length < 8)
            errorMsg += 'Password should be atleast 8 characters<br>';
        if (alphaCount == 0)
            errorMsg += 'Password should contain atleast one alphabet<br>';
        if (numericCount == 0)
            errorMsg += 'Password should contain atleast one numeric value<br>';
        if (specialCharacterCount == 0)
            errorMsg += 'Password should contain atleast one special character<br>';
        password1ErrorDisplay.innerHTML = errorMsg;
        getPassword2.disabled = true;
        getPassword2.background = 'rgba(97, 95, 95, 0.2)';
    }
});

getPassword2.addEventListener('keyup', () => {
    if (getPassword1.value != getPassword2.value)
        password2ErrorDisplay.innerHTML = 'Passwords do not match';
    else
        password2ErrorDisplay.innerHTML = '';
});


const getForm = document.querySelector('.registration-card');
getForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validation();
});

// User Name Validation - At least 6 characters, no special characters
// Age - At least 16 years old

const validation = () => {
    const age = document.userDetails.age.value;

    if (age < 16) {
        alert('Age should be atleast 16 years old');
        return false;
    }
}
