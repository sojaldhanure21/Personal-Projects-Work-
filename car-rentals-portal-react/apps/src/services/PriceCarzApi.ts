const appConfig = require('../../app.json');
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: appConfig.apiBase,
        prepareHeaders: async (headers :any) => {
            headers.set('Accept', 'application/json'),
            headers.set('Content-Type', 'application/json')
            headers.set("Access-Control-Allow-Origin", "*")
            return headers
        },
        credentials: 'include',
    }),
    endpoints: () => ({}),
    reducerPath: 'api',
    tagTypes: ['car'],
})