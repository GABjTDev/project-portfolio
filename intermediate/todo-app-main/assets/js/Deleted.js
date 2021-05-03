import Draw from "./Draw.js";

export default function Deleted() {

    const $close = document.querySelectorAll('.close');

    $close.forEach(c => {

        c.addEventListener('click', () => {
            const id = c.parentElement.firstElementChild.getAttribute('data-target');
            const todo = JSON.parse(localStorage.getItem('todo'));

            c.parentElement.classList.add('remove-animation');
            c.parentElement.addEventListener('animationend', () => {
                c.parentElement.remove();

                const nuevoData = todo.filter(el => el.id != id);

                localStorage.setItem('todo', JSON.stringify(nuevoData));

                const $count = document.querySelector('.count');
                $count.innerHTML = nuevoData.length;
                Draw();

                const $buttons = document.querySelectorAll('.options button');
                $buttons.forEach(el => {
                    if (el.classList.contains('active')) {
                        el.classList.remove('active');
                    }
                })

                const $all = document.querySelector('.all');
                $all.classList.add('active');

            })

        })

    })


}