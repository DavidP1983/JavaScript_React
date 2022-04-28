import { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
// import { bindActionCreators } from "redux";

// const Counter = ({counter, inc, dec, rnd}) => {
//     return (
//         <div className='jumbotron'>
//         <h1>{counter}</h1>
//         <button onClick={inc} className='btn btn-primary'>DEC</button>
//         <button onClick={dec} className='btn btn-primary'>INC</button>
//         <button onClick={rnd} className='btn btn-primary'>RND</button>
//       </div>
//     )
// }


class Counter extends Component {
  render() {
    const {counter, inc, dec, rnd} = this.props;
    return (
      <div className='jumbotron'>
           <h1>{counter}</h1>
           <button onClick={inc} className='btn btn-primary'>DEC</button>
           <button onClick={dec} className='btn btn-primary'>INC</button>
           <button onClick={rnd} className='btn btn-primary'>RND</button>
         </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.value
  }
}

// const mapDispatchToProps = (dispatch) => {
//   const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
//   return {
//     inc: inc,
//     dec: dec,
//     rnd: () => {
//       const value = Math.floor(Math.random() * 10);
//       rnd(value)
//     }
//   }
// }



// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
  
// }

export default connect(mapStateToProps, actions)(Counter);