import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const addFoodApi = createApi({
  baseQuery: fetchBaseQuery({baseUrl: 'https://dmapi.ipaypro.co/app_task'}),
  endpoints: builder => ({
    addFood: builder.mutation({
      query: ({category_name, sub_cateries}) => ({
        url: '/categories/add',
        method: 'POST',
        body: {
          category_name: category_name,
          sub_cateries: [
            {
              name: sub_cateries,
            },
          ],
          // image: image,
        },
      }),
    }),
  }),
});

export const {useAddFoodMutation} = addFoodApi;
