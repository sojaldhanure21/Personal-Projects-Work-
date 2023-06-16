import { api } from "../PriceCarzApi";

export const CarApi = api.injectEndpoints({
    endpoints: build => ({
        autosuggest: build.query<any,any> ({
            providesTags: ['car'],
            query: searchParam => ({
                url:`content/autosuggest?term=${searchParam}`
            })
        })
    }),
    overrideExisting: false,
})

export const {
    useAutosuggestQuery,
} = CarApi