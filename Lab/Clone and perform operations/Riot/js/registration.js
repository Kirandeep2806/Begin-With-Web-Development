const getAge = document.getElementById('age');
const getDob = document.getElementById('dob');
const getPassword1 = document.getElementById('password');
const getPassword2 = document.getElementById('confirm-password');
const getSubmitBtn = document.getElementById('register');

getDob.addEventListener('change', () => {
    const dob = new Date(getDob.value);
    const ageDifMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDifMs);
    let age = ageDate.getUTCFullYear() - 1970;
    getAge.value = age > 0 ? age : 0;
});

getPassword1.addEventListener('change', () => {
    const alphaRegexp = new RegExp('[a-zA-Z]', 'g');
    const numericRegexp = new RegExp('[0-9]', 'g');
    const specialRegexp = new RegExp('[^a-zA-Z ]', 'g');
    let specialCharacterCount = 0;
    let numericCount = 0;
    let alphaCount = 0;
    for (let match of abc.matchAll(alphaRegexp))
        alphaCount++;
    for (let match of abc.matchAll(numericRegexp))
        numericCount++;
    for (let match of abc.matchAll(specialRegexp))
        specialCharacterCount++;
    
    
});


const getForm = document.querySelector('.registration-card');
getForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validation();
});

// User Name Validation - At least 6 characters, no special characters
// Age - At least 16 years old
// Password - At least 8 characters, atleast one special character and one number

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
