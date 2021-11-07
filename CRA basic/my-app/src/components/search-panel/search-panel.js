
import './search-panel.css';
                               //Search-Поиск

const SearchPanel = () => {
    return (
        <input 
        type="text" 
        className="form-control search-input"
        placeholder='Найти сотрудника'/>
    )
}

export default SearchPanel;