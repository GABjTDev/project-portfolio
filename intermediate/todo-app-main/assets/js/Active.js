export default function Active() {

    const $circle = document.querySelectorAll('.circle');

    $circle.forEach($c => {

        $c.addEventListener('click', () => {

            const todo = JSON.parse(localStorage.getItem('todo'));

            $c.classList.toggle('complete');

            if ($c.classList.contains('complete')) {
                $c.nextElementSibling.classList.add('line-through');
            } else {
                $c.nextElementSibling.classList.remove('line-through');
            }

            const id = parseInt($c.getAttribute('data-target'));

            const nuevoData = todo.map((el) => {
                if (el.id === id) {
                    return { ...el, status: !el.status }
                }
                return el;
            })

            localStorage.setItem('todo', JSON.stringify(nuevoData));
        })

    })

}