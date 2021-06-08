"use strict";

const btn = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btn[0].classList.length);

// console.log(btn[0].classList.item(0));

// console.log(btn[1].classList.add('red'));

// // console.log(btn[0].classList.remove('blue'));

// // console.log(btn[0].classList.toggle('blue'));

// if (btn[1].classList.contains('red')){
//     console.log("Get it");
// }


// btn[0].addEventListener('click', () =>{
// // if(!btn[1].classList.contains('red')){
// //     btn[1].classList.add('red');
// // }else{
// //     btn[1].classList.remove('red');
// // }
// btn[1].classList.toggle('red');
// });


wrapper.addEventListener('click', (event) =>{
    // console.dir(event.target);
    if(event.target && event.target.matches("button.red")){
        console.log("Hello");
    }
});


// btn.forEach(btn =>{
// btn.addEventListener('click', () =>{
// console.log("Hi");
// });
// });

const newBtn = document.createElement('button');
newBtn.classList.add('red');
wrapper.append(newBtn);