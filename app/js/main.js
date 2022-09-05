window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    //
    const body = document.querySelector('body');
    //header
    body.insertAdjacentHTML('afterbegin', '<header> <div> <div> <h1></h1><a></a> </div> </div> </header>');
    const header = document.querySelector('header'),
        container = header.querySelector('div'),
        headerBox = container.querySelector('div'),
        headerTitle = headerBox.querySelector('h1'),
        btn = headerBox.querySelector('a');

    header.classList.add('header');
    container.classList.add('container');
    headerBox.classList.add('header__box');
    headerTitle.classList.add('header__title');
    btn.classList.add('btn');

    headerTitle.insertAdjacentText('afterbegin', 'САНТЕХНИК ГРОЗНЫЙ');
    btn.insertAdjacentText('afterbegin', '111222333');
    btn.setAttribute('href', '#');




















    //
})