const getAge = document.getElementById('age');
const getDob = document.getElementById('dob');

getDob.addEventListener('change', () => {
    const dob = new Date(getDob.value);
    const ageDifMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDifMs);
    let age = ageDate.getUTCFullYear() - 1970;
    getAge.value = age > 0 ? age : 0;
})

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
    const password1 = document.userDetails.password.value;
    const password2 = document.userDetails.confirmPassword.value;

    const uNameRegex = /^[a-zA-Z0-9]{6,}$/;

    // if (uName.length < 6) {
    //     alert('User Name should be atleast 6 characters');
    //     return false;
    // }
    // if (age < 16) {
    //     alert('Age should be atleast 16 years old');
    //     return false;
    // }
    // if (password1.length < 8) {
    //     alert('Password should be atleast 8 characters');
    //     return false;
    // }
    // if (password1 !== password2) {
    //     alert('Passwords do not match');
    //     return false;
    // }


}

let abc = "abc894237d#$#";
const alphaRegexp = new RegExp('[a-zA-Z]', 'g');
const numericRegexp = new RegExp('[0-9]', 'g');
const specialRegexp = new RegExp('[^a-zA-Z ]', 'g');
let specialCharacterCount = 0;
let numericCount = 0;
let alphaCount = 0;
for(let match of abc.matchAll(alphaRegexp))
    alphaCount++;

for(let match of abc.matchAll(numericRegexp))
    numericCount++;

for(let match of abc.matchAll(specialRegexp))
    specialCharacterCount++;
    