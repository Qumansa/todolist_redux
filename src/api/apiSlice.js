import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        getToDoList: builder.query({
            query: () => '/todos',
            providesTags: ['Todos']
        }),
        createToDoItem: builder.mutation({
            query: (toDoItem) => ({
                url: '/todos',
                method: 'POST',
                body: toDoItem
            }),
            invalidatesTags: ['Todos']
        }),
        deleteToDoItem: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Todos']
        })
    })
});

export const {useGetToDoListQuery, useDeleteToDoItemMutation, useCreateToDoItemMutation} = apiSlice;