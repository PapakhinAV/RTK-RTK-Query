import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


//https://redux-toolkit.js.org/tutorials/rtk-query

const baseUrl = 'http://localhost:4567'

export const todoApi = createApi({
        reducerPath: 'todoApi',
        baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes:['Todos'],
    endpoints: (builder)=>({
        getTodo: builder.query({
            query: ()=>'/todos',
            providesTags: ["Todos"]
        }),
        addTodo: builder.mutation({
            query: (body) => ({
                url: `${baseUrl}/todos`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Todos'],
        }),
        toggleComplete: builder.mutation({
            query: (body) => ({
                url: `${baseUrl}/todos/${body.id}`,
                method: 'PATCH',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ completed: body.completed }),
            }),
            invalidatesTags: ['Todos'],
        }),
        deleteTodo: builder.mutation({
            query: (body) => ({
                url: `${baseUrl}/todos/${body.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Todos'],
        }),

    }),
    })

export const { useGetTodoQuery ,useAddTodoMutation, useToggleCompleteMutation, useDeleteTodoMutation } = todoApi



//
// export const deleteTodoApi = createApi(
//     'todos/deleteTodoAsync',
//     async (payload) => {
//         const resp = await fetch(`http://localhost:4567/todos/${payload.id}`, {
//             method: 'DELETE',
//         });
//
//         if (resp.ok) {
//             return { id: payload.id };
//         }
//     }
// );
