import Draw from "./Draw.js";

export default function Filter() {

    const $buttons = document.querySelectorAll('.options button');

    function removeClassActive() {
        $buttons.forEach(el => {
            if (el.classList.contains('active')) {
                el.classList.remove('active');
            }
        })
    }

    $buttons.forEach(el => {

        el.addEventListener('click', () => {
            const todo = JSON.parse(localStorage.getItem('todo'));

            removeClassActive();
            el.classList.add('active');

            if (el.innerHTML === 'Completed') {
                const Filter = todo.filter(el => el.status === true);
                Draw('Completed', Filter);
            } else if (el.innerHTML === 'Active') {
                const Filter = todo.filter(el => el.status === false);
                Draw('Active', Filter);
            } else {
                Draw();
            }


        })

    })


}