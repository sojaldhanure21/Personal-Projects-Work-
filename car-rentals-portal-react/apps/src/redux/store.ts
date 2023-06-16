import { configureStore } from '@reduxjs/toolkit'
import carReducer from './carSlice'
import { api } from '../services/PriceCarzApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    car: carReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch