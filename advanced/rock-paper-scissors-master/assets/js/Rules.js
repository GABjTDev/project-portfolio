export default function Rules() {

    const $btnRules = document.querySelector('.button');
    const $rules = document.querySelector('.rules');
    const $boxRules = document.querySelector('.box-rules');
    const $close = document.querySelector('.close');

    $btnRules.addEventListener('click', () => {
        $boxRules.classList.add('active');
        $rules.classList.add('active');
    })

    $close.addEventListener('click', () => {
        $boxRules.classList.remove('active');
        $rules.classList.remove('active');
    })

}