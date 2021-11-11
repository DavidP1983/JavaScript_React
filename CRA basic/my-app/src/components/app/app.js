import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import Employerslist from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import ErrorMeassage from '../error-message/error-message';

import './app.css';


class App extends Component {
 
    constructor(props){
        super(props);
    this.state =  {
        data: [
        {name:'John C.', salary: 800, increase: false, like:false,  id:1},
        {name:'Alex M.', salary: 3000, increase: false, like:false, id:2},
        {name:'Carl.W', salary: 5000, increase: false, like:false, id:3}
    ],
    term: '',
    filter: 'all',
    
    
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
        rise: false,
        id: uuidv4().slice(2,9)
    };
    this.setState(({data}) => ({
        data: [...data, newObj]
    }))
}

onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
        data: data.map(item => {
            if(item.id === id){
                return {...item, [prop]: !item[prop]}
            }
            return item;
        })
    }))
}

// onToggleRise = (id) => {
//    this.setState(({data}) => ({
//     data: data.map(item =>{
//         if(item.id === id){
//             return {...item, like:!item.like}
//         }
//         return item;
//     })
//    }))
// }

searchEmp = (items, term) => {
    if(term.length === 0){
        return items;
    }
    return items.filter(item => {
        return item.name.indexOf(term) > -1
    })
}

onUpdateTerm = (term) => {
    this.setState({term});
}


onUpdateFilter = (e) => {
    const toggle = e.currentTarget.getAttribute('data-toggle');
    this.setState({filter: toggle})
}


searchChanges = (items, filter) => {
    if(filter === 'all') {
        return items;
    }if (filter === 'rise') {
        return items.filter(item => {
            return item.like 
        })
    }
        return  items.filter(item => {
            return item.salary > 1000 
        })     
}

// method searchChanges and  onUpdateFilter another way 

/*

onUpdateFilter = (filter) => {
    this.setState({filter})
}


searchChanges = (items, filter) => {
    switch(filter) {
        case 'rise':
            return items.filter(item => item.like);
        case 'more': 
            return items.filter(item => item.salary > 1000);
        default:
            return items;
    }
}
*/

onSalaryChanges = (name, salary) => {
    this.setState(({data}) => ({
     data: data.map(item =>{
        if(item.name === name){
            return {...item, salary}
        }
        return item;
    })
    }))
 }

 

    render() {
        const{data, term,filter} = this.state;
        const employees = this.state.data.length;
        const increase = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchChanges(this.searchEmp(data, term),filter);
        const filterChanges = this.state.filter;

        const errorMessage = visibleData.length === 0 ? <ErrorMeassage/>:null;

        return (
        <div className='app'>
            <AppInfo employees={employees} increase={increase}/>

            {/* Поиск и фильтры */}
            <div className="search-panel"> 
                <SearchPanel onUpdateTerm={this.onUpdateTerm}/>
                <AppFilter onUpdateFilter={this.onUpdateFilter} filter={filterChanges}/>
            </div>
            {errorMessage}
            <Employerslist 
            data={visibleData}
            onDeleted={this.deleteItem}
            onToggleProp={this.onToggleProp}
            onSalaryChanges={this.onSalaryChanges}
            /*onToggleRise={this.onToggleRise}*//>
            <EmployersAddForm onAdd={this.onAdd}/>
        </div>
    )
    }
    
}

export default App;