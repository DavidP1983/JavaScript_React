import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import Employerslist from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';


class App extends Component {
 
    constructor(props){
        super(props);
    this.state =  {
        data: [
        {name:'John C.', salary: 800, increase: true, id:1},
        {name:'Alex M.', salary: 3000, increase: false, id:2},
        {name:'Carl.W', salary: 5000, increase: false, id:3}
    ]
    
    }
      
}

deleteItem = (id) => {
    this.setState(({data}) => {
        // const index = data.findIndex(elem => elem.id === id);
        // const before = data.slice(0, index);
        // const after = data.slice(index + 1);
        // const newArr = [...before, ...after];
      
     
        return {
            data: data.filter(item => item.id !== id)
        
        }
        
    })
}

onAdd = (name,salary) => {
    const newObj = {
        name: name,
        salary: salary,
        increase:false,
        id: uuidv4().slice(2,9)
    };
    this.setState(({data}) => ({
        data: [...data, newObj]
    }))
}

    render() {
        const{data} = this.state
        return (
        <div className='app'>
            <AppInfo/>

            {/* Поиск и фильтры */}
            <div className="search-panel"> 
                <SearchPanel/>
                <AppFilter/>
            </div>
            <Employerslist 
            data={data}
            onDeleted={this.deleteItem}/>
            <EmployersAddForm onAdd={this.onAdd}/>
        </div>
    )
    }
    
}

export default App;