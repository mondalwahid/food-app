import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const foodApi = createApi({
  reducerPath: 'foodApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://dmapi.ipaypro.co/app_task'}),
  endpoints: builder => ({
    getFoodByName: builder.query({
      query: () => `categories`,
    }),
  }),
});
export const {useGetFoodByNameQuery} = foodApi;
