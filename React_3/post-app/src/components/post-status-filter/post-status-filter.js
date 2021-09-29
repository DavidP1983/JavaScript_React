import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name:'all', label: 'Все'},
            {name:'like', label: 'Понравилось'}
        ]
    }

    render() {
        const { onUpdateFilter, filter } = this.props;
            const buttons = this.buttons.map(({name, label}) => {
                
                const active = filter === name;
                const color = active ? 'primary' : 'outline-danger';
                return(
                    <Button key={name} color={color} type='button' onClick={() => onUpdateFilter(name)}>{label}</Button>
                )
            });

        return (
            <div className="input-group-append">
                {/* <Button color='primary' type='button'>Все</Button>
                <Button outline color='secondary' type='button'>Понравилось</Button> */}
                {buttons}
            </div>
        )
    }

}

