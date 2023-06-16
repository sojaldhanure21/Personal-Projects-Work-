import { configureStore, Store } from '@reduxjs/toolkit'
import { hotelApi } from './hotelApi'
import { createWrapper } from "next-redux-wrapper";
import { setupListeners } from '@reduxjs/toolkit/query'
import hotelReducer from './hotelSlice'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [hotelApi.reducerPath]: hotelApi.reducer,
    hotel: hotelReducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hotelApi.middleware),
})

const makeStore = (context) => store

export const wrapper = createWrapper(makeStore, { debug: true });
setupListeners(store.dispatch)