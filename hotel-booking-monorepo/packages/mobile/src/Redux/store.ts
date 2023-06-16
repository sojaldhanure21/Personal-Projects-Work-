import { configureStore } from "@reduxjs/toolkit";
import { api } from "../Services/HotelBookingApi";
import hotelReducer from './hotelSlice'
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        hotel: hotelReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch