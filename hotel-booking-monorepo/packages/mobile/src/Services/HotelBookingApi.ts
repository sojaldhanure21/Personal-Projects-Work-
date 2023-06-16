import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const appConfig = require('../../app.json')

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: appConfig.apiBase,
        prepareHeaders: async (headers) => {
            headers.set('Accept', 'application/json')
            headers.set('Content-Type', 'application/json')
            headers.set("Access-Control-Allow-Origin", "*")
            return headers;
        },
        credentials: 'include',
    }),
    endpoints: () => ({}),
    reducerPath: 'api',
    tagTypes: ['hotel'],
})