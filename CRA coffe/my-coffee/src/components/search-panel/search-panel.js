

import './search-panel.css';

const SearchPanel = ({activeButton, onUpdateButton}) => {

    const buttons = [
        {name: 'Brazil', label: 'Brazil'},
        {name: 'Kenya', label: 'Kenya'},
        {name: 'Columbia', label: 'Columbia'},
        {name: 'All', label: 'All Countries'},

    ];

    const elements = buttons.map((item) => {
        const{name, label} = item;

        const  active = activeButton === name ? "btn btn-dark text-light mr-1" : "btn btn-outline-danger mr-1";
        return (
            <button
                className={active}
                type='button'
                key={name}
                onClick={() => onUpdateButton(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group search mb-3">
            <p className="text">Our filter</p>
           {elements}
        </div>
    )
}
export default SearchPanel;