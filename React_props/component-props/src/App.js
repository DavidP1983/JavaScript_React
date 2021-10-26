import { Component } from 'react';
import './App.css';


// function WhoAmI({name,nameFun, surname, link}) {
//   return (
//     <div>
//       <h1>My name is {name.firstName}, surname - {surname}</h1>
//       <a href={link}>My profile</a>
//       <h2>My learning language is {nameFun()}</h2>   
//     </div>
//   )
// }

                                // Class Components

class WhoAmI extends Component{
  constructor(props) {
    super(props);
      this.state = {
        years: 27,
        text: "Change Years"
      }
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  render(){
    const{name, surname, link,nameFun} = this.props;
    const{text} = this.state
    return (
      <div>
        <button onClick={this.nextYear}>{text}</button>
         <h1>My name is {name.firstName}, surname - {surname}, age - {this.state.years}</h1>
         <a href={link}>My profile</a>
         <h2>My learning language is {nameFun()}</h2>   
     </div>
    )
  }
}


function App() {
  return (
    <div className="App">
        <WhoAmI name={{firstName: 'John'}} surname='Smith' link='facebook.com' nameFun={() => {return 'React'}}/>
        <WhoAmI name={{firstName: 'Alex'}} surname='Sheva' link='vk.com' nameFun={() => {return 'Node.js'}}/>
    </div>
  );
}

export default App;
