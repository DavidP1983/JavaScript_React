import React from "react";
import './errorMessage.css';
 import img from './got.jpeg';

const  ErrorMessage = () => {
    return (
        <React.Fragment>

        <img src={img} alt='error'></img>
        <span>Something went wrong</span>

        </React.Fragment>
    ) 
}

export default ErrorMessage;