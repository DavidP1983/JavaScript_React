import React, {Component} from 'react';
// import { Spinner } from 'reactstrap';
import styled from 'styled-components';
// import gotService from '../../servises/gotService';
import  Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const LiBlock = styled.ul`
.list-group-item {
    cursor: pointer;
}
`

export default class ItemList extends Component {
    // gotService = new gotService();

    state = {
        itemList: null,
        error: false
        
    }

    componentDidMount(){
        const{getData} = this.props
        getData() //service
        // this.gotService.getAllCharacters()
        .then((itemList) => {
            this.setState({
                itemList,
                error: false
            });
        })
        .catch(() => this.onError());
        
    }

    componentDidCatch(){
        this.setState({
            itemList: null,
            error: true
        })
    }

    
    onError = (status) => {
        this.setState({
            itemList: null,
            error: true
        })
    }

    renderItem(arr) {
        return arr.map((item,i) => {
           const {url} = item;
        //    console.log(url);
           let id = url.slice(-2);
           const label = this.props.renderItem(item); // render function
       
            return (
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}>
                    {/* {item.name} */}
                    {label}
                </li>
            )
        });
    }

    render() {
        const {itemList,error} = this.state
        console.log(itemList);

        if(error) {
            return(
            <div>
            <ErrorMessage/>
            </div>
            )
        }

        if(!itemList){
            return <Spinner/>
        }

        const items = this.renderItem(itemList);


        return (
            <LiBlock className="item-list list-group my-2">
                {items}
            </LiBlock>
        );
    }
}