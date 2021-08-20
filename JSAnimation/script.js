 /*const btn = document.querySelector('.btn');


 function myAnimation(){
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

 const btn  = document.querySelector('.btn'),
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

 btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

//  let id = requestAnimationFrame(myAnimation);
//   cancelAnimationFrame(id);