
'use strict';

// const btn = document.querySelector('button'),
//       overlay = document.querySelector('.overlay');
// btn.onclick = function(){
// alert('Hello');
// };


// btn.addEventListener('click', () => {
// alert('Im Here');
// });

// btn.addEventListener('click', () => {
//     alert('Bye Bye');
//     });
    

    // btn.addEventListener('mouseenter', (e) => {
    //   console.log(e.target);
    //   e.target.remove();
    //     });



const element = (e) =>{
console.log(e.target);
console.log(e.type);
};

// btn.addEventListener('click', towEvent);
// overlay.addEventListener('click', towEvent);


const btns = document.querySelectorAll('button');
btns.forEach(btn =>{
btn.addEventListener('click', element, {once:true});
});



// const link = document.querySelector('a');

// link.addEventListener('click', (e) =>{
// e.preventDefault();

// console.log(e.target);
// });


