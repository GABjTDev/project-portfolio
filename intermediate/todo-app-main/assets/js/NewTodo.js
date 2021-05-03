import Draw from "./Draw.js";

export default function NewTodo() {

    const $form = document.querySelector('form');
    const $input = document.querySelector('input');

    $form.addEventListener('submit', (e) => {
        e.preventDefault();

        let todo = JSON.parse(localStorage.getItem('todo'));

        if (localStorage.getItem('todo') === null) {
            todo = [];
            console.log(todo);
        }

        todo = [...todo, {
            id: new Date().getMilliseconds(),
            value: $input.value,
            status: false
        }]

        $input.value = "";


        const $buttons = document.querySelectorAll('.options button');
        $buttons.forEach(el => {
            if (el.classList.contains('active')) {
                el.classList.remove('active');
            }
        })

        const $all = document.querySelector('.all');
        $all.classList.add('active');

        localStorage.setItem('todo', JSON.stringify(todo));
        Draw();

    })

}