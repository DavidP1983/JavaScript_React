import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const elem = (
//   <div>
//     <h2>Hello World</h2>
//     <input type="text" placeholder ="Type here"/>
//     <button/>
//   </div>
// )

const Header = () => {
  return <h2>Hello World</h2>
}

const Input = () => {
  const holder = "Enter here";
  const styleField = {
    width: '300px'
  }
  return <input 
          style = {styleField}
          type="text" 
          placeholder ={holder}
          autoComplete=""
          className="first" />
}

const Button = () => {
  const text = "Log in";
  const logged = false;
  // const res = () => {
  //   return 'Log in, please'
  // }
  // const p = <p>Log out</p>
  return <button>{logged ? null: text}</button> 
}

const App = () => {
  return (
    <div>
        <Header/>
        <Input/>
        <Button/>
    </div>
  )
}

ReactDOM.render(  
   <App/>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
