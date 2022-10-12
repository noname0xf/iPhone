window.onload = function () {
    const home = document.getElementById('home');
    const screen = document.getElementById('screen');
    home.addEventListener('click', function () {
        if (screen.classList.contains('on')) screen.classList.remove('on');
        else screen.classList.add('on');
    })
}