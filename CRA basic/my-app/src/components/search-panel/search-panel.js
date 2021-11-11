import { Component } from 'react';

import './search-panel.css';
                               //Search-Поиск

class SearchPanel extends Component {
   constructor(props) {
       super(props);
       this.state = {
           term: ''
       }
   }

onUpdateValue = (e) => {
    const value = e.target.value;
    this.setState({term: value});
    this.props.onUpdateTerm(value);
}

   render() {

    return (
        <input 
        type="text" 
        className="form-control search-input"
        placeholder='Найти сотрудника'
        onChange={this.onUpdateValue}
        value={this.state.term}/>
    )
   }
}

export default SearchPanel;