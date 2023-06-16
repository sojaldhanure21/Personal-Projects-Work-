import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HotelApi } from '../services/api/HotelApi'
import { autoSuggest } from '../types';
import ChildCounts from '../Components/SearchWidget/ChildCounts';

interface InitialState {
    hotels: any;
    apiKey: string;
    autoSuggestResponse: autoSuggest;
    user_session_key: string;
    searchTracingKey: string;
    searchId: string;
    searchDestinationText: string;
    searchDestinationFromDate: string;
    searchDestinationToDate: string;
    adultsCount: number;
    childrenCount: any;
    locationId: any;
    hotelDetailsId: any;
    hotelDetails: any,
    hotelDetailsAxios: any,
    starRating: any,
    maxDistanceHotel: any,
    minDistanceHotel: any,
    HotelNameAutoSuggest: any,
    lowestPrice: any,
    highestPrice: any,
    facilityId: any,
    hotelRooms: any,
    reloadFlag: any
}

const initialState: InitialState = {
    hotels: [],
    apiKey: '',
    autoSuggestResponse: { locations: [], status: '' },
    user_session_key: '',
    searchTracingKey: '',
    searchId: '',
    searchDestinationText: '',
    searchDestinationFromDate: '',
    searchDestinationToDate: '',
    adultsCount: 1,
    childrenCount: [],
    locationId: '',
    hotelDetailsId: "",
    hotelDetails: [],
    hotelDetailsAxios: [],
    starRating: [],
    minDistanceHotel: 0,
    maxDistanceHotel: 20,
    HotelNameAutoSuggest: [],
    lowestPrice: 0,
    highestPrice: 0,
    facilityId: [],
    hotelRooms: {},
    reloadFlag: ""
};


export const hotelSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        setSearchDestinationText: (state, action: PayloadAction<string>) => {
            state.searchDestinationText = action.payload;
        },
        setSearchDestinationFromDate: (state, action: PayloadAction<string>) => {
            state.searchDestinationFromDate = action.payload;
        },
        setSearchDestinationToDate: (state, action: PayloadAction<string>) => {
            state.searchDestinationToDate = action.payload;
        },
        setAdultsCountRedux: (state, action: PayloadAction<any>) => {
            state.adultsCount = action.payload;
        },
        setChildrenCountRedux: (state, action: PayloadAction<any>) => {
            state.childrenCount = action.payload;
        },
        // setChildrenAgeCountRedux: (state, action: PayloadAction<any>) => {
        //     state.childrenCount = action.payload;
        // },
        setLocationId: (state, action: PayloadAction<any>) => {
            state.locationId = action.payload;
        },
        //   setHotelDetailsId: (state, action: PayloadAction<any>) => {
        //     state.hotelDetailsId = action.payload
        //   },
        //   setHotelDetailsAxios:(state,action: PayloadAction<any>)=>{
        //     state.hotelDetailsAxios = action.payload
        //   },
        //   setStarRating:(state, action: PayloadAction<any>)=>{
        //     state.starRating = action.payload
        //   },
        //   setMaxDistanceHotel:(state, action: PayloadAction<any>) => {
        //     state.maxDistanceHotel = action.payload
        //   },
        //   setMinDistanceHotel:(state, action: PayloadAction<any>) => {
        //     state.minDistanceHotel = action.payload
        //   },
        //   setLowestPrice: (state, action: PayloadAction<any>) => {
        //     state.lowestPrice = action.payload
        //   },
        //   setHighestPrice: (state, action: PayloadAction<any>) => {
        //     state.highestPrice = action.payload
        //   },
        //   setFacilityId: (state, action: PayloadAction<any>) => {
        //     state.facilityId = action.payload
        //   }
    },

    extraReducers: (builder) => {
        builder.addMatcher(
            HotelApi.endpoints.getContext.matchFulfilled,
            (state, { payload }: any) => {
                state.user_session_key = payload.sessionKey;
                state.apiKey = payload.apiKey;
            },
        ),
            builder.addMatcher(
                HotelApi.endpoints.autoSuggest.matchFulfilled,
                (state, { payload }: any) => {
                    if (payload.status) {
                        state.autoSuggestResponse.locations = payload.locations;
                        state.autoSuggestResponse.status = payload.status;
                    }
                },
            )
    },
})

export const { setSearchDestinationFromDate, setSearchDestinationToDate, setAdultsCountRedux, setChildrenCountRedux, setSearchDestinationText, setLocationId } = hotelSlice.actions

export default hotelSlice.reducer