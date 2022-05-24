// ReduxThunk for heroes

export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}

//heroes

export const heroesFetching = () => ({ type: 'HEROES_FETCHING' });

export const heroesFetched = (heroes) => ({ type: 'HEROES_FETCHED', payload: heroes });

export const heroesFetchingError = () => ({ type: 'HEROES_FETCHING_ERROR' });


//active filter

// export const activeFilterChanged   = (heroe) => (dispatch) =>{
//     setTimeout(() => {
//         dispatch({type: 'ACTIVE_FILTER_CHANGED', payload: heroe})
//     },1000);
// }
export const activeFilterChanged = (heroe) => ({ type: 'ACTIVE_FILTER_CHANGED', payload: heroe });



//ReduxThunk for filters
export const fetchFilters = (request) => (dispatch) => {
    dispatch(filtersFetching());
    request("http://localhost:3001/filters")
        .then(data => dispatch(filterFetched(data)))
        .catch(() => dispatch(filtersFetchingError()))
}



//filters
export const filtersFetching = () => ({ type: 'FILTER_FETCHING' });

export const filterFetched = (filter) => ({ type: 'FILTER_FETCHED', payload: filter });

export const filtersFetchingError = () => ({ type: 'FILTERS_FETCHING_ERROR' });


// add, remove element

export const heroeDeleted = (id) => ({ type: 'HERO_DELETED', payload: id });

export const heroeCreated = (heroe) => ({ type: 'HERO_CREATED', payload: heroe })