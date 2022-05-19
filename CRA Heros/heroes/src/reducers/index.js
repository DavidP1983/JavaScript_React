const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filtersLoadingStatus: 'idle',
    filters: [],
    filteredHeroes: [],
    activeFilter: 'all',

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
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

            case 'HEROES_FETCHING_ERROR':
                return {
                    ...state,
                    heroesLoadingStatus: 'error'
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


       



// add, remove elements

        case 'HERO_CREATED':
            let newCreatedHeroList = [...state.heroes, action.payload];
            return {
                ...state,
                heroes: newCreatedHeroList,
                filteredHeroes: state.activeFilter === 'all' ?
                    newCreatedHeroList :
                    newCreatedHeroList.filter(item => item.element === state.activeFilter)
            }
        case 'HERO_DELETED':
            const newHeroesList = state.heroes.filter(item => item.id !== action.payload);
            return {
                ...state,
                heroes: newHeroesList,
                // Фильтруем новые данные по фильтру, который сейчас применяется
                filteredHeroes: state.activeFilter === 'all' ?
                    newHeroesList :
                    newHeroesList.filter(item => item.element === state.activeFilter)
            }
        default: return state
    }
}

export default reducer;