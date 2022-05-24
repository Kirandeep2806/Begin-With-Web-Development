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
// Password - At least 8 characters, no special characters, at least one number, one uppercase and one lowercase letter

const validation = () => {
    const uName = document.userDetails.uname.value;
    const age = document.userDetails.age.value;
    const password1 = document.userDetails.password.value;
    const password2 = document.userDetails.confirmPassword.value;
}
