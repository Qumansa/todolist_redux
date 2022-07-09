import { createSlice, createEntityAdapter  } from "@reduxjs/toolkit";

const filterAdapter = createEntityAdapter();

const initialState = filterAdapter.getInitialState({
    filters: [
        {name: 'All'},
        {name: 'Favourite'}
    ],
    activeFilter: 'All'
});

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterChanged(state, action) {
            state.activeFilter = action.payload;
        }
    }
});

const {actions, reducer} = filterSlice;

export default reducer;

export const {
    filterChanged,
} = actions;