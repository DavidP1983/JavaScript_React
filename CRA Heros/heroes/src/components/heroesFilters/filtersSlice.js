import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const filterAdapter = createEntityAdapter({
    selectId: filter => filter.name
});

const initialState = filterAdapter.getInitialState({
    filtersLoadingStatus: 'idle',
    activeFilter: 'all',
});



// const initialState = {
//     filtersLoadingStatus: 'idle',
//     filters: [],
//     activeFilter: 'all',
   
// }

export const fetchFilters = createAsyncThunk(
    'filters/fetchFilters',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/filters");
    }
);

export const activeFilterChanged = createAsyncThunk(
    'filters/activeFilterChanged',
    async (arg) => {
     const time = delay =>  new Promise((resolve) => setTimeout(() => resolve(arg), delay))
        return await time(1000);
    
    }
);

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    // reducers: {
    //     // filtersFetching: state => {state.filtersLoadingStatus = 'loading'},
    //     // filterFetched: (state, action) => {
    //     //     state.filters = action.payload;
    //     //     state.filtersLoadingStatus = 'idle';
    //     // },
    //     // // filtersFetchingError: state => {state.filtersLoadingStatus = 'error'},
    //     // activeFilterChanged: (state, action) => {
    //     //     state.activeFilter = action.payload;
    //     //     state.filtersLoadingStatus = 'idle';
    //     // }
    // },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilters.pending, state =>  {state.filtersLoadingStatus = 'loading'})
            .addCase(fetchFilters.fulfilled, (state, action) => {
                // state.filters = action.payload;
                filterAdapter.setAll(state, action.payload);
                state.filtersLoadingStatus = 'idle';
            })
            .addCase(fetchFilters.rejected, state => {state.filtersLoadingStatus = 'error'})
            .addCase(activeFilterChanged.pending)
            .addCase(activeFilterChanged.fulfilled, (state, action) => {
                state.activeFilter = action.payload;
                state.filtersLoadingStatus = 'idle';
                
            })
            .addCase(activeFilterChanged.rejected, state => {state.filtersLoadingStatus = 'error'})

           
            .addDefaultCase(() => {})
    }
   
});



const {actions, reducer} = filtersSlice;

const {selectAll} = filterAdapter.getSelectors(state => state.filters);

export const filter = createSelector(
    selectAll,
    (filters) => {return filters}
);


export default reducer;
export const {
    filtersFetching,
    filterFetched,
    filtersFetchingError,
    // activeFilterChanged
} = actions;