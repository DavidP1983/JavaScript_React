import { Component } from 'react';

import './app-filter.css';

// Filter

class AppFilter extends Component {
    
    render() {
        const {onUpdateFilter, filter} = this.props;
        
        return (
            <div className="btn-group">
                <button
                    className={filter === 'all'? "btn btn-light": "btn btn-outline-light"}
                    type='button'
                    data-toggle="all"
                    onClick={onUpdateFilter}>
                    Все сотрудники
                </button>

                <button
                    className={filter === 'rise'? "btn btn-light": "btn btn-outline-light"}
                    type='button'
                    data-toggle="rise"
                    onClick={onUpdateFilter}>
                    Сотрудники на повышение
                </button>

                <button
                    className={filter === 'more'? "btn btn-light": "btn btn-outline-light"}
                    type='button'
                    data-toggle="more"
                    onClick={onUpdateFilter}>
                    З/П больше 1000$
                </button>

            </div>
        );
    }


}



export default AppFilter;

/*
const AppFilter = (props) => {
    
        
const buttonsData = [
    {name: 'all', label: ' Все сотрудники'},
    {name: 'rise', label: ' Сотрудники на повышение'},
    {name: 'more', label: '  З/П больше 1000$'}
]


const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const clazz = active? 'btn-light': 'btn-outline-light';

    return (
        <button
                className={`btn ${clazz}`}
                type='button' 
                key={name}
                onClick={() => props.onUpdateFilter(name)}>     
               {label}    
        </button>            
    )
})

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    


}



export default AppFilter;



*/