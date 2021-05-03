export default function Dark() {

    const $theme = document.querySelector('.theme');
    const $body = document.body;


    const theme = localStorage.getItem('dark');


    if (theme === 'on') {
        $body.classList.add('dark');
        $theme.src = "./images/icon-sun.svg";
        $theme.alt = "sun";
    }

    $theme.addEventListener('click', () => {

        $body.classList.toggle('dark');

        if ($body.classList.contains('dark')) {
            $theme.src = "./images/icon-sun.svg";
            $theme.alt = "sun";
            localStorage.setItem('dark', 'on');
        } else {
            $theme.src = "./images/icon-moon.svg";
            $theme.alt = "moon";
            localStorage.setItem('dark', 'off');
        }

    })



}