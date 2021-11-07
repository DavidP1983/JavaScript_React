import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const Employerslist = ({data, onDeleted}) => {

    const elements = data.map((item) => {
        const{id, ...itemPromps} = item;
        return (
            <EmployersListItem key={id} {...itemPromps}
            onDelete={() => onDeleted(id)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default Employerslist;