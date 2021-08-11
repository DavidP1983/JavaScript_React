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


    const getData = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    getData(' http://localhost:3000/menu')
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

module.exports = cards;