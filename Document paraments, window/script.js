'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;


const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

// const hideScoll = function(){
// box.style.height = height + 'px';
// };

// btn.addEventListener('click', hideScoll);


const hideScoll = function(){
    console.log(box.scrollTop);
    };
    
    btn.addEventListener('click', hideScoll);
    

// console.log(box.getBoundingClientRect().top);

// const style = window.getComputedStyle(box);
// console.log(style.display);


// console.log(document.documentElement.scrollTop);