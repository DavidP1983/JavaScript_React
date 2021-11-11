import { Component } from 'react';

import './employers-list-item.css';

class EmployersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: ''
        }
    }

    onChangeSalary = (e) => {
        const{name} = this.props
        const salary =  (e.target.value).slice(0, -1);
        this.setState({
            salary: this.props.onSalaryChanges(name,salary)
        })
        
    }

    render() {

        const { name, salary, onDelete, onToggleProp, /*onToggleRise, onToggleIncrease*/ increase, like } = this.props;

        let className = "list-group-item d-flex justify-content-between";

        if (increase) {
            className += ' increase';
        }

        if (like) {
            className += ' like';
        }

        return (
            <li className={className}>
                <span className="list-group-item-label" onClick={onToggleProp} data-toggle="like">{name}</span>
                <input type="text" className="list-group-item-input" onChange={this.onChangeSalary}  defaultValue={`${salary}$`} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>

        )
    }


}




export default EmployersListItem;