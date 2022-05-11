const formSubmit = document.getElementsByTagName('form')[0];

const cp = document.getElementById('cp');
const pp = document.getElementById('pp');
const vp = document.getElementById('vp');

function calculateCost() {
    let totalCost = cp.value * 100 + pp.value * 80 + vp.value * 70;
    document.getElementById('tc').value = totalCost;
}

formSubmit.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('tc').value != 0 ? confirm(`Your order is ready, Will reach you in few minutes...!`) : alert('Select Something to confirm the order!!');
})
