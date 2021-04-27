let accordeon = Array.from(document.querySelectorAll('.accordeon'));

function clearClass() {

    for (i in accordeon) {
        console.log(accordeon[i]);
        if (accordeon[i].classList.contains('actived')) {
            accordeon[i].classList.remove('actived');
            accordeon[i].firstElementChild.classList.remove('actived-arrow');
        }
    }
}


for (i in accordeon) {

    accordeon[i].addEventListener('click', (e) => {

        clearClass();
        e.target.classList.toggle('actived-arrow');
        e.target.parentNode.classList.toggle('actived');
    });

}
