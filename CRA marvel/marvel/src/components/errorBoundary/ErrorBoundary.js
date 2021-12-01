import { Component } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

class ErrorBoundary extends Component {
    
    state = {
        error: false
    }

    // static getDerivedStateFromError(error) {
    //     return {error: true};
    // }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({error: true})
    }

    render() {

        if(this.state.error) {
            return <h2><ErrorMessage></ErrorMessage>Something went wrong</h2> 
           
            
        }

        return this.props.children;
    }
}

export default ErrorBoundary;