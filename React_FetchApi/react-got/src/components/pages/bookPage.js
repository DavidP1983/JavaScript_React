import React, { Component } from 'react';
import ItemList from '../itemList';
// import CharDetails,{Field} from '../charDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../servises/gotService';
// import RowBlock from '../rowBlock';
import WithData from '../withData/withData';
import {withRouter} from 'react-router-dom';


 class BookPage extends Component{

        gotService = new gotService();


    state = {
        
        // selectedChar: 1,
        error: false
    };

    // onItemSelected =(id) => {
    //     this.setState({
    //         selectedChar: id
    //     })
    // }

    componentDidCatch(){
        console.log('error');
        this.setState({error: true})
    }


    render(){
        const{error} = this.state;

        if(error){
            return <ErrorMessage/>
        }
        const {getAllBooks} = new gotService();
        const WithDataComponent = WithData(ItemList,getAllBooks);

        // const itemList = (
        //     <ItemList onItemSelected={this.onItemSelected}
        //     getData={this.gotService.getAllBooks} //service
        //     renderItem={({name}) => (name)}/> //render function
        // )

        // const charDetails = (
        //     <CharDetails charId={this.state.selectedChar}
        //     getData={this.gotService.getBook}>
        //         <Field field='numberOfPages' label='Number'/>
        //         <Field field='publiser' label='Publiser'/>
        //         <Field field='released' label='Released'/>
        //     </CharDetails>
        // )

        return (
            // <RowBlock left={itemList} right={charDetails}/>
            <WithDataComponent onItemSelected={(itemId) => {
            this.props.history.push(itemId);
            }}
            // getData={this.gotService.getAllBooks} //service
            renderItem={({name}) => (name)}/> //render function
        )
     
    }
}

export default withRouter(BookPage);