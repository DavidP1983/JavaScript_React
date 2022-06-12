import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";


const heroesAdapter = createEntityAdapter();

// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle',

// }

const initialState = heroesAdapter.getInitialState({
    heroesLoadingStatus: 'idle'
})

// console.log(initialState);

export const fetchHeroes = createAsyncThunk (
    'heroes/fetchHeroes',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/heroes")
    }
);

const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
       
        heroeCreated: (state, action) => {
            // state.heroes.push(action.payload);
            heroesAdapter.addOne(state, action.payload);
        },
        heroeDeleted: (state, action) => {
            // state.heroes = state.heroes.filter(item => item.id !== action.payload);
            heroesAdapter.removeOne(state, action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeroes.pending,  state => { state.heroesLoadingStatus = 'loading' })
            .addCase(fetchHeroes.fulfilled, (state, action) => {
                // state.heroes = action.payload;
                heroesAdapter.setAll(state, action.payload);
                state.heroesLoadingStatus = 'idle';
            })
            .addCase(fetchHeroes.rejected, state => { state.heroesLoadingStatus = 'error' })
            .addDefaultCase(() => {})
    }

});

const {actions, reducer} = heroesSlice;


 const {selectAll} = heroesAdapter.getSelectors(state => state.heroes);

export const filteredHeroesSelector = createSelector(
    (state) => state.filters.activeFilter,
    // (state) => state.heroes.heroes,
    selectAll,
    (filters, heroes) => {
        if(filters === 'all') {
            console.log('render');
            return heroes;
        }else {
            return heroes.filter(item => item.element === filters);
        }
    }
);

export default reducer;
export const {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroeCreated,
    heroeDeleted
} = actions;