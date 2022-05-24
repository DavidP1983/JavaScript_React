import { useHttp } from "../../hooks/http.hook";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { createSelector } from 'reselect'

import { heroesFetching, heroesFetched, heroesFetchingError, heroeDeleted } from "../../actions";


import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE


const HeroesList = () => {

    const filteredHeroesSelector = createSelector(
        (state) => state.filters.activeFilter,
        (state) => state.heroes.heroes,
        (filters, heroes) => {
            if(filters === 'all') {
                console.log('render');
                return heroes;
            }else {
                return heroes.filter(item => item.element === filters);
            }
        }
    );
   
    // const filteredHeroes = useSelector(state => {
    //     if(state.filters.activeFilter === 'all') {
    //         return state.heroes.heroes;
    //     }else {
    //         return state.heroes.heroes.filter(item => item.element === state.filters.activeFilter);
    //     }
    // })

    
    const filteredHeroes = useSelector(filteredHeroesSelector);

    const {heroesLoadingStatus} = useSelector(state => state.heroes);
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        // dispatch(heroesFetching());
        dispatch( 'HEROES_FETCHING');
        request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const deleteHeroeItem = useCallback((id) => {
        request(`http://localhost:3001/heroes/${id}`, "DELETE")
            .then(data => console.log(data, 'Deleted'))
            .then(dispatch(heroeDeleted(id)))
            .catch(err => console.log(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [request]);





    if (heroesLoadingStatus === "loading") {
        return <Spinner />
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }




    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }


        return arr.map(item => {
            const { id, ...props } = item;
            return (

                <HeroesListItem key={id} {...props} deleteHeroeItem={() => deleteHeroeItem(id)} />

            )
        })
    }

    const elements = renderHeroesList(filteredHeroes);

    return (

        <ul>
            {elements}
        </ul>





    )
}

export default HeroesList;