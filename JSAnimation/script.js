//  const btn = document.querySelector('.btn');


/*function myAnimation(){
    const elem = document.querySelector('.box');
    let position = 0;
    const interval = setInterval(frame, 10);
    function frame(){
        if(position == 300){
            clearInterval(interval);
        }else{
            position++;
            elem.style.top = position + 'px';
            elem.style.left = position + 'px';
        }
    }
}


 btn.addEventListener('click', myAnimation);*/

/*const btn  = document.querySelector('.btn'),
      elem = document.querySelector('.box');
let   position = 0;


function myAnimation(){
   position++;
   elem.style.top = position + 'px';
   elem.style.left = position + 'px';

   if(position  < 300){
       requestAnimationFrame(myAnimation);
   }

}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));*/

//  let id = requestAnimationFrame(myAnimation);
//   cancelAnimationFrame(id);



// function showMsg() {
//     console.log('done');

// }


// function move(length, callback) {

//     const box = document.querySelector('.box');
//     let position = 0;
//     const interval = setInterval(frame, 10);

//     function frame() {
//         if (position == length) {
//             callback();
//             clearInterval(interval);
//         } else {
//             position += 1;
//             box.style.top = position + 'px';
//             box.style.left = position + 'px';
//         }
//     }
// }

// move(300, showMsg);

const box = document.querySelector('.box');

function showMsg(){
    console.log('done');
    clearInterval(interval);
}

let position = 0;

function move(length, callback){
    
position+= 1;
if(position <= length){
    box.style.left = position + 'px';
}else{
    callback();
}
}

const interval = setInterval(() => move(300, showMsg), 10);