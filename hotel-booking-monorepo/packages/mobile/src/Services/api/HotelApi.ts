import { Context } from "../../types";
import { api } from "../HotelBookingApi";

export const HotelApi = api.injectEndpoints({
    endpoints : build => ({
        getContext : build.query<Context, void>({
            providesTags:['hotel'],
            query: ()=> 'api/context?accountid=zentrum-demo-account&channelid=demo-channel'
        })
    }),
    overrideExisting: false
})

export const {useGetContextQuery} = HotelApi