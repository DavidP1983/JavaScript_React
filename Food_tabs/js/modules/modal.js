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
export default modal;
export {openModal};
export {closeModal};