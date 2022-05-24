const initialState = {
    filtersLoadingStatus: 'idle',
    filters: [],
    activeFilter: 'all',

}

const filters = (state = initialState, action) => {
    switch (action.type) {
        // Данный case необходим: 1. Чтоб отлавливать нужный фильтр ( activeFilter) с компонента HeroesFilters и менять его.
        //                        2.  filteredHeroes необходим массив для того, чтоб при отфильтровки мы могли удалять или добовлять героев находиясь именно в фильтре, например ('fire')
        case 'ACTIVE_FILTER_CHANGED':
            return {
                ...state,
                activeFilter: action.payload,
                heroesLoadingStatus: 'idle'
            }


//filters
        case 'FILTER_FETCHING':
            return {
                ...state,
                filtersLoadingStatus: 'loading'
            }
        case 'FILTER_FETCHED':
            return {
                ...state,
                filters: action.payload,
                filtersLoadingStatus: 'idle'
            }
            case 'FILTERS_FETCHING_ERROR':
            return {
                ...state,
                filtersLoadingStatus: 'error'
            }

        default: return state
    }
}

export default filters;