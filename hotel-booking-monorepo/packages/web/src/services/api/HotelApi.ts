import { Context, autoSuggest } from "../../types"
import { api } from "../HotelBookingApi"

export const HotelApi = api.injectEndpoints({
    endpoints: build => ({
        getContext: build.query<Context, void>({
            providesTags: ['hotel'],
            query: () => 'api/context?accountid=zentrum-demo-account&channelid=demo-channel'
        }),
        autoSuggest: build.query<autoSuggest, any>({
            providesTags: ['hotel'],
            query: searchParam => ({
                url: `api/content/autosuggest?term=${searchParam}`
            })
        })
    }),
    overrideExisting: false,
})

export const { useGetContextQuery, useAutoSuggestQuery } = HotelApi