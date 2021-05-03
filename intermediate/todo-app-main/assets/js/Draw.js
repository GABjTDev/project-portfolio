import Active from "./Active.js";
import Deleted from "./Deleted.js";

export default function Draw(show = "All", filter = []) {

    const $main = document.querySelector('.main');

    while ($main.firstElementChild) {
        $main.removeChild($main.firstElementChild);
    }

    if (JSON.parse(localStorage.getItem('todo')) !== null) {
        let todo

        if (show === 'All') {
            todo = JSON.parse(localStorage.getItem('todo'));
        } else {
            todo = filter;
        }

        todo.forEach(el => {

            const div = document.createElement('div');
            div.classList.add('main__list');
            div.setAttribute('data-id', el.id);

            const $mainList = `
                    <div class="circle ${el.status ? 'complete' : ''}" data-target="${el.id}"></div>
                    <p class="${el.status ? 'line-through' : ''}">${el.value}</p>
                    <img src="./images/icon-cross.svg" alt="cross" class="close" />
                `;

            div.innerHTML = $mainList;

            $main.appendChild(div);
        })
        const $main__count = document.createElement('div');
        $main__count.classList.add('main__count');
        $main__count.innerHTML = `
            <p><span class="count">${todo.length}</span> items left</p>
            <button class="clear">Clear Completed</button>
        `;
        $main.appendChild($main__count);
    }

    Active();
    Deleted();

}