import Clear from "./assets/js/Clear.js";
import Dark from "./assets/js/Dark.js";
import Draw from "./assets/js/Draw.js";
import Filter from "./assets/js/Filter.js";
import NewTodo from "./assets/js/NewTodo.js";

window.addEventListener('DOMContentLoaded', () => {

    const list = document.querySelector('.main');
    Sortable.create(list, {
        animation: 150,
        chosenClass: "draggable",
        filter: '.main__count',
        draggable: '.main__list',
        group: "lista-tareas",
        store: {
            set: (sortable) => {
                const orden = sortable.toArray();
                localStorage.setItem(sortable.options.group.name, orden.join('|'));
            },
            get: (sortable) => {
                const orden = localStorage.getItem(sortable.options.group.name);
                return orden ? orden.split('|') : [];
            }
        }
    });

    Dark();
    NewTodo();
    Filter();
    Draw();
    Clear();

})