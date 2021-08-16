'use strict';

// try{
//     console.log('Normal');
//     console.log(a);
//     console.log('result')
// }catch(e){
//     console.log(e);
// }

// console.log('Still normal');


// try{
//     console.log('Normal');
//     console.log(a);
//     console.log('result')
// }catch(e){
//     console.log(e.name);
//     console.log(e.message);
//     console.log(e.stack);
// }finally{

// }

// console.log('Still normal');


try{
document.querySelector('.active').addEventListener('click', () =>{
console.log('click');
});
}catch(e){
    console.log(e);
}
console.log('normal');