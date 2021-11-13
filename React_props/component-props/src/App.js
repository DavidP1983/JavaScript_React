import { Component } from 'react';
import styled from 'styled-components';
import './App.css';
// import './app.scss';


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

const EmpItem = styled.div`
padding: 20px;
margin-bottom: 50px;
border-radius: 5px;
box-shadow: 5px 5px 10px rgba(0,0,0, .2);
background-color: white;
a {
display: block;
margin: 10px 0 10px 0;
color: ${props => props.active ? 'orange' : '#80ffe5'};
}
input {
  display: bplock;
  outline: dotted;
}
`;

const Header = styled.h2`
font-size: 22px;
`;

export const Button = styled.button`
display: block;
padding: 5px 15px;
background-color: gold;
border: 1px solid rgba(0,0,0, .2);
box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;

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

    console.log(this);
    
    return (
      <EmpItem active>

        {/* <button onClick={() => this.nextYear()}>{text}</button> */}

        <Button onClick={this.nextYear}>{text}</Button>

         <Header>My name is {name.firstName}, surname - {surname}, 
         age - {this.state.years}, 
         position - {this.state.position}</Header>

         <a href={link}>My profile</a>
         <h2 style={{fontSize: 30, color: 'red', transition:'all', WebkitTransition:'all', msTransition:'all'}}>My learning language is {nameFun()}</h2>

         <form className="add-form">
            <span>Введите текст</span>
            <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />   
        </form>     
     </EmpItem>
    )
  }
}

const Wrapper = styled.div`
padding:20px 0;
margin: 0 auto;
width: 600px;
font-style: italic;
`;

function App() {
  return (
    <Wrapper>
        <WhoAmI name={{firstName: 'John'}} surname='Smith' link='facebook.com' nameFun={() => {return 'React'}}/>
        <WhoAmI name={{firstName: 'Alex'}} surname='Sheva' link='vk.com' nameFun={() => {return 'Node.js'}}/>
    </Wrapper>
  );
}

export default App;
