import {Component} from 'react';

import './employers-add-form.css';

class EmployersAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onAdd = (e) => {
        e.preventDefault();
        const{name,salary} = this.state;
        if(name.length > 3 && name.match(/\D/g) && salary){
            this.props.onAdd(name,salary);
        }
        
        this.setState({
            name: '',
            salary: ''
        })
    }


    render() {
        const{name, salary} = this.state;

        let className= "add-form form-inline";

        // eslint-disable-next-line no-mixed-operators
        if (name && name.length < 4 || name.match(/\d/g)){
            className+= ' emptyField';
        }

    
       return (
        <div className="app-add-form">
            <h3 className='d-flex justify-content-center'>Добавте нового сотрудника</h3>
            <form className={className}
            onSubmit={this.onAdd}>
                <input
                    type="text"
                    className='form-control col-sm mb-2 mx-auto mr-lg-2 new-post-label'
                    placeholder='Как его зовут'
                    onChange={this.onValueChange}
                    name="name" 
                    value={name}/>
                <input type="number"
                    className='form-control  col-sm mb-2 mx-auto mr-lg-3 new-post-label'
                    placeholder='З/П в $?'
                    onChange={this.onValueChange}
                    name="salary" 
                    value={salary}/>

                <button type='submit' className='btn btn-outline-light  mx-auto mb-2'>Добавить</button>
            </form>
        </div>
       )
    }
       
}

export default EmployersAddForm;