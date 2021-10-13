import React, { Component } from 'react';
import gotService from '../../servises/gotService';
import CharDetails,{Field} from '../charDetails';

export default class BooksItem extends Component {
    gotService = new gotService();




    render() {
        return (
            <CharDetails charId={this.props.bookId}
            getData={this.gotService.getBook}>
                <Field field='numberOfPages' label='Number'/>
                <Field field='publiser' label='Publiser'/>
                <Field field='released' label='Released'/>
            </CharDetails>
        )
        
    }
}
