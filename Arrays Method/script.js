'use strict';

//filter

/* const names = ['Ivan', 'David', 'Ann', 'Voldemart'];

 const shortNames = names.filter(function(name){

     return name.length < 5;
 });

 console.log(shortNames);*/


//Map


/*  const answers = ['IvAn', 'AnnA', 'Hello'];

  const result = answers.map(item => item.toLocaleLowerCase());

 console.log(result);

  let answers = ['IvAn', 'AnnA', 'Hello'];

  answers = answers.map(item => item.toLocaleLowerCase());

 console.log(answers);*/



 // Every/ Some


 /*const array = [4, 'some', 'element'];
//  console.log(array.some(item => typeof(item) == 'number'));

console.log(array.every(item => typeof(item) == 'number'));*/



//Reduce


/*const array = [4, 5, 1, 3, 2, 6];

const result = array.reduce((sum, current) => sum + current);

console.log(result);*/



/*const array = ['apple', 'pear', 'banana'];

const result = array.reduce((sum, current) => `${sum}, ${current}`);

console.log(result);*/


/*const array = [4, 5, 1, 3, 2, 6];

const result = array.reduce((sum, current) => sum + current, 3);

console.log(result);*/



const obj = {
ivan: 'persone',
ann: 'persone',
dog: 'animal',
cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);
console.log(newArr);