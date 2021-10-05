import React, {Component} from 'react';
// import { Spinner } from 'reactstrap';
import styled from 'styled-components';
import gotService from '../../servises/gotService';
import  Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const LiBlock = styled.ul`
.list-group-item {
    cursor: pointer;
}
`

export default class ItemList extends Component {
    gotService = new gotService();

    state = {
        charList: null,
        error: false
        
    }

    componentDidMount(){
        this.gotService.getAllCharacters()
        .then((charList) => {
            this.setState({
                charList,
                error: false
            });
        })
        .catch(() => this.onError());
        
    }

    componentDidCatch(){
        this.setState({
            charList: null,
            error: true
        })
    }

    
    onError = (status) => {
        this.setState({
            charList: null,
            error: true
        })
    }

    renderItem(arr) {
        return arr.map((item,i) => {
           const {url} = item;
        //    console.log(url);
           let id = url.slice(-2);
       
            return (
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(id)}>
                    {item.name}
                </li>
            )
        });
    }

    render() {
        const {charList,error} = this.state
        console.log(charList);

        if(error) {
            return(
            <div>
            <ErrorMessage/>
            </div>
            )
        }

        if(!charList){
            return <Spinner/>
        }

        const items = this.renderItem(charList);


        return (
            <LiBlock className="item-list list-group">
                {items}
            </LiBlock>
        );
    }
}