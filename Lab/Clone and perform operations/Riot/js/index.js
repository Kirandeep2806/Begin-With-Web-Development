document.onreadystatechange = () => {
    if (document.readyState !== 'complete') {
        document.querySelector('body').style.visibility = 'hidden';
        document.querySelector('#loader').style.visibility = 'visible';
        document.querySelector('body').style.overflow = 'hidden';
    }
    else {
        document.querySelector('body').style.visibility = 'visible';
        document.querySelector('#loader').style.visibility = 'hidden';
        document.querySelector('body').style.overflow = 'auto';
    }
}

const getFooterToGoToTop = document.getElementsByClassName('go-up')[0];
getFooterToGoToTop.addEventListener('click', () => {
    window.scrollTo('0', '0');
})

document.addEventListener('mousedown', e => {
    const regexpForCards1 = /section-container__2__col-4-cards-[1234]/;
    const regexpForCards2 = /section-container__2__span_2-5/;

    let res = e.path.filter(e => regexpForCards1.test(e.className) || regexpForCards2.test(e.className));
    let getParent = res.pop();
    console.log(getParent);
})
