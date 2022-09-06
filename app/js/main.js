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
    fonImg.insertAdjacentHTML('afterend', '<section> <div> <h2></h2><div> <div> <ul> <li></li><li></li><li></li><li></li> </ul> </div><div> <ul></ul> </div> </div><div></div> </div> </section>');
    const section = document.querySelectorAll('section');

    let [, services] = section;//Деструктуризация

    const servicesContainer = services.querySelector('div'),
        servicesTitle = servicesContainer.querySelector('h2'),
        servicesBox = servicesContainer.querySelector('div'),
        servicesLeft = servicesBox.querySelector('div'),
        ulLiItem = servicesLeft.querySelectorAll('li'),
        servicesRight = servicesBox.querySelectorAll('div');

    let [, right] = servicesRight;//Деструктуризация

    services.classList.add('services');
    servicesContainer.classList.add('container');
    servicesTitle.classList.add('services__title');
    servicesBox.classList.add('services__box');
    servicesLeft.classList.add('services__left');
    ulLiItem.forEach(li => {
        li.classList.add('item');
    })
    right.classList.add('services__right');

    /*
        <section class="services">
            <div class="container">
                <h2 class="services__title"></h2>
                <div class="services__box">
                    <div class="services__left">
                        <ul>
                            <li class="item"></li>
                            <li class="item"></li>
                            <li class="item"></li>
                            <li class="item"></li>
                        </ul>
                    </div>
                    <div class="services__right">
                        <ul>
                            <li class="item"></li>
                            <li class="item"></li>
                            <li class="item"></li>
                            <li class="item"></li>
                        </ul>
                    </div>
                </div>
                <div class="services__dscr"></div>
            </div>
        </section> 
     */
















    //
})