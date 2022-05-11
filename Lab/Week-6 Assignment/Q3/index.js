const getParaElement = document.getElementsByTagName('p');
const getContainer = document.getElementsByClassName('container')[0];
let mouseEvents = ['mouseover', 'mouseout', 'mousemove', 'mousedown', 'mouseup', 'mouseenter', 'mouseleave'];

for(let i=0; i<mouseEvents.length; i++) {
    getParaElement[i].addEventListener(mouseEvents[i], function(e) {
        getParaElement[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    });
}
