import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = 'https://#'

export const mainApi: any = createApi({
  reducerPath: 'flowersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }: any) => {
      const token = getState().token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  tagTypes: ['user', 'flowers'],
  endpoints: (builder) => ({
    // **************************user**************************
    loginUser: builder.mutation({
      query: ({ body }) => ({
        url: `/login`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['user']
    }),
    logoutUser: builder.query({
      query: () => ({
        url: `/logout`,
        method: 'POST'
      }),
      providesTags: ['user']
    }),
    // *****************flowers**************************
    getFlowersPhoto: builder.query({
      query: (page = 1) => ({
        url: `/flowers/photo?page=${page}`,
        method: 'GET'
      }),
      providesTags: ['flowers']
    }),
    deleteFlowersPhoto: builder.mutation({
      query: ({ portfolio_id }) => ({
        url: `/flowers`,
        method: 'DELETE',
        body: { portfolio_id: portfolio_id }
      }),
      invalidatesTags: ['flowers']
    }),
    addFlowersPhoto: builder.mutation({
      query: ({ formData }) => ({
        url: '/flowers/photo',
        method: 'POST',
        body: formData
      }),
      invalidatesTags: ['flowers']
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLoginUserMutation,
  useLogoutUserQuery,
  useGetFlowersPhotoQuery,
  useDeleteFlowersPhotoMutation,
  useAddFlowersPhotoMutation
} = mainApi
