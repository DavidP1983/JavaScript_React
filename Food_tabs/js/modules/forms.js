function forms(){
     // Server Side AJAX

     const forms = document.querySelectorAll('form');

     const message = {
         loading: "img/form/spinner.svg",
         success: "Thank you, call you back later",
         fail: "Samething went wrong"
     };
 
 
     forms.forEach(item => {
         bindpostData(item);
     });
 
     // Creating function 
 
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
 
     function bindpostData(form) {
         form.addEventListener('submit', (e) => {
             e.preventDefault();
 
             const statusMessage = document.createElement('img');
 
             statusMessage.src = message.loading;
             statusMessage.style.cssText = `display: block; margin: 0 auto;`;
             form.insertAdjacentElement('afterend', statusMessage);
 
 
 
             const formData = new FormData(form);
 
             const json = JSON.stringify(Object.fromEntries(formData.entries()));
 
 
             postData('http://localhost:3000/requests', json)
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
 
         openModal();
 
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
             closeModal();
         }, 4000);
     }
 
 
}

module.exports = forms;