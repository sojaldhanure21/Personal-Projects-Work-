import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from "next-redux-wrapper";

export const hotelApi = createApi({
  reducerPath: 'hotelApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.dev.prrooms.techspian.com/',
    prepareHeaders: async (headers) => {
      headers.set('Accept', 'application/json'),
      headers.set('Content-Type', 'application/json')
      return headers
    },
    credentials: 'include',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getContext: builder.query({
      query: (name) => `api/context?accountid=zentrum-demo-account&channelid=demo-channel`,
    }),
    initHotelSearch: builder.mutation({
      query: ( payload ) => ({

        body: {
          ...payload,
        },
        method: 'POST',
        url: 'api/hotels/search/init',
      }),
    }),
    getHotelResult: builder.query({
      query: initObj => {
        return {
          url: `api/hotels/search/result/${initObj.searchId}?limit=20&offset=1`,
          headers: {cookie: initObj.apiKey, searchTracingKey: initObj.searchTracingKey},
        };
      },
    }),
    getAutoSuggest: builder.query({
      query: cityName => {
        return {
          url: `api/content/autosuggest?term=${cityName}`
        };
      },
    }),
    getFilterData: builder.mutation({
      query: (payload) => ({
        body: {
          ...payload.filterGroup1
        },
        method: 'POST',
        url: `api/hotels/search/result/${payload.searchId}?limit=10&offset=0`,

        headers: { 'user-session-key': payload.userSessionKey }
      })
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContextQuery, util: { getRunningQueriesThunk }, useGetAutoSuggestQuery, useInitHotelSearchMutation,useGetFilterDataMutation } = hotelApi


