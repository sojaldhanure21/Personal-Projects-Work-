import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CarApi } from '../services/api/CarApi'
import { locations } from '../utils/dateTimeHelperFunctions'

interface autoSuggestResponse {
  locations: any[]
}

interface CarState {
  autoSuggestResponse: any,
  cars: any,
  filtersApplied: any,
}

const initialState = {
  cars: [],
  filtersApplied: ['100$ to 200$', '200$ to 300$'],
  autoSuggestResponse: {
    locations: locations
  }
} as CarState

export const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setCars: (state, action: PayloadAction<any>) => {
      state.cars = action.payload
    },
    setfiltersApplied: (state, action: PayloadAction<any>) => {
      state.filtersApplied = action.payload
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      CarApi.endpoints.autosuggest.matchFulfilled,
      (state, {payload}:any )=>{
        if (payload.status) {
          state.autoSuggestResponse.locations = payload.locations;
        }
      }
    )
  }
})

export const { setCars, setfiltersApplied } = carSlice.actions

export default carSlice.reducer