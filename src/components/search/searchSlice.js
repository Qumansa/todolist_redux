import { createSlice, createEntityAdapter  } from "@reduxjs/toolkit";

const searchAdapter = createEntityAdapter();

const initialState = searchAdapter.getInitialState({
    searchValue: ''
});

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchChanged(state, action) {
            state.searchValue = action.payload;
        }
    }
});

const {actions, reducer} = searchSlice;

export default reducer;

export const {
    searchChanged,
} = actions;