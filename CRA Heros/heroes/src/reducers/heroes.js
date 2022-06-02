import { createReducer } from "@reduxjs/toolkit";

import {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroeCreated,
    heroeDeleted
} from '../actions';


const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',

}


const heroes = createReducer(initialState, builder => {
    builder
        .addCase(heroesFetching, state => {
            state.heroesLoadingStatus = 'loading';
        })
        .addCase(heroesFetched, (state, action) => {
            state.heroes = action.payload;
            state.heroesLoadingStatus = 'idle';
        })
        .addCase(heroesFetchingError, state => {
            state.heroesLoadingStatus = 'error';
        })
        .addCase(heroeCreated, (state, action) => {
            state.heroes.push(action.payload);
        })
        .addCase(heroeDeleted, (state, action) => {
            state.heroes = state.heroes.filter(item => item.id !== action.payload);
        })
        .addDefaultCase(() => {});
})



// const heroes = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading'
//             }
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload,
//                 heroesLoadingStatus: 'idle'
//             }

//             case 'HEROES_FETCHING_ERROR':
//                 return {
//                     ...state,
//                     heroesLoadingStatus: 'error'
//                 }




// // add, remove elements

//         case 'HERO_CREATED':
//             let newCreatedHeroList = [...state.heroes, action.payload];
//             return {
//                 ...state,
//                 heroes: newCreatedHeroList,
//             }
//         case 'HERO_DELETED':
//             const newHeroesList = state.heroes.filter(item => item.id !== action.payload);
//             return {
//                 ...state,
//                 heroes: newHeroesList,
//             }
//         default: return state
//     }
// }

export default heroes;