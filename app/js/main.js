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

    //fonImg
    header.insertAdjacentHTML('afterend', '<section> <div></div> </section>');
    const sectionFonImg = document.querySelector('section'),
        fonImgBox = sectionFonImg.querySelector('div');

    sectionFonImg.classList.add('fonImg');
    fonImgBox.classList.add('fonImg__box');

    //services
    const fonImg = document.querySelector('section.fonImg');
    fonImg.insertAdjacentHTML('afterend', '<section> <div> <h2></h2><div> <div> <ul> <li></li><li></li><li></li><li></li> </ul> </div><div> <ul> <li></li><li></li><li></li><li></li> </ul> </div> </div><div></div> </div> </section>');
    const section = document.querySelectorAll('section');

    let [, services] = section;//Деструктуризация

    const servicesContainer = services.querySelector('div'),
        servicesTitle = servicesContainer.querySelector('h2'),
        servicesBox = servicesContainer.querySelector('div'),
        servicesLeft = servicesBox.querySelector('div'),
        ulLiItem = servicesLeft.querySelectorAll('li'),
        servicesRight = servicesBox.querySelectorAll('div'),
        servicesDscr = servicesContainer.lastElementChild;

    let [, right] = servicesRight;//Деструктуризация
    const ulLiItemR = right.querySelectorAll('li');

    services.classList.add('services');
    servicesContainer.classList.add('container');
    servicesTitle.classList.add('services__title');
    servicesBox.classList.add('services__box');
    servicesLeft.classList.add('services__left');
    right.classList.add('services__right');
    ulLiItem.forEach(li => {
        li.classList.add('item');
    });
    ulLiItemR.forEach(li => {
        li.classList.add('item');
    });
    servicesDscr.classList.add('services__dscr');

    servicesTitle.insertAdjacentText('afterbegin', 'НАШИ УСЛУГИ:');
    let [li1, li2, li3, li4] = ulLiItem,
        [li5, li6, li7, li8] = ulLiItemR;
    li1.insertAdjacentText('afterbegin', 'УСТРАНЕНИЕ ЗАСОРОВ');
    li2.insertAdjacentText('afterbegin', 'УСТРАНЕНИЕ ПРОТЕЧКИ');
    li3.insertAdjacentText('afterbegin', 'РЕМОНТ САНТЕХНИКИ');
    li4.insertAdjacentText('afterbegin', 'УСТАНОВКА ВОДОСЧЕТЧИКОВ');
    li5.insertAdjacentText('afterbegin', 'ЗАМЕНА И РЕМОНТ ТРУБ');
    li6.insertAdjacentText('afterbegin', 'УСТАНОВКА ТЕХНИКИ');
    li7.insertAdjacentText('afterbegin', 'УСТАНОВКА ВАННЫ');
    li8.insertAdjacentText('afterbegin', 'И МНОГОЕ ДРУГОЕ...');
    servicesDscr.insertAdjacentText('afterbegin', 'Все виды сантехнических услуг, позвоните нам, чтобы уточнить нужную Вам услугу! Пенсионерам и инвалидам скидка 10% на все услуги.');














    //
})