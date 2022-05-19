export const heroesFetching = () => ({type: 'HEROES_FETCHING'});

export const heroesFetched = (heroes) => ({type:  'HEROES_FETCHED', payload: heroes});

export const heroesFetchingError = () => ({type: 'HEROES_FETCHING_ERROR'});


//active filter
export const activeFilterChanged   = (heroe) => ({type: 'ACTIVE_FILTER_CHANGED', payload: heroe});


//filters
export const filtersFetching = () => ({type: 'FILTER_FETCHING'});

export const filterFetched = (filter) => ({type:  'FILTER_FETCHED', payload: filter});

export const filtersFetchingError = () => ({type: 'FILTERS_FETCHING_ERROR'});


// add, remove element

export const heroeDeleted = (id) => ({type: 'HERO_DELETED', payload: id});

export const heroeCreated = (heroe) => ({type: 'HERO_CREATED', payload: heroe})