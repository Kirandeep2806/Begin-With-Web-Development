const elements = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 'C', 0, '=', '/'];
const displayPos = document.getElementsByClassName('btns')[0];
const displayArea = document.getElementById('display');

for (let i = 0; i < elements.length; i++) {
    const tag = document.createElement('button');
    tag.innerHTML = tag.name = tag.id = elements[i];
    displayPos.append(tag);

}

document.addEventListener('click', function (e) {
    if (e.path[1].className === 'btns') {
        let invokedElement = e.target.innerHTML;
        if (invokedElement === 'C')
            displayArea.value = '';
        else {
            if (invokedElement === '=')
                displayArea.value = eval(displayArea.value);
            else
                displayArea.value += e.target.innerHTML;
        }
    }
})
