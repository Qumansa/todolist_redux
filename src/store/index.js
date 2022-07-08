import { configureStore } from '@reduxjs/toolkit';

import { todosApi } from '../api/todosApi';
import { filtersApi } from '../api/filtersApi';

const store = configureStore({
    reducer: {
        [todosApi.reducerPath]: todosApi.reducer,
        [filtersApi.reducerPath]: filtersApi.reducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(
            todosApi.middleware, 
            filtersApi.middleware
        );
    },
    devTools: process.env.NODE_ENV !== 'production', 
});

export default store;
