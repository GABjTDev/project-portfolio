import Weapon from './Weapon.js';

function PlayAgain(main, selection) {

    const $btn = document.querySelector('.btn');

    $btn.addEventListener('click', () => {
        main.classList.remove('hidden');
        selection.classList.remove('active');
    })

}


function Selection(you, computer) {

    const $main = document.querySelector('.game');
    $main.classList.add('hidden');

    const $selection = document.querySelector('.selection');
    $selection.classList.add('active');

    const $youSelection = document.querySelectorAll('.select')[0];
    const $result = document.querySelector('.result');
    const $computerSelection = document.querySelectorAll('.select')[1];
    const $score = document.querySelector('.score-number');

    $youSelection.innerHTML = `
        <div class="circle ${you.value}">
            <div class="box-white">
            <img src="./images/icon-${you.value}.svg" alt="${you.value}">
            </div>
        </div>
        <p>YOU PICKED</p>
    `;

    $computerSelection.innerHTML = `
        <div class="circle ${computer.value}">
            <div class="box-white">
                <img src="./images/icon-${computer.value}.svg" alt="${computer.value}">
            </div>
        </div>
        <p>THE HOUSE PICKED</p>
    `;

    $result.textContent = '';
    $youSelection.classList.remove('win');
    $computerSelection.classList.remove('win');

    let status = '';

    // rock = 0;
    // paper = 1;
    // scissor = 2;
    // lizard = 3;
    // spock = 4;

    if (you.id != computer.id) {

        if (you.id === 0 && computer.id === 1 || you.id === 0 && computer.id === 4) {
            status = 'lose'
        } else if (you.id === 0 && computer.id === 2 || you.id === 0 && computer.id === 3) {
            status = 'win'
        }

        if (you.id === 1 && computer.id === 0 || you.id === 1 && computer.id === 4) {
            status = 'win'
        } else if (you.id === 1 && computer.id === 2 || you.id === 1 && computer.id === 3) {
            status = 'lose'
        }

        if (you.id === 2 && computer.id === 0 || you.id === 2 && computer.id === 4) {
            status = 'lose'
        } else if (you.id === 2 && computer.id === 1 || you.id === 2 && computer.id === 3) {
            status = 'win'
        }

        if (you.id === 3 && computer.id === 0 || you.id === 3 && computer.id === 2) {
            status = 'lose'
        } else if (you.id === 3 && computer.id === 1 || you.id === 3 && computer.id === 4) {
            status = 'win'
        }

        if (you.id === 4 && computer.id === 0 || you.id === 4 && computer.id === 2) {
            status = 'win'
        } else if (you.id === 4 && computer.id === 1 || you.id === 4 && computer.id === 3) {
            status = 'lose'
        }

    } else {
        status = 'tie'
    }

    switch (status) {
        case 'win':
            $result.textContent = 'YOU WIN';
            $youSelection.classList.add('win');
            $score.innerHTML = parseInt($score.innerHTML) + 1;
            break;
        case 'lose':
            $result.textContent = 'YOU LOSE';
            $computerSelection.classList.add('win');
            break;
        default: $result.textContent = 'TIE';
    }

    PlayAgain($main, $selection);
}

function handlerWeapon() {

    const weapons = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    const youId = parseInt(this.getAttribute('data-target'));
    const you = new Weapon(youId, weapons[youId]);

    const computerId = Math.floor(Math.random() * 5)
    const computer = new Weapon(computerId, weapons[computerId]);

    Selection(you, computer)
}

export default function Game() {

    const $weapons = document.querySelectorAll('.circle');

    $weapons.forEach(el => {
        el.addEventListener('click', handlerWeapon)
    })


}