const getAge = document.getElementById('age');
const getDob = document.getElementById('dob');
const getPassword1 = document.getElementById('password');
// console.log(getPassword1);
const getPassword2 = document.getElementById('confirm-password');
const getSubmitBtn = document.getElementById('register');
const password1ErrorDisplay = document.getElementById('password-error');
const password2ErrorDisplay = document.getElementById('confirm-password-error');

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
        
    if(password.length > 7 && alphaCount > 0 && numericCount > 0 && specialCharacterCount > 0) {
        password1ErrorDisplay.innerHTML = '';
        getPassword2.disabled = false;
        getPassword2.background = auto;
    }
    else {
        if(password.length < 8)
            errorMsg += 'Password should be atleast 8 characters<br>';
        if(alphaCount == 0)
            errorMsg += 'Password should contain atleast one alphabet<br>';
        if(numericCount == 0)
            errorMsg += 'Password should contain atleast one numeric value<br>';
        if(specialCharacterCount == 0)
            errorMsg += 'Password should contain atleast one special character<br>';
        password1ErrorDisplay.innerHTML = errorMsg;
        getPassword2.disabled = true;
        getPassword2.background = 'rgba(97, 95, 95, 0.2)';
    }
})


const getForm = document.querySelector('.registration-card');
getForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validation();
});

// User Name Validation - At least 6 characters, no special characters
// Age - At least 16 years old

const validation = () => {
    const uName = document.userDetails.uname.value;
    const age = document.userDetails.age.value;
    const uNameRegex = /^[a-zA-Z0-9]{6,}$/;

    if (uName.length < 6 && !uNameRegex.test(uName)) {
        alert('User Name should be atleast 6 characters and no special characters');
        return false;
    }
    if (age < 16) {
        alert('Age should be atleast 16 years old');
        return false;
    }
}
