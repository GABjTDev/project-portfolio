import Draw from "./Draw.js";

export default function Clear() {


    const $btn = document.querySelector('.clear');

    $btn.addEventListener('click', () => {

        localStorage.removeItem('todo');
        Draw();

    })


}