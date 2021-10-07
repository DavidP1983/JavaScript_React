import React, { Component } from 'react';
// import { Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails,{Field} from '../charDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../servises/gotService';
import RowBlock from '../rowBlock';

// const RowBlock = ({left, right}) => {
//     return (
//     <Row>
//         <Col md='6'>
//            {left}
//         </Col>
//         <Col md='6'>
//             {right}
//         </Col>
//     </Row>
//     )
// }

export default class CharacterPage extends Component{

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

        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllCharacters} //service
            renderItem={({name, gender}) => `${name} (${gender})`}/> //render function
        )

        const charDetails = (
            <CharDetails charId={this.state.selectedChar}
            getData={this.gotService.getCharacter}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </CharDetails>
        )

        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
     
    }
}
