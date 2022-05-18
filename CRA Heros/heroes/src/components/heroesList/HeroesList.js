import { useHttp } from "../../hooks/http.hook";
import { useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from 'react-redux';


import { heroesFetching, heroesFetched, heroesFetchingError } from "../../actions";


import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';
import { animations } from 'react-animation'

// import 'react-animation/dist/keyframes.css'

const HeroesList = () => {
    const { heroes, filteredHeroes, heroesLoadingStatus } = useSelector(state => state);
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(heroesFetching());
        request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        deleteHeroeItem();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


   

    const style = useMemo(() => {
        return { animation: animations.popIn }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [heroes]);

    // const style = { animation: animations.popIn }

    const deleteHeroeItem = useCallback((id) => {
        if (!id) {
            return;
        }
        dispatch(heroesFetching());
        request(`http://localhost:3001/heroes/${id}`, 'DELETE')
            .then(() => console.log(`${id} : Deleted`))
            .catch(() => dispatch(heroesFetchingError()))

        return {
            heroes: dispatch(heroesFetched(heroes.filter(item => item.id !== id)))

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [heroes]);




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
            return <HeroesListItem
                style={style}
                key={id}
                {...props}
                deleteHeroeItem={() => deleteHeroeItem(id)} />
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