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

module.exports = calc;