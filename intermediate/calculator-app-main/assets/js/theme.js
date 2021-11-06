const w = window
const d = document

export default function Theme() {

    const themes = d.querySelectorAll('#theme p');
    const circle = d.getElementById('circle');

    themes.forEach(t => {
        t.addEventListener('click', () => {
            d.body.classList.remove('theme-1')
            d.body.classList.remove('theme-2')
            d.body.classList.remove('theme-3')
            d.body.classList.add(`theme-${t.innerHTML}`)

            if (t.innerHTML === '1') {
                circle.style.transform = 'translateX(0)'
            } else if (t.innerHTML === '2') {
                circle.style.transform = 'translateX(21px)'
            } else {
                circle.style.transform = 'translateX(45px)'
            }

        })
    })

}