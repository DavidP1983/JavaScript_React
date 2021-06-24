"use strict";

document.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsParent = document.querySelector('.tabheader__items'),
        tabsContent = document.querySelectorAll('.tabcontent');

    //Remove All Tab Content

    function hideTabContent() {

        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });

    }

    //Add first Tab Content by default

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }


    hideTabContent();
    showTabContent();

    //Add click

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {

                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

    });


    //Timer

    const deadLine = '2021-06-18';

    function getTimeremaning(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
            days = Math.floor(t / 86400000),
            hours = Math.floor((t / 3600000) % 24),
            minutes = Math.floor((t / 60000) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds

        };

    }

    function addLeadingZero(number) {
        if (number < 10) {
            return "0" + number.toString();
        } else {
            return number.toString();
        }
    }

    function setClock(selector, endTime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);



        updateClock();


        function updateClock() {

            const t = getTimeremaning(endTime);

            days.innerHTML = addLeadingZero(t.days);
            hours.innerHTML = addLeadingZero(t.hours);
            minutes.innerHTML = addLeadingZero(t.minutes);
            seconds.innerHTML = addLeadingZero(t.seconds);
            const timeClock = setInterval(clock, 1000);

            clock();

            function clock() {
                const currentTime = new Date(),
                    hoursAfter = currentTime.getHours(),
                    minutesAfter = currentTime.getMinutes(),
                    secondsAfter = currentTime.getSeconds();

                if (t.total <= 0) {

                    clearInterval(timeInterval);
                    days.innerHTML = '00';
                    hours.innerHTML = addLeadingZero(hoursAfter);
                    minutes.innerHTML = addLeadingZero(minutesAfter);
                    seconds.innerHTML = addLeadingZero(secondsAfter);


                }

            }




        }

    }



    setClock('.timer', deadLine);


    //Modal

    const callModalWindow = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalClose = modal.querySelector('[data-close]');


    // *****************  Open Modal *********************//

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        // modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';

        clearInterval(modalTimerId);
        //if user have already opened the modal window
        //we use clearInterval
    }

    callModalWindow.forEach((i) => {
        i.addEventListener('click', openModal); //(event) => {
        // const target = event.target;
        // if (target == i) {
        //     modal.classList.add('show');
        //     modal.classList.remove('hide');
        //     // modal.classList.toggle('show');
        //     document.body.style.overflow = 'hidden';
        // }
    });

    // });

    // ****************** Close Modal ******************//

    // Dont reapet the same code twice use function

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    //CloseModal will work after 'click'
    modalClose.addEventListener('click', closeModal); //() =>{

    //         modal.classList.add('hide');
    //         modal.classList.remove('show');
    //         // modal.classList.toggle('show');
    //         document.body.style.overflow = '';

    //    });


    // ********** Close Modal on white space ********** //

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.classList.remove('show');
        }
    });
    // the same as window object
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {

            closeModal();

            // modal.classList.add('hide');
            // modal.classList.remove('show');
            // document.body.style.overflow = '';
        }
    });


    // ******** Close Modal suing 'ESC' button on keyboard ******** //

    document.addEventListener('keydown', (event) => {

        if (event.code == 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });


    // ******* Set TimeOut to open the Modal ******* //

    const modalTimerId = setTimeout(openModal, 5000);


    // ******* Open Modal by the end of the scrolling ********* //

    function openOnceOnScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', openOnceOnScroll);
        }
    }

    window.addEventListener('scroll', openOnceOnScroll); //() =>{
    // // if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
    // // openModal();
    // }
    // });



    // *****************Using Class for Cards****************** //

    class MenuCard {
        constructor(src, alt, title, desc, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.desc = desc;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.currency = 27;
            this.changeToCad(); //can call this method directly here

        }
        changeToCad() {
            this.price *= +this.currency; // '+' if it will be a string we convert to Number

        }

        render() {
            // or
            // this.changeToCad(); 
            const element = document.createElement('div');
            element.innerHTML = ` 
         <div class="menu__item">
              <img src= ${this.src} alt= ${this.alt}>
              <h3 class="menu__item-subtitle">${this.title}</h3>
              <div class="menu__item-descr">${this.desc}</div>
              <div class="menu__item-divider"></div>
              <div class="menu__item-price">
                  <div class="menu__item-cost">Цена:</div>
                  <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
              </div>
          </div>`;
          this.parent.append(element);
        }


    }

    // const div = new MenuCard();
    // div.render();

    //or if we use once this script with method, object

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container'


    ).render(); // only one time, then it will be deleted




});