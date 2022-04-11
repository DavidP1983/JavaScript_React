import React from 'react';
//deprecated
// import  ReactDOM  from 'react-dom';
import { createRoot } from 'react-dom/client';
import {createStore} from 'redux';


const initialState = {value: 0};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INC':
      return {
        ...state,
        value: state.value + 1
      };
    case 'DEC':
      return {
        ...state,
        value: state.value - 1
      };
    case 'RND':
        return{
          ...state,
          value: state.value * action.payload
        };
    default:
        return state;
  }
  
}

const store = createStore(reducer);

const update = () => {
  document.getElementById('counter').textContent = store.getState().value;
}

store.subscribe(update);

// const inc = () => {
//   return {type: 'INC'}
// }

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});  
const rnd = (value) => ({type: 'RND', payload: value});  

// store.subscribe(() => {
//   // console.log(store.getState());

// })

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());

});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());

});

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch(rnd(value));

});

// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});




// let state = reducer(initialState, {type: 'INC'});
//     state = reducer(state, {type: 'INC'});
//     state = reducer(state, {type: 'INC'});
//     state = reducer(state, {type: 'INC'});

// console.log(state);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
     <>

     </>
   </React.StrictMode>
)

//  ReactDOM .render(
//   <React.StrictMode>
//     <>

//     </>
//   </React.StrictMode>,
//   document.getElementById('root')
// );



