import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const Employerslist = ({data, onDeleted,onToggleProp,onToggleRise,onSalaryChanges}) => {

    const elements = data.map((item) => {
        const{id, ...itemPromps} = item;
        return (
            <EmployersListItem key={id} {...itemPromps}
            onDelete={() => onDeleted(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            onSalaryChanges={onSalaryChanges}
            /*onToggleRise={() => onToggleRise(id)}*//>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default Employerslist;