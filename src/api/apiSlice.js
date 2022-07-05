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
        // createHero: builder.mutation({
        //     query: hero => ({
        //         url: '/heroes',
        //         method: 'POST',
        //         // hero будет автоматически превращён в json-формат
        //         body: hero
        //     }),
        //     // теги используются для того, чтобы связывать данные.
        //     // в данном случае целью является то, чтобы после того, как герой был добавлен и данные ушли на сервер, сразу же произошло обновление этих данных на клиенте. то есть если было 3 героя, через форму добавили нового героя, на сервере стало 4 героя, на клиенте тоже должно отображаться 4 героя. фактически сразу после запроса createHero вызывается ещё один запрос getHeroes
        //     invalidatesTags: ['Heroes']
        // }),
        deleteToDoItem: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Todos']
        })
    })
});

export const {useGetToDoListQuery, useDeleteToDoItemMutation} = apiSlice;