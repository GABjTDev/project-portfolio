import Sound from "./sound.js"

export default function Button() {

    const $buttons = document.querySelectorAll('.grid__button')
    const $result = document.getElementById('result')

    $buttons.forEach(el => {
        el.addEventListener('click', () => {

            if (el.firstElementChild.innerHTML === 'RESET') {
                $result.innerHTML = '0'
            } else {

                if (el.firstElementChild.innerHTML === 'DEL') {

                    $result.innerHTML = $result.innerHTML.slice(0, -1);

                    if ($result.innerHTML === '') {
                        $result.innerHTML = '0'
                    }

                } else if (el.firstElementChild.innerHTML === '=') {

                    if ($result.innerHTML.includes('x')) {
                        $result.innerHTML = $result.innerHTML.replace('x', '*')
                    }
                    $result.innerHTML = eval($result.innerHTML)

                }
                else {

                    if ($result.innerHTML === '0') {
                        $result.innerHTML = ''
                    }

                    $result.innerHTML += el.firstElementChild.innerHTML
                }


            }

            Sound()
        })
    })

}