import { configureStore } from '@reduxjs/toolkit';

import { todosApi } from '../api/todosApi';
import filter from '../components/filter/filterSlice';
import search from '../components/search/searchSlice';

const store = configureStore({
    reducer: {
        filter,
        search,
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(
            todosApi.middleware, 
        );
    },
    devTools: process.env.NODE_ENV !== 'production', 
});

export default store;
