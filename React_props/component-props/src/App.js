import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';
import styled from 'styled-components';
import BootstrapTest from './bootstrapTest';
import {Container} from 'react-bootstrap';
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

class WhoAmI extends Component {
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

  render() {
    const { name, surname, link, nameFun } = this.props;
    const { text } = this.state

    console.log(this);

    return (
      <EmpItem active>

        {/* <button onClick={() => this.nextYear()}>{text}</button> */}

        <Button onClick={this.nextYear}>{text}</Button>

        <Header>My name is {name.firstName}, surname - {surname},
          age - {this.state.years},
          position - {this.state.position}</Header>

        <a href={link}>My profile</a>
        <h2 style={{ fontSize: 30, color: 'red', transition: 'all', WebkitTransition: 'all', msTransition: 'all' }}>My learning language is {nameFun()}</h2>

        <form className="add-form">
          <span>?????????????? ??????????</span>
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


                                                          //props.children

// const DynamicGreating = (props) => {
//     return (
//       <div className={'mb-3 p-3 border border-' + props.color}>
//         {props.children}
//       </div>
//     )
// }

const DynamicGreating = (props) => {
  return (
    <div className={'mb-3 p-3 border border-' + props.color}>
      {
        React.Children.map(props.children, child => {
          return React.cloneElement(child, { className: 'shadow p-3 m-3 border rounded' })
        })

      }

    </div>
  )
}

                                                  //inharitance & composition

const HelloGreating = () => {
  return (

    <div style={{ 'width': '500px', 'margin': '0 auto' }}>
      <DynamicGreating color={'primary'}>
        <h2>Hello React</h2>
      </DynamicGreating>
    </div>

  )
}

                                                        // Render - Props

const Message = (props) => {
  return (
    <h2>The counter is {props.counter}</h2>
  )
}


class Counter extends Component {
  state = {
    counter: 0
  }

  changeCounter = () => {
    this.setState(({counter}) => ({
      counter: counter + 1
    }))
  }

  render() {
    return (
      <>
      <button 
      className="btn btn-primary"
      onClick={this.changeCounter}>
          Click me
      </button>
      {this.props.render(this.state.counter)}
      </>
    )
  }
}




                                                                // Ref

class Form extends Component {
  
    //  myref = React.createRef();
    //  mySecondref = React.createRef();


    // componentDidMount() {
    // // this.myref.current.focus();  
    // // this.myref.current.doSmth();  
    // // this.myref.focus();  
    // }

    // focusSecond = () => {
    //   this.myref.current.focus();
    // }


    setInputRef = elem => {
      this.myref = elem;
      if(this.myref){
        this.myref.focus();
        console.log('true');
      }
      console.dir(this.myref);
    }

    //  focusSecond = () => {
    //    if(this.myref) {
    //     this.myref.focus();
    //    }
    
    // }

  render() {
      return (
          <Container>
              <form className="w-50 border mt-5 p-3 m-auto">
                  <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                      <input /*ref={this.myref}*/  ref={this.setInputRef} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>

                        {/* <TextInput ref={this.myref}/> */}

                  </div>
                  <div className="mb-3">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                      <textarea onClick={this.focusSecond} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
              </form>
          </Container>
      )
  }
}


// class TextInput extends Component {

//   doSmth = () => {
//     console.log('Welcome');
//   }

//   render() {
//     return (
//       <input type="email" 
//     className="form-control" 
//     id="exampleFormControlInput1"
//     placeholder="name@example.com"/>

//     )

//   }
// }






                                                            // Portals


class Form2 extends Component {


state = {
  advOpen: false
}

componentDidMount() {
  setTimeout(this.handleClick, 3000);
}

  handleClick = () => {
    console.log('click');
    this.setState(({advOpen}) => ({
      advOpen: !advOpen
    }))
  }


  render() {
      return (
          <Container>
              <form 
              onClick={this.handleClick}
              className="w-50 border mt-5 p-3 m-auto" 
              style={{'overflow': 'hidden', 
                      'position': 'relative'}}>
                  <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                      <input  type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                  </div>
                  <div className="mb-3">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>

                {/* <Portal>
                   <Msg/>
                </Portal> */}

                {this.state.advOpen ? 
                    <Portal>
                       <Msg/>
                    </Portal> : null
                    }
                    
              </form>
          </Container>
      )
  }
}     


const Portal = (props) => {

  const node = document.createElement('div');
  document.body.appendChild(node);

  return ReactDOM.createPortal(props.children, node);
}

const Msg = () => {
  return (
    <div 
      style={{'width': '200px', 
            'height': '150px', 
            'backgroundColor': 'red', 
            'position': 'absolute', 
            'right': '0', 
            'bottom': '0'}}>
        Hello
    </div>
  )
}


function App() {
  return (
    <Wrapper>

    <Form2/>

    <Form/>

   

    <Counter render={counter => (
      <Message counter={counter}/>
    )}/>

      <HelloGreating />

      <DynamicGreating color={'primary'}>
        <h2>My React</h2>
        <h2>Hello world</h2>
      </DynamicGreating>


      <BootstrapTest

        left={
          <DynamicGreating color={'primary'}>
            <h2>It's me</h2>
            <h2>Hello </h2>
          </DynamicGreating>
        }

        right={
          <DynamicGreating color={'primary'}>
            <h2>Hey</h2>
            <h2>Who are you</h2>
          </DynamicGreating>
        }

      />

      <WhoAmI name={{ firstName: 'John' }} surname='Smith' link='facebook.com' nameFun={() => { return 'React' }} />
      <WhoAmI name={{ firstName: 'Alex' }} surname='Sheva' link='vk.com' nameFun={() => { return 'Node.js' }} />
    </Wrapper>
  );
}

export default App;
