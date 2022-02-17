import { Component, useState, useEffect, useCallback, useMemo, useRef, memo, PureComponent, createContext, useContext, useReducer } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';




// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     componentDidMount() {
//       document.title = `Slide: ${this.state.slide}`;
//     }

//     componentDidUpdate() {
//       document.title = `Slide: ${this.state.slide}`;
//     }


//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }
//-----Hook useState-----//

// const calcValue = () => {
//   console.log('random');
//   return Math.random() * (50 -1) + 1;
// }

/*const Slider = (props) => {

// const slideStateArray = useState();
// console.log(slideStateArray);

// const [slide, setSlide] = useState(calcValue);

const [slide, setSlide] = useState(0);
const [autoplay, setAutoplay] = useState(false); 


                                //without callBack

// function changeSlide(i) {
//   setSlide(slide + i)
// }

// function toggleAutoplay() {
//   setAutoplay(!autoplay);
// }


                                  //CallBack

function changeSlide(i) {
  setSlide(slide => slide + i)
}

function toggleAutoplay() {
  setAutoplay(autoplay => !autoplay);
}


                                //useState object

// const [state, setState] = useState({slide: 0, autoplay: false});


// function changeSlide(i) {
//   setState(state => ({...state, slide: state.slide + i}));
// }

// function toggleAutoplay() {
//   setState(state => ({...state, autoplay: !state.autoplay}));
// }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br/>  {autoplay ? 'auto' : null}</div>
                /* <div className="text-center mt-5">Active slide {state.slide} <br/>  {state.autoplay ? 'auto' : null}</div> */

//                 <div className="buttons mt-3">
//                     <button 
//                         className="btn btn-primary me-2"
//                         onClick={() => changeSlide(-1)}>-1</button>
//                     <button 
//                         className="btn btn-primary me-2"
//                         onClick={() => changeSlide(1)}>+1</button>
//                     <button 
//                         className="btn btn-primary me-2"
//                         onClick={toggleAutoplay}>toggle autoplay</button>
//                 </div>
//             </div>
//         </Container>
//     )
// }




//-----Hook useEffect-----//

const countTotal = (num) => {
  console.log("counting...");
  return num + 10;
}


const Slider = (props) => {



  const [slide, setSlide] = useState(0);

  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    // console.log('effect');
    document.title = `Slide: ${slide}`;
  }, []);

  function loggin() {
    console.log('log');
  }

  useEffect(() => {
    // console.log('effect update');
    document.title = `Slide: ${slide}`;

    window.addEventListener('click', loggin);

    return () => {
      console.log('umount');
      window.removeEventListener('click', loggin);
    }

  }, [slide]);


  useEffect(() => {
    // console.log('autoplay');
  }, [autoplay]);

  // useEffect(() => {
  //   console.log('slide');
  // }, [slide]);




  function changeSlide(i) {
    setSlide(slide => slide + i)
  }

  function toggleAutoplay() {
    setAutoplay(autoplay => !autoplay);
  }



  //----Hook useCallback----//

  const getSomeImages = useCallback(() => {
    console.log('fetching');
    return ['https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
      'https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/16:9/w_3999,h_2249,c_limit/MtFuji-GettyImages-959111140.jpg'];
  }, [slide]);


  //----Hook useMemo----//

  const total = useMemo(() => {
    return countTotal(slide);
  }, [slide]);

  const style = useMemo(() => ({ color: slide > 4 ? 'red' : 'black' }), [slide]);


  useEffect(() => {
    console.log('styles');
  }, [style]);

  return (
    <Container>
      <div className="slider w-50 m-auto">
        {/* <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" /> */}

        {/* {getSomeImages().map((url, i) => {
                    return (
                      <img key={i} className="d-block w-100" src={url} alt="slide" />

                    )
                  })
                  
                  } */}

        <Slide getSomeImages={getSomeImages} />

        <div className="text-center mt-5">Active slide {slide} <br />  {autoplay ? 'auto' : null}</div>
        <div style={style} className="text-center mt-5">Total slides: {total}</div>

        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}>-1</button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}>+1</button>
          <button
            className="btn btn-primary me-2"
            onClick={toggleAutoplay}>toggle autoplay</button>
        </div>
      </div>
    </Container>
  )
}


const Slide = ({ getSomeImages }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(getSomeImages());
  }, [getSomeImages])

  return (
    <>
      {images.map((url, i) => <img key={i} className="d-block w-100" src={url} alt="slide" />)}
    </>
  )
}



//-----Hook useRef-----//


const Form = () => {

  const [text, setText] = useState('');

  // const myRef = useRef(null);

  const myRef = useRef(1);

  // const focusFirstTI = () => {
  //     myRef. .focus();
  // }

  useEffect(() => {
    // myRef.current++;
    // console.log(myRef.current);
    myRef.current = text;
  })

  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input /*ref={myRef}*/ onChange={(e) => setText(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea  /*onClick={focusFirstTI} onClick={myRef.current++}*/ value={myRef.current} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
    </Container>
  )
}






//-----Our own Hooks-----//


function useInputWithValidate(sameValue) {

  const [value, setValue] = useState(sameValue);

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const validateInput = () => {
    return value.search(/\d/) >= 0

  }

  return { value, onChange, validateInput }
}



const Form2 = () => {
  // const [text, setText] = useState('');
  // const [textArea, setTextArea] = useState('');

  // const validateInput = (arg) => {
  //   return arg.search(/\d/) >= 0

  // }

  const input = useInputWithValidate('');
  const textArea = useInputWithValidate('');

  const color = input.validateInput() ? 'text-danger' : null;

  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <input value={`${input.value} / ${textArea.value}`} type="text" className="form-control" readOnly />
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
          <input onChange={input.onChange}
            type="email"
            value={input.value}
            className={`form-control ${color}`}
            id="exampleFormControlInput1"
            placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={textArea.value}
            onChange={textArea.onChange}
          >
          </textarea>
        </div>
      </form>
    </Container>
  )
}


//--- React.memo ---//

// function propsCompare(prevProps, nextProps) {
//  return prevProps.mail.name === nextProps.mail.name && prevProps.text === nextProps.text
// }

const Form3 = memo((props) => {
  console.log("redner");
  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
          <input value={props.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
    </Container>
  )
});


// --- React.PureComponent ---//

// class Form4 extends Component {

//   shouldComponentUpdate(nextProps) {
//     if(this.props.mail.name === nextProps.mail.name) {
//       return false
//     } return true
//   }

//   render() {
//     console.log('render');
//   return (
//     <Container>

//       <form className="w-50 border mt-5 p-3 m-auto">
//           <div className="mb-3">
//               <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
//               <input value={this.props.mail.name} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/>
//               </div>
//               <div className="mb-3">
//               <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//               <textarea value={this.props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//           </div>
//       </form>

//  </Container>
//   )

//   }
// }







//--- Context and useContext ---//

const dataContext = createContext({
  mail: "name@example.com",
  text: "some text"
});

const { Provider, Consumer } = dataContext;

const Form5 = (props) => {
  console.log("redner");
  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
          <InputComponent />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
    </Container>
  )
};

// class InputComponent extends Component {
//   render() {
//     return (
//       <Consumer>
//         {
//           value => {
//             return (
//               <input value={value.mail} 
//               type="email" 
//               className='form-control' 
//               id="exampleFormControlInput1" 
//               placeholder="name@example.com"/>

//             )
//           }
//         }
//       </Consumer>
//     )
//   }
// }


// class InputComponent extends Component {

// static contextType = dataContext;

//     render() {

//               return (
//                 <input value={this.context.mail} 
//                 type="email" 
//                 className='form-control' 
//                 id="exampleFormControlInput1" 
//                 placeholder="name@example.com"/>

//               )

//           }
//   }

// InputComponent.contextType = dataContext;



const InputComponent = () => {

  const context = useContext(dataContext);
  return (
    <input value={context.mail}
      type="email"
      className='form-control'
      id="exampleFormControlInput1"
      placeholder="name@example.com"
      onFocus={context.forceChangeMail} />

  )
}



// --- useReducer --- //

function reducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return {autoplay: !state.autoplay}
    case 'slow':
      return {autoplay: 300}
    case 'fast': 
      return {autoplay: 700}
    case 'customValue': 
      return {autoplay: action.payLoad}
    default: 
      throw new Error();
  }
}

const Slider1 = () => {
  const [slide, setSlide] = useState(0);
  // const [autoplay, setAutoplay] = useState(false);
  const [autoplay, dispatch] = useReducer(reducer, {autoplay: false});


  function changeSlide(i) {
    setSlide(slide => slide + i);
  }

  return (
    <Container>
      <div className="slider w-50 m-auto">
        <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
        <div className="text-center mt-5">Active slide {slide} <br />{autoplay.autoplay ? 'auto' : null} </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}>-1</button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}>+1</button>
          <button
            className="btn btn-primary me-2"
            onClick={() => dispatch({type: 'toggle'})}>toggle autoplay</button>
          <button
            className="btn btn-primary me-2"
            onClick={() => dispatch({type: 'slow'})}>slow autoplay</button>
          <button
            className="btn btn-primary me-2"
            onClick={() => dispatch({type: 'fast'})}>faste autoplay</button>
            <button
            className="btn btn-primary me-2"
            onClick={(e) => dispatch({type: 'customValue', payLoad: +(e.target.textContent)})}>1000</button>
        </div>
      </div>
    </Container>
  )
}






function App() {
  const [slider, setSlider] = useState(true); // for useRef

  const [data, setData] = useState({         //React.memo
    mail: "name@example.com",
    text: "some text",
    forceChangeMail: forceChangeMail
  });

  const onLog = useCallback(() => {
    console.log('wow');
  }, []);


  function forceChangeMail() {
    setData({ ...data, mail: "text@gmail.com" });
  }

  return (
    <>
      <button onClick={() => setSlider(false)}>Click</button>
      {slider ? <Slider /> : null}

      <Form />
      <Form2 />

      <Form3 mail={data.mail} text={data.text}  /*onLog={() => console.log('wow')}*/ onLog={onLog} />
      <button onClick={() => setData({
        mail: "name@example.com",
        text: "some text"
      })}>
        Click me
      </button>

      {/* <Form4 mail={data.mail} text={data.text}/>
      <button onClick={() => setData({
        mail: {name: "name@example.com"},
        text: "some text"
      })}>
        Click me
      </button> */}

      <Provider value={data}>

        <Form5 text={data.text} />
        <button onClick={() => setData({
          ...data,
          mail: "second@example.com",
          text: "another text"
        })}>Click me</button>

      </Provider>

      <Slider1/>
    </>
  );
}

export default App;
