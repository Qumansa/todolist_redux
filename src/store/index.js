import { configureStore } from '@reduxjs/toolkit';

import { todosApi } from '../api/todosApi';

const store = configureStore({
    reducer: {
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
