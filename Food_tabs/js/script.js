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
                if (target == item){

                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

    });


    //Timer

    const deadLine = '2021-06-18';

    function getTimeremaning(endTime){
        const t =  Date.parse(endTime) - Date.parse(new Date()),
              days = Math.floor( t / 86400000),
              hours = Math.floor( (t/ 3600000) % 24),
              minutes = Math.floor( (t / 60000) % 60),
              seconds = Math.floor( (t / 1000) % 60);
              
              return {
                 total: t,
                 days: days,
                 hours: hours,
                 minutes: minutes,
                 seconds: seconds

              };

    }

    function addLeadingZero(number){
        if(number < 10){
            return "0" + number.toString();
        }else{
            return number.toString();
        }
    }

    function setClock(selector, endTime){

        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

updateClock();

              function updateClock(){
     
                const t = getTimeremaning(endTime);

                days.innerHTML = addLeadingZero( t.days);
                hours.innerHTML = addLeadingZero( t.hours);
                minutes.innerHTML = addLeadingZero( t.minutes);
                seconds.innerHTML = addLeadingZero( t.seconds);

                if(t.total <= 0){

                    clearInterval(timeInterval);

                }
            }
    }

    

    setClock('.timer', deadLine);

});