window.addEventListener('DOMContentLoaded', function () {
    'use strict';

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

    let [, services] = section;

    const servicesContainer = services.querySelector('div'),
        servicesTitle = servicesContainer.querySelector('h2'),
        servicesBox = servicesContainer.querySelector('div'),
        servicesLeft = servicesBox.querySelector('div'),
        ulLiItem = servicesLeft.querySelectorAll('li'),
        servicesRight = servicesBox.querySelectorAll('div'),
        servicesDscr = servicesContainer.lastElementChild;

    let [, right] = servicesRight;
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

    //discounts
    services.insertAdjacentHTML('afterend', '<section> <div> <div> <h2></h2><a></a> </div> </div> </section>');
    const DISCOUNTS = document.querySelectorAll('section');

    let [, , discounts] = DISCOUNTS;

    const DISCOUNTSCONTAINER = discounts.querySelector('div'),
        DISCOUNTSBOX = DISCOUNTSCONTAINER.querySelector('div'),
        DISCOUNTSTITLE = DISCOUNTSBOX.querySelector('h2'),
        DISCOUNTSBTN = DISCOUNTSBOX.querySelector('a');

    discounts.classList.add('discounts');
    DISCOUNTSCONTAINER.classList.add('container');
    DISCOUNTSBOX.classList.add('discounts__box');
    DISCOUNTSTITLE.classList.add('discounts__title');
    DISCOUNTSBTN.classList.add('btn');

    DISCOUNTSBTN.setAttribute('href', '#');

    DISCOUNTSTITLE.insertAdjacentText('afterbegin', 'МЫ РАБОТАЕМ 24 ЧАСА СУТКИ СКИДКИ ПОСТОЯННЫМ КЛИЕНТАМ');
    DISCOUNTSBTN.insertAdjacentText('afterbegin', '111222333');

    //pros
    discounts.insertAdjacentHTML('afterend', '<section> <div> <h2></h2><div> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div> </div> </section>')
    const PROS = document.querySelectorAll('section');

    let [, , , pros] = PROS;

    const PROSCONTAINER = pros.querySelector('div'),
        PROSTITLE = PROSCONTAINER.querySelector('h2'),
        PROSBOX = PROSCONTAINER.querySelector('div'),
        NAMEDSCR = PROSBOX.querySelectorAll('div');

    let [one, two, three, four, five, six, seven, eight] = NAMEDSCR;

    pros.classList.add('pros');
    PROSCONTAINER.classList.add('container');
    PROSTITLE.classList.add('pros__title');
    PROSBOX.classList.add('pros__box');
    one.classList.add('pros__name');
    two.classList.add('pros__dscr');
    three.classList.add('pros__name');
    four.classList.add('pros__dscr');
    five.classList.add('pros__name');
    six.classList.add('pros__dscr');
    seven.classList.add('pros__name');
    eight.classList.add('pros__dscr');

    PROSTITLE.insertAdjacentText('afterbegin', 'НАШИ ПЛЮСЫ:');
    one.insertAdjacentText('afterbegin', 'ОПЕРАТИВНОСТЬ');
    two.insertAdjacentText('afterbegin', 'Наша компания работает в круглосуточном режиме и выезжает к клиенту в кратчайшие сроки.');
    three.insertAdjacentText('afterbegin', 'ДОСТУПНОСТЬ');
    four.insertAdjacentText('afterbegin', 'Тщательно изучив стоимость услуг конкурентов, мы сформировали для вас самые низкие цены.');
    five.insertAdjacentText('afterbegin', 'ОТВЕТСТВЕННОСТЬ');
    six.insertAdjacentText('afterbegin', 'Мы настроены на добропорядочные, честные и долгосрочные отношения с клиентом.');
    seven.insertAdjacentText('afterbegin', 'ОПЫТ РАБОТЫ');
    eight.insertAdjacentText('afterbegin', 'Наши мастера имеют опыт работы от 8 лет, работаем качественно, на совесть.');

    //hours
    pros.insertAdjacentHTML('afterend', '<section> <div> <div> <h2></h2><a></a> </div> </dvi> </section>');
    const HOURS = document.querySelectorAll('section');

    let [, , , , hours] = HOURS;

    const HOURSCONTAINER = hours.querySelector('div'),
        HOURSBOX = HOURSCONTAINER.querySelector('div'),
        HOURSTITLE = HOURSBOX.querySelector('h2'),
        HOURSBTN = HOURSBOX.querySelector('a');

    hours.classList.add('hours');
    HOURSCONTAINER.classList.add('container');
    HOURSBOX.classList.add('hours__box');
    HOURSTITLE.classList.add('hours__title');
    HOURSBTN.classList.add('btn');

    HOURSBTN.setAttribute('href', '#');

    HOURSTITLE.insertAdjacentText('afterbegin', 'МЫ РАБОТАЕМ 24 ЧАСА СУТКИ СКИДКИ ПОСТОЯННЫМ КЛИЕНТАМ');
    HOURSBTN.insertAdjacentText('afterbegin', '111222333');

})