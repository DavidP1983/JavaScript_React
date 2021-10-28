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
        text: "Change Years",
        position: ''
      }
      // this.nextYear = this.nextYear.bind(this);
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  // nextYear () {
  //     this.setState(state => ({
  //       years: state.years + 1
  //     }))
  //   }


  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value
    })
  }

  render(){
    const{name, surname, link,nameFun} = this.props;
    const{text} = this.state

    // console.log(this);
    
    return (
      <div>

        {/* <button onClick={() => this.nextYear()}>{text}</button> */}

        <button onClick={this.nextYear}>{text}</button>
         <h1>My name is {name.firstName}, surname - {surname}, 
         age - {this.state.years}, 
         position - {this.state.position}</h1>

         <a href={link}>My profile</a>
         <h2>My learning language is {nameFun()}</h2>

         <form>
            <span>Введите текст</span>
            <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />   
        </form>     
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
