import React, { Component } from 'react';
import ItemList from '../itemList';
import CharDetails,{Field} from '../charDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../servises/gotService';
import RowBlock from '../rowBlock';
import WithData from '../withData/withData';


export default class HousesPage extends Component{

        gotService = new gotService();


    state = {
        
        selectedChar: 130,
        error: false
    };

    onItemSelected =(id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch(){
        console.log('error');
        this.setState({error: true})
    }


    render(){
        const{error} = this.state;

        if(error){
            return <ErrorMessage/>
        }

        const {getAllHouses} = new gotService();
        const WithDataComponent = WithData(ItemList,getAllHouses);

        const itemList = (
            <WithDataComponent 
            onItemSelected={this.onItemSelected}
            // getData={this.gotService.getAllHouses} //service
            renderItem={({name}) => (name)}/> //render function
        )

        const charDetails = (
            <CharDetails charId={this.state.selectedChar}
            getData={this.gotService.getHouse}>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titels' label='Titels'/>
                <Field field='overlord' label='Overlord'/>
                <Field field='ancestralWeapons' label='AncestralWeapons'/>

            </CharDetails>
        )

        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
     
    }
}
