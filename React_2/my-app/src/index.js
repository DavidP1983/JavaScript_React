import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

/* const elem = (
  <div>
    <h2>Hello World</h2>
    <input type="text" placeholder ="Type here"/>
    <button/>
  </div>
)

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
); */
//--------------------------------------------------------//

/*function WhoAmI(props) {
  return (
    <>
      <h1> My name is {props.name}, surname - {props.surname}</h1>
      <a href={props.link}>My profile</a>
    </>
  )
}*/

/*function WhoAmI({name,surname,link}) {
  return (
    <>
      <h1> My name is {name}, surname - {surname}</h1>
      <a href={link}>My profile</a>
    </>
  )
}


ReactDOM.render(  
   <WhoAmI name='john' surname='Smith' link='facebook.com'/>,
  document.getElementById('root')
); */

/*function WhoAmI({name,surname,link}) {
  return (
    <>
      <h1> My name is {name}, surname - {surname}</h1>
      <a href={link}>My profile</a>
    </>
  )
}

const All = () => {
  return(
    <>
        <WhoAmI name='john' surname='Smith' link='facebook.com'/>
        <WhoAmI name='David' surname='Piruz' link='vk.com'/>
        <WhoAmI name='Ivan' surname='Shepa' link='facebook.com'/>
    </>
  )
}*/

// class WhoAmI extends Component {
//   // constructor(props){
//   //   super(props);
//   //   this.state = {
//   //     years: 26
//   //   }
//   //   // this.nextYear = this.nextYear.bind(this);
//   //   // this.nextYear = () => {
//   //   //   this.setState(state =>({
//   //   //     years: ++state.years
//   //   //   }))
//   //   // }
//   // }
 
// state = {
//   years: 26
// }

//   nextYear = () => {
//       this.setState(state =>({
//         years: ++state.years
//       }))
//     }
//   // nextYear(){
//   //   console.log(1);
//   //   // this.setState({
//   //   //   years:27
//   //   // })
//   //   this.setState(state =>( {
//   //     years: ++state.years
//   //   }))
//   // }
//   render(){
//     const{name,surname,link} = this.props;
//     const{years} = this.state;
//     return (
//       <>
//       <button onClick={this.nextYear}>++</button>
//         <h1> My name is {name}, 
//         surname - {surname}, 
//         {/* years = {this.state.years} */}
//         years = {years}
//         </h1>
//         <a href={link}>My profile</a>
//       </>
//     )
//   }
// }

// // function WhoAmI({name,surname,link}) {
// //   return (
// //     <>
// //       <h1> My name is {name}, surname - {surname}</h1>
// //       <a href={link}>My profile</a>
// //     </>
// //   )
// // }

// const All = () => {
//   return(
//     <>
//         <WhoAmI name='john' surname='Smith' link='facebook.com'/>
//         <WhoAmI name='David' surname='Piruz' link='vk.com'/>
//         <WhoAmI name='Ivan' surname='Shepa' link='facebook.com'/>
//     </>
//   )
// }

class GuesModel extends Component{
  constructor(props){
    super(props);
    this.state = {
      order: 0
    }
   
  }

  Order = () =>{
    this.setState(item => ({
      order: ++item.order
    }))
  }
  
  render(){
    const{name, type, country} = this.props;
    const{order} = this.state;
    return (
      <>
      <h1>Model name is {name}, my type is {type}</h1>
      <p> Located country is {country}</p>
      <button onClick={this.Order}>Order</button>
      <p>Order's quantity: {order}</p>
    </>
    )
  }
}


const All = ()=> {
  return (
    <>
    <GuesModel name='Boieng' type="777-300ER" country='USA' />
    <GuesModel name='Airbus' type="A350-900" country='EUR' />
    <GuesModel name='Bombardie' type="SRJ-900" country='CAN' />
    </>
  )
}

ReactDOM.render(  
  <All/>,
 document.getElementById('root'));



 