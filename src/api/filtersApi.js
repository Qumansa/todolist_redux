import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const filtersApi = createApi({
    reducerPath: 'filtersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    tagTypes: ['Filters'],
    endpoints: (builder) => ({
        getFilters: builder.query({
            query: () => '/filters',
            providesTags: ['Filters']
        }),
        // createToDoItem: builder.mutation({
        //     query: (toDoItem) => ({
        //         url: '/todos',
        //         method: 'POST',
        //         body: toDoItem
        //     }),
        //     invalidatesTags: ['Todos']
        // }),
        // toggleFavouriteToDoItem: builder.mutation({
        //     query(data) {
        //         const { id } = data;
                
        //         return {
        //             url: `/todos/${id}`,
        //             method: 'PATCH',
        //             body: data
        //         }
        //     },
        //     invalidatesTags: ['Todos']
        // }),
        // deleteToDoItem: builder.mutation({
        //     query: (id) => ({
        //         url: `/todos/${id}`,
        //         method: 'DELETE'
        //     }),
        //     invalidatesTags: ['Todos']
        // })
    })
});

export const {
    useGetFiltersQuery, 
} = filtersApi;