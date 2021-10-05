import React, {Component} from 'react';
import styled from 'styled-components';
import gotService from '../../servises/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import './randomChar.css';

const RandomBlock = styled.div`
background-color: #fff;
padding: 25px 25px 15px 25px;
margin-bottom: 40px;
h4{
    margin-bottom: 20px;
    text-align: center;
 
}
`
const Term = styled.span`
font-weight: bold;
`

export default class RandomChar extends Component {
    
    // constructor(){
    //     super();
    //     // this.updateChar();
    //     //  this.timerID = setInterval(this.updateChar, 1500);
    //     // clearInterval(this.timerID);
    //     console.log('constructor');

    // }

    gotService = new gotService();

    state = {
        char: {},
        loading: true,
        error: false,
       
    }

    componentDidMount() {
        // console.log('mount');
        this.updateChar();
        this.timerID = setInterval(this.updateChar, 3000);
    }

    componentWillUnmount(){
        // console.log('Unmount');
        clearInterval(this.timerID);
    }

    onCharLoaded = (char) => { 
        
        this.setState({ char, loading: false }); 
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    }

    updateChar = () => {
        // console.log('update');
       const id = Math.floor(Math.random()*140 +25); 
       this.gotService.getCharacter(id)
           .then(this.onCharLoaded)
           .catch(this.onError)
    }

    render() {
        console.log('render');
        const {char , loading, error} = this.state;
        const {className} = this.props
       
        // if(loading){
        //     return <Spinner/>
        // }
        const errorMessage = error ? <ErrorMessage/> : null; 
        const spinner = loading ? <Spinner/> : null;
        // const content = !loading ? <View char={char}/>: null;

        // const content = loading ? <Spinner/> :  <View char={char}/>;
        const content = !(loading || error) ? <View char={char}/> : null;
            

        return (
            <RandomBlock className={className}>

                {errorMessage}
                {spinner}
                {content}
                

                {/* <View char={char}/> */}
                {/* <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <Term className="term">Gender </Term>
                        <span style={{color: gender === 'NO DATA' ? 'red' : 'black'}}>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term className="term">Born </Term>
                        <span style={{color: born === 'NO DATA' ? 'red' : 'black'}}>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term className="term">Died </Term>
                        <span style={{color: died === 'NO DATA' ? 'red' : 'black'}}>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term className="term">Culture </Term>
                        <span style={{color: culture === 'NO DATA' ? 'red' : 'black'}}>{culture}</span>
                    </li>
                </ul> */}
            </RandomBlock>
        );
    }
}


const View = ({char}) => {
    const{name, gender, born, died, culture} = char;
    return (
        <>
        <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <Term className="term">Gender </Term>
                        <span style={{color: gender === 'NO DATA' ? 'red' : 'black'}}>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term className="term">Born </Term>
                        <span style={{color: born === 'NO DATA' ? 'red' : 'black'}}>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term className="term">Died </Term>
                        <span style={{color: died === 'NO DATA' ? 'red' : 'black'}}>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term className="term">Culture </Term>
                        <span style={{color: culture === 'NO DATA' ? 'red' : 'black'}}>{culture}</span>
                    </li>
                </ul> 
        </>
    )
}