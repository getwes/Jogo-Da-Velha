window.addEventListener('DOMContentloaded',() => {
    const tiles = array.from(document.querySelectorAll('.tile'));
    const playerdisplay = document.querySelector('.display-player');
    const resetbutton = document.querySelector('#reset');
    const announcer = document.querySelector('.annoucer');

    resetbutton.addEventListener('click', resetboard);

});

