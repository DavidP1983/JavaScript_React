export const heroesFetching = () => ({type: 'HEROES_FETCHING'});

export const heroesFetched = (heroes) => ({type:  'HEROES_FETCHED', payload: heroes});

export const filterFetched = (filter) => ({type:  'FILTER_FETCHED', payload: filter});

export const activeFilterChanged   = (heroe) => ({type: 'ACTIVE_FILTER_CHANGED', payload: heroe});

export const heroesFetchingError = () => ({type: 'HEROES_FETCHING_ERROR'});