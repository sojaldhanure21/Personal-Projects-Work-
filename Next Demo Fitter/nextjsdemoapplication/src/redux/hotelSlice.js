import { createSlice } from '@reduxjs/toolkit'
import {hotelApi} from './hotelApi';

const initialState = {
    hotels: [],
    apiKey: '',
    autoSuggestResponse: { locations: [], status: '' },
    user_session_key: '',
    searchTracingKey: '',
    searchId: '',
}

export const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
    extraReducers:
        (builder) => {
            builder.addMatcher(
                hotelApi.endpoints.getContext.matchFulfilled,
                (state, { payload }) => {
                    state.user_session_key = payload.sessionKey;
                    if(!payload.apiKey){
                        state.apiKey = payload.apiKey;
                    }
                },
            ),
            builder.addMatcher(
                hotelApi.endpoints.getAutoSuggest.matchFulfilled,
                (state, { payload }) => {
                    state.autoSuggestResponse = payload
                },
            ),
            builder.addMatcher(
                hotelApi.endpoints.initHotelSearch.matchFulfilled,
                (state, { payload }) => {
                    state.searchId = payload.searchId
                    state.searchTracingKey= payload.searchTracingKey
                },
            ),
            builder.addMatcher(
                hotelApi.endpoints.getHotelResult.matchFulfilled,
                (state, { payload }) => {
                    console.log('!!!!response',payload)
                    state.hotels = payload.hotels
                },
            )

        }

})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = hotelSlice.actions

export default hotelSlice.reducer