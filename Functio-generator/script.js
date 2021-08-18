'use strict';

// function* generator(){
// yield 'S';
// yield 'c';
// yield 'r';
// yield 'f';
// yield 'a';
// yield 'v';
// }

// const str = generator();

// console.log(str.next().value);
// console.log(str.next());
// console.log(str.next());

// console.log(str.next());
// console.log(str.next());
// console.log(str.next());


// function* count(n){
// for(let i = 0; i < n; i++){
//     yield i;
// }
// }
// const counter = count(7);

// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);


function* count(n){
    for(let i = 0; i < n; i++){
        yield i;
    }
    }
    
    for(let key of count(7)){
        console.log(key);
    }