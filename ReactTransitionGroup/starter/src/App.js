// import { useState } from 'react';
// import { Container } from 'react-bootstrap';
// import { Transition } from 'react-transition-group';
// import './App.css';



// // ----- Transition ----- //

// const Modal = (props) => {


//   const duration = 300;

//   const defaultStyle = {
//     transition: `opacity visbility ${duration}ms ease-in-out`,
//     opacity: 0,
//     visibility: 'hidden'
//   }

//   const transitionStyles = {
//     entering: { opacity: 1, visibility: 'visible' },
//     entered: { opacity: 1, visibility: 'visible' },
//     exiting: { opacity: 0, visibility: 'hidden' },
//     exited: { opacity: 0, visibility: 'hidden' },
//   };

//   return (
//     <Transition 
//     in={props.show} 
//     timeout={duration} 
//     unmountOnExit
//     onEnter={() => props.setShowTrigger(false)}
//     onExited={() => props.setShowTrigger(true)}>
//       {state => (
//         <div className="modal mt-5 d-block"
//               style={{
//                 ...defaultStyle,
//                 ...transitionStyles[state]
//               }}>
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Typical modal window</h5>
//                 <button onClick={() => props.onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
//               </div>
//               <div className="modal-body">
//                 <p>Modal body content</p>
//               </div>
//               <div className="modal-footer">
//                 <button onClick={() => props.onClose(false)} type="button" className="btn btn-secondary">Close</button>
//                 <button onClick={() => props.onClose(false)} type="button" className="btn btn-primary">Save changes</button>
//               </div>
//             </div>
//           </div>
//         </div>

//       )}
//     </Transition>

//   )
// }

// function App() {
//   const [showModal, setShowModal] = useState(false);
//   const [showTrigger, setShowTrigger] = useState(true);

//   return (
//     <Container>
//       <Modal show={showModal} onClose={setShowModal} setShowTrigger={setShowTrigger}/>
//      {showTrigger ? 
//       <button
//       type="button"
//       className="btn btn-warning mt-5"
//       onClick={() => setShowModal(true)}>Open Modal</button>
//     : null}
//     </Container>
//   );
// }

// export default App;




// import { useState } from 'react';
// import { Container } from 'react-bootstrap';
// import { CSSTransition } from 'react-transition-group';
// import './App.css';



// // ----- CssTransition ----- //

// const Modal = (props) => {


//   const duration = 1000;

 

//   return (
//     <CSSTransition 
//     in={props.show} 
//     timeout={duration} 
//     onEnter={() => props.setShowTrigger(false)}
//     onExited={() => props.setShowTrigger(true)}
//     classNames="modal"
//     mountOnEnter
//     unmountOnExit>
    
//         <div className="modal mt-5 d-block">
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Typical modal window</h5>
//                 <button onClick={() => props.onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
//               </div>
//               <div className="modal-body">
//                 <p>Modal body content</p>
//               </div>
//               <div className="modal-footer">
//                 <button onClick={() => props.onClose(false)} type="button" className="btn btn-secondary">Close</button>
//                 <button onClick={() => props.onClose(false)} type="button" className="btn btn-primary">Save changes</button>
//               </div>
//             </div>
//           </div>
//         </div>

//     </CSSTransition>

//   )
// }

// function App() {
//   const [showModal, setShowModal] = useState(false);
//   const [showTrigger, setShowTrigger] = useState(true);

//   return (
//     <Container>
//       <Modal show={showModal} onClose={setShowModal} setShowTrigger={setShowTrigger}/>
//      {showTrigger ? 
//       <button
//       type="button"
//       className="btn btn-warning mt-5"
//       onClick={() => setShowModal(true)}>Open Modal</button>
//     : null}
//     </Container>
//   );
// }

// export default App;




// React-Transition-Group with HOC


import { useState, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import { Transition } from 'react-transition-group';
import './App.css';



const withReactTransition = (Components) => {
  return(props) => {
    const duration = 1000;

      const defaultStyle = {
        transition: `all ${duration}ms ease-in-out`,
        opacity: props.show ? 1 : 0,
        visibility: props.show ? 'visibile' : 'hidden'
      }

      const transitionStyles = {
        entering: { opacity: 1, visibility: 'visible' },
        entered: { opacity: 1, visibility: 'visible' },
        exiting: { opacity: 0, visibility: 'hidden' },
        exited: { opacity: 0, visibility: 'hidden' },
      };
      return (
        <Transition
        in={props.show} 
        timeout={duration}>

          {state => (
            <Components
        {...props}
          newStyle={{...defaultStyle, ...transitionStyles[state]}}/>
          )}
        </Transition>
      )
  }
}


const Modal = (props) => {

  const onSwitch = () => {
    props.onClose(false)
    props.setShowTrigger(true)
  }

  return (

        <div className="modal mt-5 d-block"
              style={props.newStyle}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Typical modal window</h5>
                <button onClick={onSwitch} type="button" className="btn-close" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>Modal body content</p>
              </div>
              <div className="modal-footer">
                <button onClick={onSwitch} type="button" className="btn btn-secondary">Close</button>
                <button onClick={onSwitch} type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
  )
}


const Button = (props) => {
  
const onSwitch = () => {
  props.setShowModal(true)
  props.setShowTrigger(false)
}

  return (
    <div  className='col-md-12 text-center'>
      <button
      style={props.newStyle}
      type="button"
      className="btn btn-warning mt-5 py-auto"
      onClick={onSwitch}>Open Modal</button>
    </div>
    
  )
}



function App() {
  const [showModal, setShowModal] = useState(false);
  const [showTrigger, setShowTrigger] = useState(true);

  const ModalButtonwithTransition = useCallback(withReactTransition(Button), []);
  const ShowModalwithTransition = useCallback(withReactTransition(Modal), []);


  return (
    <Container>
      <ShowModalwithTransition show={showModal} onClose={setShowModal} setShowTrigger={setShowTrigger}/>
     <ModalButtonwithTransition   show={showTrigger} setShowModal={setShowModal} setShowTrigger={setShowTrigger}/>
    </Container>
  );
}

export default App;