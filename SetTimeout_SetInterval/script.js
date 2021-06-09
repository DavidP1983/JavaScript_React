//1. Step

// const timer = setTimeout(function(){
// console.log("Hello");
// },2000);


//2.Step

// const timer = setTimeout(function(text){
//     console.log(text);
//     },2000, 'Hello');


//3. Step

// const btn = document.querySelector('.btn');
// let timer,
//     count = 0;

// btn.addEventListener('click', () =>{
//     timer = setInterval(loader, 500);
// });


// function loader(){
//     if(count == 3){
//         clearInterval(timer);
//     }

//     console.log('Same Text');
//     count++;
// }

// 4. Step

// let id  = setTimeout(function log(){
// console.log("Hello");
// id = setTimeout(log, 500);
// },2000);


//5. Step Animation
const btn = document.querySelector('.btn');

    function myAnimation(){
        const elem = document.querySelector('.box');
        let position = 0;


        const interval = setInterval(frame, 10); 

        function frame() {
            if(position == 300){
                clearInterval(interval);
            }else{
                position++;
                elem.style.top = position + "px";
                elem.style.left = position + "px";

            }
        }

    }


    btn.addEventListener('click', myAnimation);