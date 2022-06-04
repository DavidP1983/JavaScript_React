// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import classNames from 'classnames';

import { useHttp } from '../../hooks/http.hook';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { filtersFetching, filterFetched, filtersFetchingError, activeFilterChanged } from "../../actions";
// import { fetchFilters, activeFilterChanged } from "../../actions";
import { fetchFilters } from '../../actions';
import { activeFilterChanged } from './filtersSlice';


import Spinner from '../spinner/Spinner';


const HeroesFilters = () => {
    const { filters, filtersLoadingStatus, activeFilter } = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const {request} = useHttp();


    useEffect(() => {
        // dispatch(filtersFetching());
        // request("http://localhost:3001/filters")
        //     .then(data => dispatch(filterFetched(data)))
        //     .catch(() => dispatch(filtersFetchingError()))

        dispatch(fetchFilters(request));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    if (filtersLoadingStatus === "loading") {
        return <Spinner />
    } else if (filtersLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }



    const renderButtons = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Фильтры не найдены</h5>
        }

        return arr.map(({name, className, label}) => {


            let btnClass = classNames('btn', className, {
                'active': name === activeFilter
            });

            return <button
                key={name}
                id={name}
                className={btnClass}
                onClick={() => dispatch(activeFilterChanged(name))}>
                {label}
            </button>
        })
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