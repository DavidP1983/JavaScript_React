/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
    //Calc
    const result = document.querySelector('.calculating__result span');
    let sex,
        height,
        weight,
        age,
        ration;

    //Remember me
    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }
    if (localStorage.getItem('ration')) {
        ration = localStorage.getItem('ration');
    } else {
        ration = 1.375;
        localStorage.setItem('ration', 1.375);
    }
    // //Remember me over

    // //Remember ActiveClass
    function initLocalSettings(selector, activClass) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(item => {
            item.classList.remove(activClass);
            if (item.getAttribute('id') === localStorage.getItem('sex')) {
                item.classList.add(activClass);
            }
            if (item.getAttribute('data-ratio') === localStorage.getItem('ration')) {
                item.classList.add(activClass);
            }
        });
    }
    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');
    //Remember ActiveClass over

    function calcTotal() {
        if (!sex || !weight || !height || !age || !ration) {
            result.textContent = '___';
            return;
        }
        if (sex === 'female') {
            result.textContent = Math.round(447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age) * ration);
        } else {
            result.textContent = Math.round(88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age) * ration);
        }
    }

    calcTotal();

    function getStaticInfo(selector, activClass) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(item => {
            item.addEventListener('click', (e) => {
                const target = e.target;
                if (target.getAttribute('data-ratio')) {
                    ration = +target.getAttribute('data-ratio');
                    localStorage.setItem('ration', +target.getAttribute('data-ratio'));
                } else {
                    sex = target.getAttribute('id');
                    localStorage.setItem('sex', target.getAttribute('id'));
                }
                console.log(ration, sex);

                elements.forEach(active => {
                    active.classList.remove(activClass);
                });
                target.classList.add(activClass);

                calcTotal();
            });
        });
    }

    getStaticInfo('#gender div', 'calculating__choose-item_active');
    getStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active');

    function getDynamicInfo(selector) {
        const input = document.querySelector(selector);
        input.addEventListener('input', () => {
            //check input validation
            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }
            //check input validation over
            switch (input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }
            calcTotal();
        });
    }
    getDynamicInfo('#height');
    getDynamicInfo('#weight');
    getDynamicInfo('#age');

}

// module.exports = calc;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_sevices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/sevices */ "./js/services/sevices.js");

function cards() {

    // *****Using Class for Cards - Rest Operator****** //

    class MenuCard {
        constructor(src, alt, title, descr, price, parentElement, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentElement);
            this.currency = 27;
            this.classes = classes;
            this.changeToCAD();

        }
        changeToCAD() {
            this.price *= +this.currency;
        }
        newCard() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.class = 'menu__item';
                element.classList.add(this.class);

            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML =
                ` 
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        </div>`;

            this.parent.append(element);

        }

    }

    // Creating Function 


    // const getData = async (url) => {
    //     const res = await fetch(url);

    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    //     }

    //     return await res.json();
    // };

    (0,_services_sevices__WEBPACK_IMPORTED_MODULE_0__.getData)(' http://localhost:3000/menu')
        .then(data => {

            data.forEach(({
                img,
                altimg,
                title,
                descr,
                price
            }) => {
                new MenuCard(img, altimg, title, descr, price, ".menu .container").newCard();
            });
        });

}

// module.exports = cards;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_sevices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sevices */ "./js/services/sevices.js");



function forms(formSelector,modalTimerId){
     // Server Side AJAX

     const forms = document.querySelectorAll(formSelector);

     const message = {
         loading: "img/form/spinner.svg",
         success: "Thank you, call you back later",
         fail: "Samething went wrong"
     };
 
 
     forms.forEach(item => {
         bindpostData(item);
     });
 
     // Creating function 
 
    //  const postData = async (url, data) => {
    //      const result = await fetch(url, {
    //          method: "POST",
    //          headers: {
    //              'Content-type': 'application/json'
    //          },
    //          body: data
    //      });
    //      return await result.json();
    //  };
 
     function bindpostData(form) {
         form.addEventListener('submit', (e) => {
             e.preventDefault();
 
             const statusMessage = document.createElement('img');
 
             statusMessage.src = message.loading;
             statusMessage.style.cssText = `display: block; margin: 0 auto;`;
             form.insertAdjacentElement('afterend', statusMessage);
 
 
 
             const formData = new FormData(form);
 
             const json = JSON.stringify(Object.fromEntries(formData.entries()));
 
 
             (0,_services_sevices__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json)
                 // .then(data => data.text())
                 .then(data => {
                     console.log(data);
                     showThanksModal(message.success);
                     statusMessage.remove();
                 }).catch(() => {
                     showThanksModal(message.fail);
                 }).finally(() => {
                     form.reset();
                 });
 
 
         });
     }
 
     //Thanks Modal
 
 
     function showThanksModal(message) {
         const modalDialog = document.querySelector('.modal__dialog');
         modalDialog.classList.add('hide');
 
         (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId);
 
         const thanksModal = document.createElement('div');
         thanksModal.classList.add('modal__dialog');
         thanksModal.innerHTML =
             `<div class = modal__content>
                <div data-close class="modal__close">×</div>
                <div class="modal__title">${message}</div>
             </div>
             `;
         document.querySelector('.modal').append(thanksModal);
         setTimeout(() => {
             thanksModal.remove();
             modalDialog.classList.add('show');
             modalDialog.classList.remove('hide');
             (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
         }, 4000);
     }
 
 
}

// module.exports = forms;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "closeModal": () => (/* binding */ closeModal)
/* harmony export */ });
function openModal(modalSelector, modalTimerId) {
    const  modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    console.log(modalTimerId);
if(modalTimerId){
    clearInterval(modalTimerId);
   }
}


function closeModal(modalSelector) {
    const  modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    //Modal

    const callModalWindow = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);


    // *****************  Open Modal *********************//

    // function openModal() {
    //     modal.classList.add('show');
    //     modal.classList.remove('hide');
    //     document.body.style.overflow = 'hidden';

    //     clearInterval(modalTimerId);
    // }

    callModalWindow.forEach((i) => {
        i.addEventListener('click', () => openModal(modalSelector, modalTimerId)); 
    });



    // ****************** Close Modal ******************//


    // function closeModal() {
    //     modal.classList.add('hide');
    //     modal.classList.remove('show');
    //     document.body.style.overflow = '';
    // }

    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute('data-close') == '') {

            closeModal(modalSelector);

        }
    });


    // ******** Close Modal suing 'ESC' button on keyboard ******** //

    document.addEventListener('keydown', (event) => {

        if (event.code == 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });


    // ******* Set TimeOut to open the Modal ******* //

    // const modalTimerId = setTimeout(openModal, 100000);


    // ******* Open Modal by the end of the scrolling ********* //

    function openOnceOnScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', openOnceOnScroll);
        }
    }

    window.addEventListener('scroll', openOnceOnScroll); //() =>{



}

// module.exports = modal;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    //Slide Carousel

    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        current = document.querySelector(currentCounter),
        total = document.querySelector(totalCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;
    let offset = 0;
    let slideIndex = 1;



    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }


    slidesField.style.width = 100 * slides.length + '%';
    slides.forEach(item => {
        item.style.width = width;
    });
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';

    //DOTS
    //Crating <OL></OL> ELEMENT
    slider.style.position = 'relative';
    const dotsWrapper = document.createElement('ol'),
        dots = [];
    dotsWrapper.classList.add('carousel-indicators');


    slider.append(dotsWrapper);

    //Creating <li></li> ELEMNTS 
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');

        if (i == 0) {
            dot.style.opacity = 1;
        }
        dotsWrapper.append(dot);
        dots.push(dot);
    }

    function dotsOpacity() {
        dots.forEach(item => item.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    // Timer

    setInterval(function () {

        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
        dotsOpacity();
    }, 5000);




    next.addEventListener('click', () => {

        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        dotsOpacity();

    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        dotsOpacity();



    });

    dots.forEach(item => {
        item.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }

            dotsOpacity();
        });
    });
}

// module.exports = slider;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsParentSelector, tabsContentSelector, activeClass) {

    const tabs = document.querySelectorAll(tabsSelector),
        tabsParent = document.querySelector(tabsParentSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector);

    //Remove All Tab Content

    function hideTabContent() {

        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });

    }

    //Add first Tab Content by default

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }


    hideTabContent();
    showTabContent();

    //Add click

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {

                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

    });
}

// module.exports = tabs;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadLine) {
    //Timer

    // const deadLine = '2021-06-18';

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



    setClock(id, deadLine);
}

// module.exports = timer;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/sevices.js":
/*!********************************!*\
  !*** ./js/services/sevices.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData),
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
const postData = async (url, data) => {
    const result = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await result.json();
};

const getData = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");


    
    
    
    
    
    
    
    

document.addEventListener('DOMContentLoaded', () => {

    // const tabs = require('./modules/tabs'),
    //       modal = require('./modules/modal'),
    //       timer = require('./modules/timer'),
    //       cards = require('./modules/cards'),
    //       calc = require('./modules/calc'),
    //       forms = require('./modules/forms'),
    //       slider = require('./modules/slider');
    
    const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal', modalTimerId), 100000);


    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__.default)('.tabheader__item', '.tabheader__items', '.tabcontent', 'tabheader__item_active');
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.default)('[data-modal]', '.modal', modalTimerId);
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__.default)('.timer', '2021-06-18');
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__.default)();
    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__.default)();
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_5__.default)('form', modalTimerId);
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__.default)({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'

    });

    // const tabs = document.querySelectorAll('.tabheader__item'),
    //     tabsParent = document.querySelector('.tabheader__items'),
    //     tabsContent = document.querySelectorAll('.tabcontent');

    // //Remove All Tab Content

    // function hideTabContent() {

    //     tabsContent.forEach(item => {
    //         item.classList.add('hide');
    //         item.classList.remove('show', 'fade');
    //     });

    //     tabs.forEach(tab => {
    //         tab.classList.remove('tabheader__item_active');
    //     });

    // }

    // //Add first Tab Content by default

    // function showTabContent(i = 0) {
    //     tabsContent[i].classList.add('show', 'fade');
    //     tabsContent[i].classList.remove('hide');
    //     tabs[i].classList.add('tabheader__item_active');
    // }


    // hideTabContent();
    // showTabContent();

    // //Add click

    // tabsParent.addEventListener('click', (event) => {
    //     const target = event.target;

    //     if (target && target.classList.contains('tabheader__item')) {
    //         tabs.forEach((item, i) => {
    //             if (target == item) {

    //                 hideTabContent();
    //                 showTabContent(i);
    //             }
    //         });
    //     }

    // });


    // //Timer

    // const deadLine = '2021-06-18';

    // function getTimeremaning(endTime) {
    //     const t = Date.parse(endTime) - Date.parse(new Date()),
    //         days = Math.floor(t / 86400000),
    //         hours = Math.floor((t / 3600000) % 24),
    //         minutes = Math.floor((t / 60000) % 60),
    //         seconds = Math.floor((t / 1000) % 60);

    //     return {
    //         total: t,
    //         days: days,
    //         hours: hours,
    //         minutes: minutes,
    //         seconds: seconds

    //     };

    // }

    // function addLeadingZero(number) {
    //     if (number < 10) {
    //         return "0" + number.toString();
    //     } else {
    //         return number.toString();
    //     }
    // }

    // function setClock(selector, endTime) {

    //     const timer = document.querySelector(selector),
    //         days = timer.querySelector('#days'),
    //         hours = timer.querySelector('#hours'),
    //         minutes = timer.querySelector('#minutes'),
    //         seconds = timer.querySelector('#seconds'),
    //         timeInterval = setInterval(updateClock, 1000);



    //     updateClock();


    //     function updateClock() {

    //         const t = getTimeremaning(endTime);

    //         days.innerHTML = addLeadingZero(t.days);
    //         hours.innerHTML = addLeadingZero(t.hours);
    //         minutes.innerHTML = addLeadingZero(t.minutes);
    //         seconds.innerHTML = addLeadingZero(t.seconds);
    //         const timeClock = setInterval(clock, 1000);

    //         clock();

    //         function clock() {
    //             const currentTime = new Date(),
    //                 hoursAfter = currentTime.getHours(),
    //                 minutesAfter = currentTime.getMinutes(),
    //                 secondsAfter = currentTime.getSeconds();

    //             if (t.total <= 0) {

    //                 clearInterval(timeInterval);
    //                 days.innerHTML = '00';
    //                 hours.innerHTML = addLeadingZero(hoursAfter);
    //                 minutes.innerHTML = addLeadingZero(minutesAfter);
    //                 seconds.innerHTML = addLeadingZero(secondsAfter);


    //             }

    //         }




    //     }

    // }



    // setClock('.timer', deadLine);


    // //Modal

    // const callModalWindow = document.querySelectorAll('[data-modal]'),
    //     modal = document.querySelector('.modal');
    // // modalClose = modal.querySelector('[data-close]');


    // // *****************  Open Modal *********************//

    // function openModal() {
    //     modal.classList.add('show');
    //     modal.classList.remove('hide');
    //     // modal.classList.toggle('show');
    //     document.body.style.overflow = 'hidden';

    //     clearInterval(modalTimerId);
    //     //if user have already opened the modal window
    //     //we use clearInterval
    // }

    // callModalWindow.forEach((i) => {
    //     i.addEventListener('click', openModal); //(event) => {
    //     // const target = event.target;
    //     // if (target == i) {
    //     //     modal.classList.add('show');
    //     //     modal.classList.remove('hide');
    //     //     // modal.classList.toggle('show');
    //     //     document.body.style.overflow = 'hidden';
    //     // }
    // });

    // // });

    // // ****************** Close Modal ******************//

    // // Dont reapet the same code twice use function

    // function closeModal() {
    //     modal.classList.add('hide');
    //     modal.classList.remove('show');
    //     // modal.classList.toggle('show');
    //     document.body.style.overflow = '';
    // }

    // //CloseModal will work after 'click'
    // // modalClose.addEventListener('click', closeModal); //() =>{

    // //         modal.classList.add('hide');
    // //         modal.classList.remove('show');
    // //         // modal.classList.toggle('show');
    // //         document.body.style.overflow = '';

    // //    });


    // // ********** Close Modal on white space ********** //

    // // window.addEventListener('click', (event) => {
    // //     if (event.target == modal) {
    // //         modal.classList.remove('show');
    // //     }
    // // });
    // // the same as window object

    // modal.addEventListener('click', (event) => {
    //     if (event.target === modal || event.target.getAttribute('data-close') == '') {

    //         closeModal();

    //         // modal.classList.add('hide');
    //         // modal.classList.remove('show');
    //         // document.body.style.overflow = '';
    //     }
    // });


    // // ******** Close Modal suing 'ESC' button on keyboard ******** //

    // document.addEventListener('keydown', (event) => {

    //     if (event.code == 'Escape' && modal.classList.contains('show')) {
    //         closeModal();
    //     }
    // });


    // // ******* Set TimeOut to open the Modal ******* //

    // const modalTimerId = setTimeout(openModal, 100000);


    // // ******* Open Modal by the end of the scrolling ********* //

    // function openOnceOnScroll() {
    //     if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    //         openModal();
    //         window.removeEventListener('scroll', openOnceOnScroll);
    //     }
    // }

    // window.addEventListener('scroll', openOnceOnScroll); //() =>{
    // // // if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
    // // // openModal();
    // // }
    // // });



    // // *****Using Class for Cards - Rest Operator****** //

    // class MenuCard {
    //     constructor(src, alt, title, descr, price, parentElement, ...classes) {
    //         this.src = src;
    //         this.alt = alt;
    //         this.title = title;
    //         this.descr = descr;
    //         this.price = price;
    //         this.parent = document.querySelector(parentElement);
    //         this.currency = 27;
    //         this.classes = classes;
    //         this.changeToCAD();

    //     }
    //     changeToCAD() {
    //         this.price *= +this.currency;
    //     }
    //     newCard() {
    //         const element = document.createElement('div');
    //         if (this.classes.length === 0) {
    //             this.class = 'menu__item';
    //             element.classList.add(this.class);

    //         } else {
    //             this.classes.forEach(className => element.classList.add(className));
    //         }
    //         element.innerHTML =
    //             ` 
    //         <img src=${this.src} alt=${this.alt}>
    //         <h3 class="menu__item-subtitle">${this.title}</h3>
    //         <div class="menu__item-descr">${this.descr}</div>
    //         <div class="menu__item-divider"></div>
    //         <div class="menu__item-price">
    //             <div class="menu__item-cost">Цена:</div>
    //             <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
    //         </div>
    //     </div>`;

    //         this.parent.append(element);

    //     }

    // }

    // // Creating Function 


    // const getData = async (url) => {
    //     const res = await fetch(url);

    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    //     }

    //     return await res.json();
    // };

    // // getData(' http://localhost:3000/menu')
    // // .then(data =>{

    // //     data.forEach(({img, altimg, title, descr, price}) =>{
    // //         new MenuCard(img, altimg, title, descr, price, ".menu .container").newCard();
    // //     });
    // // });

    // axios.get(' http://localhost:3000/menu')
    //     .then(data => {
    //         data.data.forEach(({
    //             img,
    //             altimg,
    //             title,
    //             descr,
    //             price
    //         }) => {
    //             new MenuCard(img, altimg, title, descr, price, ".menu .container").newCard();
    //         });
    //     });
    // new MenuCard(
    //     "img/tabs/vegy.jpg",
    //     "elite",
    //     'Меню “Премиум',
    //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //     9,
    //     ".menu .container",


    // ).newCard();

    // new MenuCard(
    //     "img/tabs/elite.jpg",
    //     "vegy",
    //     'Меню "Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     14,
    //     ".menu .container",
    //     'menu__item'


    // ).newCard();

    // new MenuCard(
    //     "img/tabs/post.jpg",
    //     "post",
    //     'Меню "Постное"',
    //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    //     17,
    //     ".menu .container",



    // ).newCard();


    // // Server Side AJAX

    // const forms = document.querySelectorAll('form');

    // const message = {
    //     loading: "img/form/spinner.svg",
    //     success: "Thank you, call you back later",
    //     fail: "Samething went wrong"
    // };


    // forms.forEach(item => {
    //     bindpostData(item);
    // });

    // // Creating function 

    // const postData = async (url, data) => {
    //     const result = await fetch(url, {
    //         method: "POST",
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: data
    //     });
    //     return await result.json();
    // };

    // function bindpostData(form) {
    //     form.addEventListener('submit', (e) => {
    //         e.preventDefault();

    //         // const statusMessage = document.createElement('div');
    //         const statusMessage = document.createElement('img');

    //         statusMessage.src = message.loading;
    //         // statusMessage.textContent = message.loading;
    //         statusMessage.style.cssText = `display: block; margin: 0 auto;`;
    //         // form.append(statusMessage);
    //         form.insertAdjacentElement('afterend', statusMessage);


    //         //OLD version XMLHttpRequest

    //         // const request = new XMLHttpRequest();
    //         // request.open('POST', 'server.php');
    //         //request.setRequestHeader('Content-type', 'multipart/form-data');
    //         //request.setRequestHeader('Content-type','application/json');






    //         const formData = new FormData(form);

    //         // const obj = {};

    //         // formData.forEach(function(value, key){
    //         //     obj[key] = value;
    //         // });

    //         // const json = JSON.stringify(obj);

    //         const json = JSON.stringify(Object.fromEntries(formData.entries()));


    //         // request.send(formData);
    //         //request.send(json);

    //         // NEW version

    //         //  fetch('server.php',{
    //         //     method: "POST",
    //         //     headers:{'Content-type': 'application/json'},
    //         //     body:JSON.stringify(obj)
    //         // })

    //         postData('http://localhost:3000/requests', json)
    //             // .then(data => data.text())
    //             .then(data => {
    //                 console.log(data);
    //                 showThanksModal(message.success);
    //                 statusMessage.remove();
    //             }).catch(() => {
    //                 showThanksModal(message.fail);
    //             }).finally(() => {
    //                 form.reset();
    //             });

    //         // request.addEventListener('load', () =>{
    //         //     if(request.status == 200){
    //         //         console.log(request.response);
    //         //         // statusMessage.textContent = message.success;
    //         //         showThanksModal(message.success);
    //         //         form.reset();
    //         //         // setTimeout(() =>{
    //         //         //     statusMessage.remove();
    //         //         // }, 2000);
    //         //         statusMessage.remove();
    //         //     }else{
    //         //         // statusMessage.textContent = message.fail;
    //         //         showThanksModal(message.fail);
    //         //     }
    //         // });

    //     });
    // }

    // //Thanks Modal


    // function showThanksModal(message) {
    //     const modalDialog = document.querySelector('.modal__dialog');
    //     modalDialog.classList.add('hide');

    //     openModal();

    //     const thanksModal = document.createElement('div');
    //     thanksModal.classList.add('modal__dialog');
    //     thanksModal.innerHTML =
    //         `<div class = modal__content>
    //            <div data-close class="modal__close">×</div>
    //            <div class="modal__title">${message}</div>
    //         </div>
    //         `;
    //     document.querySelector('.modal').append(thanksModal);
    //     setTimeout(() => {
    //         thanksModal.remove();
    //         modalDialog.classList.add('show');
    //         modalDialog.classList.remove('hide');
    //         closeModal();
    //     }, 4000);
    // }

    // fetch('db.json')
    // fetch('http://localhost:3000/menu')
    //     .then(data => data.json())
    //     .then(result => console.log(result));


    // Slider

    // Solution 1

    /*const sliderWrapper = document.querySelectorAll('.offer__slide'),
        next = document.querySelector('.offer__slider-next'),
        prev = document.querySelector('.offer__slider-prev'),
        current = document.querySelector('#current');
    let currentIndex = 0,
        count = 1;


    function hideSlideContent() {
        sliderWrapper.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

    }


    function showSlideContent(i = 0) {
        sliderWrapper[i].classList.add('show', 'fade');
        sliderWrapper[i].classList.remove('hide');
        current.innerHTML = addLeadingZero(count + currentIndex);

    }



    hideSlideContent();
    showSlideContent();

    next.addEventListener('click',() => {
        if (currentIndex == (sliderWrapper.length - 1)) {
            currentIndex = 0;
           
        } else {
            currentIndex += 1;

        }
        hideSlideContent();
        showSlideContent(currentIndex);
    });

    prev.addEventListener('click', () => {
        if (currentIndex == 0) {
            currentIndex = sliderWrapper.length - 1;
        } else {
            currentIndex -= 1;
        }
        hideSlideContent();
        showSlideContent(currentIndex);
    });*/


    // Solution 2

    /*const slides = document.querySelectorAll('.offer__slide'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current');
          let slideIndex = 1;
          let timer;

          showSlides();

          if(slides.length < 10){
              total.textContent = `0${slides.length}`;
          }else{
              total.textContent = slides.length;
          }

          function showSlides(n){
              if(n > slides.length){
                  slideIndex = 1;
              }
              if(n < 1){
                  slideIndex = slides.length;
              }
              slides.forEach(item =>{
                item.style.display = 'none';
              });
              slides.forEach(anim =>{
                anim.classList.add('fade');
              });
              slides[slideIndex - 1].style.display = 'block';
            
              if(slides.length < 10){
                  current.textContent = `0${slideIndex}`;
              }else{
                  current.textContent = slideIndex;
              }

              clearTimeout(timer); 
               timer = setTimeout(() => plusSlides(1), 2000);
              
          }

          function plusSlides(n){
              showSlides(slideIndex+= n);
          }

          next.addEventListener('click', () =>{
            plusSlides(1);
          });
          prev.addEventListener('click', () =>{
            plusSlides(-1);
          });*/

    // //Slide Carousel

    // const slides = document.querySelectorAll('.offer__slide'),
    //     slider = document.querySelector('.offer__slider'),
    //     prev = document.querySelector('.offer__slider-prev'),
    //     next = document.querySelector('.offer__slider-next'),
    //     current = document.querySelector('#current'),
    //     total = document.querySelector('#total'),
    //     slidesWrapper = document.querySelector('.offer__slider-wrapper'),
    //     slidesField = document.querySelector('.offer__slider-inner'),
    //     width = window.getComputedStyle(slidesWrapper).width;
    // let offset = 0;
    // let slideIndex = 1;



    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    //     current.textContent = `0${slideIndex}`;
    // } else {
    //     total.textContent = slides.length;
    //     current.textContent = slideIndex;
    // }


    // slidesField.style.width = 100 * slides.length + '%';
    // slides.forEach(item => {
    //     item.style.width = width;
    // });
    // slidesField.style.display = 'flex';
    // slidesField.style.transition = '0.5s all';
    // slidesWrapper.style.overflow = 'hidden';

    // //DOTS
    // //Crating <OL></OL> ELEMENT
    // slider.style.position = 'relative';
    // const dotsWrapper = document.createElement('ol'),
    //     dots = [];
    // dotsWrapper.classList.add('carousel-indicators');

    // //or

    // // dots.style.cssText = `
    // //       position: absolute;
    // //       right: 0;
    // //       bottom: 0;
    // //       left: 0;
    // //       z-index: 15;
    // //       display: flex;
    // // justify-content: center;
    // // margin-right: 15%;
    // // margin-left: 15%;
    // // list-style: none;
    // //       `;

    // slider.append(dotsWrapper);

    // //Creating <li></li> ELEMNTS 
    // for (let i = 0; i < slides.length; i++) {
    //     const dot = document.createElement('li');
    //     dot.setAttribute('data-slide-to', i + 1);
    //     dot.classList.add('dot');

    //     if (i == 0) {
    //         dot.style.opacity = 1;
    //     }
    //     dotsWrapper.append(dot);
    //     dots.push(dot);
    // }

    // function dotsOpacity() {
    //     dots.forEach(item => item.style.opacity = '.5');
    //     dots[slideIndex - 1].style.opacity = 1;
    // }

    // function deleteNotDigits(str) {
    //     return +str.replace(/\D/g, '');
    // }

    // // Timer

    // setInterval(function () {

    //     if (offset == deleteNotDigits(width) * (slides.length - 1)) {
    //         offset = 0;
    //     } else {
    //         offset += deleteNotDigits(width);
    //     }
    //     slidesField.style.transform = `translateX(-${offset}px)`;
    //     if (slideIndex == slides.length) {
    //         slideIndex = 1;
    //     } else {
    //         slideIndex++;
    //     }

    //     current.textContent = addLeadingZero(slideIndex);
    //     dotsOpacity();
    // }, 5000);




    // next.addEventListener('click', () => {
    //     // if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
    //     //     offset = 0;
    //     // } else {
    //     //     offset += +width.slice(0, width.length - 2);
    //     // }

    //     // if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
    //     //         offset = 0;
    //     //     } else {
    //     //         offset += +width.replace(/\D/g, '');
    //     //     }

    //     if (offset == deleteNotDigits(width) * (slides.length - 1)) {
    //         offset = 0;
    //     } else {
    //         offset += deleteNotDigits(width);
    //     }

    //     if (slideIndex == slides.length) {
    //         slideIndex = 1;
    //     } else {
    //         slideIndex++;
    //     }
    //     current.textContent = addLeadingZero(slideIndex);
    //     slidesField.style.transform = `translateX(-${offset}px)`;

    //     // dots.forEach(item => item.style.opacity = '.1' );
    //     // dots[slideIndex -1].style.opacity = 1;
    //     dotsOpacity();

    // });

    // prev.addEventListener('click', () => {
    //     if (offset == 0) {
    //         offset = deleteNotDigits(width) * (slides.length - 1);
    //     } else {
    //         offset -= deleteNotDigits(width);
    //     }

    //     if (slideIndex == 1) {
    //         slideIndex = slides.length;
    //     } else {
    //         slideIndex--;
    //     }
    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    //     slidesField.style.transform = `translateX(-${offset}px)`;

    //     // dots.forEach(item => item.style.opacity = '.5' );
    //     // dots[slideIndex -1].style.opacity = 1;
    //     dotsOpacity();



    // });

    // dots.forEach(item => {
    //     item.addEventListener('click', (e) => {
    //         const slideTo = e.target.getAttribute('data-slide-to');

    //         slideIndex = slideTo;
    //         offset = deleteNotDigits(width) * (slideTo - 1);

    //         slidesField.style.transform = `translateX(-${offset}px)`;

    //         current.textContent = addLeadingZero(slideIndex);

    //         // dots.forEach(item => item.style.opacity = '.5' );
    //         // dots[slideIndex -1].style.opacity = 1;
    //         dotsOpacity();
    //     });
    // });

    // //Calc
    // const result = document.querySelector('.calculating__result span');
    // let sex,
    //     height,
    //     weight,
    //     age,
    //     ration;

    // //Remember me
    // if (localStorage.getItem('sex')) {
    //     sex = localStorage.getItem('sex');
    // } else {
    //     sex = 'female';
    //     localStorage.setItem('sex', 'female');
    // }
    // if (localStorage.getItem('ration')) {
    //     ration = localStorage.getItem('ration');
    // } else {
    //     ration = 1.375;
    //     localStorage.setItem('ration', 1.375);
    // }
    // // //Remember me over

    // // //Remember ActiveClass
    // function initLocalSettings(selector, activClass) {
    //     const elements = document.querySelectorAll(selector);
    //     elements.forEach(item => {
    //         item.classList.remove(activClass);
    //         if (item.getAttribute('id') === localStorage.getItem('sex')) {
    //             item.classList.add(activClass);
    //         }
    //         if (item.getAttribute('data-ratio') === localStorage.getItem('ration')) {
    //             item.classList.add(activClass);
    //         }
    //     });
    // }
    // initLocalSettings('#gender div', 'calculating__choose-item_active');
    // initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');
    // //Remember ActiveClass over

    // function calcTotal() {
    //     if (!sex || !weight || !height || !age || !ration) {
    //         result.textContent = '___';
    //         return;
    //     }
    //     if (sex === 'female') {
    //         result.textContent = Math.round(447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age) * ration);
    //     } else {
    //         result.textContent = Math.round(88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age) * ration);
    //     }
    // }

    // calcTotal();

    // function getStaticInfo(selector, activClass) {
    //     const elements = document.querySelectorAll(selector);
    //     elements.forEach(item => {
    //         item.addEventListener('click', (e) => {
    //             const target = e.target;
    //             if (target.getAttribute('data-ratio')) {
    //                 ration = +target.getAttribute('data-ratio');
    //                 localStorage.setItem('ration', +target.getAttribute('data-ratio'));
    //             } else {
    //                 sex = target.getAttribute('id');
    //                 localStorage.setItem('sex', target.getAttribute('id'));
    //             }
    //             console.log(ration, sex);

    //             elements.forEach(active => {
    //                 active.classList.remove(activClass);
    //             });
    //             target.classList.add(activClass);

    //             calcTotal();
    //         });
    //     });
    // }

    // getStaticInfo('#gender div', 'calculating__choose-item_active');
    // getStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active');

    // function getDynamicInfo(selector) {
    //     const input = document.querySelector(selector);
    //     input.addEventListener('input', () => {
    //         //check input validation
    //         if (input.value.match(/\D/g)) {
    //             input.style.border = '1px solid red';
    //         } else {
    //             input.style.border = 'none';
    //         }
    //         //check input validation over
    //         switch (input.getAttribute('id')) {
    //             case 'height':
    //                 height = +input.value;
    //                 break;
    //             case 'weight':
    //                 weight = +input.value;
    //                 break;
    //             case 'age':
    //                 age = +input.value;
    //                 break;
    //         }
    //         calcTotal();
    //     });
    // }
    // getDynamicInfo('#height');
    // getDynamicInfo('#weight');
    // getDynamicInfo('#age');
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map