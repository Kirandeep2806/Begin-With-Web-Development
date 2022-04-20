const btn = document.getElementById('convert-btn');
const inputSrc = document.getElementById('farenheit');

btn.addEventListener('click', () => {
    const farenheit = parseInt(inputSrc.value);
    if(isNaN(farenheit)) {
        alert('Please enter a number');
        inputSrc.value = "";
        return;
    }
    const celsius = (farenheit - 32) * 5 / 9;
    document.getElementById('celsius').innerHTML = `Celsius : ${celsius.toFixed(2)}`;
})
