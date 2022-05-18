// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

// import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { activeFilterChanged, heroesFetching } from "../../actions";


let classNames = require('classnames');




const HeroesFilters = () => {
    const [active, setActive] = useState('all');

    const { filters } = useSelector(state => state);

    const dispatch = useDispatch();




    const renderButtons = (arr) => {

        return arr.map((item) => {

            let label;
            switch (item) {
                case 'all':
                    label = "Все";
                    break;
                case 'fire':
                    label = "Огонь";
                    break;
                case 'water':
                    label = "Вода";
                    break;
                case "wind":
                    label = "Ветер"
                    break;
                case 'earth':
                    label = "Земля"
                    break;
                default:
                    label = "Нет данных";
            }
            let activeClass = active === item ? 'active' : null;

            let btnClass = classNames({
                btn: true,
                'btn-outline-dark': item === 'all',
                'btn-outline-danger': item === 'fire',
                'btn-outline-primary': item === 'water',
                'btn-outline-success': item === 'wind',
                'btn-outline-secondary': item === 'earth'
            });

            return <button
                key={item}
                className={`${btnClass} ${activeClass}`}
                onClick={() => onUpdateFilter(item)}>
                {label}
            </button>
        })
    }




    const onUpdateFilter = (filter) => {
        setActive(filter);
        console.log(filter);
        dispatch(heroesFetching());
        dispatch(activeFilterChanged(filter));
    }





    const buttonsData = renderButtons(filters);

    return (
        <div className="card shadow-lg mt-4 mb-5">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {/* <button className="btn btn-outline-dark active">Все</button>
                    <button className="btn btn-outline-danger">Огонь</button>
                    <button className="btn btn-outline-primary">Вода</button>
                    <button className="btn btn-outline-success">Ветер</button>
                    <button className="btn btn-outline-secondary">Земля</button> */}
                    {buttonsData}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;