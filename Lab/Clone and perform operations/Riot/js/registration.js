const getAge = document.getElementById('age');
const getDob = document.getElementById('dob');

getDob.addEventListener('change', () => {
    const dob = new Date(getDob.value);
    const ageDifMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDifMs);
    getAge.value = Math.abs(ageDate.getUTCFullYear() - 1970);
})
