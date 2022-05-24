const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',

}

const heroes = (state = initialState, action) => {
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
                heroesLoadingStatus: 'idle'
            }

            case 'HEROES_FETCHING_ERROR':
                return {
                    ...state,
                    heroesLoadingStatus: 'error'
                }




// add, remove elements

        case 'HERO_CREATED':
            let newCreatedHeroList = [...state.heroes, action.payload];
            return {
                ...state,
                heroes: newCreatedHeroList,
            }
        case 'HERO_DELETED':
            const newHeroesList = state.heroes.filter(item => item.id !== action.payload);
            return {
                ...state,
                heroes: newHeroesList,
            }
        default: return state
    }
}

export default heroes;