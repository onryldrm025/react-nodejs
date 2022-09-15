import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const dataApi = createApi({
    reducerPath: 'dataApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),

    endpoints: (builder) => ({
      getUser: builder.query({
        keepUnusedDataFor:0,
        query: () => `auth/user`,
      }),
      setUser: builder.mutation({
        query: (body) => ({
            url:'auth/add/user',
            method:'POST',
            body
        }),
      }),
    
    }),
  })


  export const {useGetUserQuery,useSetUserMutation} = dataApi