function modal() {
    //Modal

    const callModalWindow = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');


    // *****************  Open Modal *********************//

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';

        clearInterval(modalTimerId);
    }

    callModalWindow.forEach((i) => {
        i.addEventListener('click', openModal);
    });



    // ****************** Close Modal ******************//


    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute('data-close') == '') {

            closeModal();

        }
    });


    // ******** Close Modal suing 'ESC' button on keyboard ******** //

    document.addEventListener('keydown', (event) => {

        if (event.code == 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });


    // ******* Set TimeOut to open the Modal ******* //

    const modalTimerId = setTimeout(openModal, 100000);


    // ******* Open Modal by the end of the scrolling ********* //

    function openOnceOnScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', openOnceOnScroll);
        }
    }

    window.addEventListener('scroll', openOnceOnScroll); //() =>{



}

module.exports = modal;