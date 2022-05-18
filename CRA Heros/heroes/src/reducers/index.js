const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filteredHeroes: [],
    activeFilter: 'all',

}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                filteredHeroes: state.activeFilter === 'all' ? action.payload : action.payload.filter(item => item.element === state.activeFilter),
                heroesLoadingStatus: 'idle'
            }
            // Данный case необходим: 1. Чтоб отлавливать нужный фильтр ( activeFilter) с компонента HeroesFilters и менять его.
            //                        2.  filteredHeroes необходим массив для того, чтоб при отфильтровки мы могли удалять или добовлять героев находиясь именно в фильтре, например ('fire')
            case 'ACTIVE_FILTER_CHANGED':
                return {
                    ...state,
                    activeFilter: action.payload,
                    filteredHeroes: action.payload === 'all' ? state.heroes : state.heroes.filter(item => item.element === action.payload), 
                    heroesLoadingStatus: 'idle'
                }
            case 'FILTER_FETCHED':
            return {
                ...state,
                filters: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
            default: return state
    }
}

export default reducer;