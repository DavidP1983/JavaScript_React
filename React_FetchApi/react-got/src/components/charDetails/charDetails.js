import React, {Component} from 'react';
import './charDetails.css';
// import gotService from '../../servises/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

import styled from 'styled-components';

const CharDetailsHeader = styled.div`
background-color: #fff;
padding: 25px 25px 15px 25px;
margin-top: 10px;
h4{
    margin-bottom: 20px;
    text-align: center;
}
.term{
    font-weight: bold
}
`
const Field = ({charDetails, field, label}) => {
return (
    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">{label}</span>
                        <span>{charDetails[field]}</span>
                    </li>
)
}

export {Field}

export default class CharDetails extends Component {

    // gotService = new gotService();

    state = { 
        
        charDetails: null,
        loading: true,
        error: false
        
    }

    componentDidMount(){
        this.updateChar();
    }

    componentDidUpdate(prevProps){
       if(this.props.charId !== prevProps.charId){
           this.updateChar();
       } 
    }



    updateChar(){
        const{charId,getData} = this.props;
        if(!charId){
            return;
        }
        this.setState({loading: true})
        // this.gotService.getCharacter(charId)
        getData(charId) // service
        .then((charDetails) =>{
            this.setState({charDetails, loading: false})
            
        })
        .catch(() => this.onError())
        // this.foo.bar = 0; // это ошибка умишленная
    }


    onError = () => {
        this.setState({
            char: null,
            error: true,
        });
    }


    render() {
        const{loading, error,charDetails} = this.state;
        
        if(!charDetails && error){
            return <ErrorMessage/>
        }else if(!charDetails){
            return <span className="select-error">Please select a character</span>
        }
        
        
        // const{name, gender, born, died, culture} = charDetails;
        const{name} = charDetails;
       

        if(loading){
            return <Spinner/>
        }


        return (

            <CharDetailsHeader className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {/* <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li> */}
                    {/* {this.props.children} */}
                    {
                        React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, {charDetails})
                    })
                    }
                    
                </ul>
            </CharDetailsHeader>
        );
    }
}