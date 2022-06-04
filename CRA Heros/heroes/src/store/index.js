// import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import {configureStore} from '@reduxjs/toolkit';
// import ReduxThunk from 'redux-thunk';
// import heroes from '../reducers/heroes';
// import filters from '../reducers/filters';
import heroes from '../components/heroesList/heroesSlice';
import filters from '../components/heroesFilters/filtersSlice'


const stringdMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}


// const enhancer = (createStore) => (...args) => {
//     const store = createStore(...args);

//     const oldDispatch = store.dispatch;

//     store.dispatch = (action) => {
//         if(typeof action === 'string') {
//             return oldDispatch({
//                 type: action
//             })
//         }
//         return oldDispatch(action)
//     }
//     return store;
// }

// const store = createStore( 
//                             combineReducers({heroes, filters}), 
//                             compose(
//                                 enhancer,
//                                 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//                             ));



// const store = createStore(
//     combineReducers({ heroes, filters }),
//     compose(
//         applyMiddleware(ReduxThunk,stringdMiddleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

const store = configureStore({
    reducer: {heroes, filters},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringdMiddleware),
    devTools: process.env.Node_ENV !== 'production',
    
})


export default store;