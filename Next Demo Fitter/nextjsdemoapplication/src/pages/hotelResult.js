import React, { FC, useEffect, useState } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { CardItem } from "../component/cardItem";
import Box from '@mui/material/Box';
//import '../styles/landingPage.css'
// import axios from "axios";
import Skeleton from '@mui/material/Skeleton';
import ResponsiveAppBar from "@/component/modifySearch";
import { useGetContextQuery, getRunningQueriesThunk, hotelApi } from "@/redux/hotelApi";
import { wrapper } from "@/redux/store";
import Filters from "@/component/hotelResultFilter";

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        let payload = {
            searchId: store.getState().hotel.searchId,
            apiKey: store.getState().hotel.apiKey,
            searchTracingKey: store.getState().hotel.searchTracingKey
        }
        // let payload = {
        //     searchId: "ae72aa55-a21c-48a2-bd7a-97040990dc4e",
        //     apiKey: ".TravelApi.Session=CfDJ8IW%2FiZDKA%2BJHiMV0QmD%2BSnUio4Jf0fyBqPTyQgVQ3RsEO82dSBEwPuLxBHMc2d0p2%2BAigBo8%2F9v4FTxtY3MKpR4OoT5T%2BF7t1I7ySTjVzrPsw9eSiuq3taqhS0mb4pvxJ3puKGQfhD3MmwtHbYY2pr4N6rwECiyOc3bFnj3571u7",
        //     searchTracingKey: "50a35917-7b35-4139-abeb-58284cac0b49"
        // }
        store.dispatch(hotelApi.endpoints.getHotelResult.initiate(payload));
        await Promise.all(store.dispatch(hotelApi.util.getRunningQueriesThunk()))
        return {
            props: {},
        };
    }
);


const HotelResultPage = (props) => {
    const [hotels, setHotels] = useState(props?.initialState?.hotel?.hotels);
    // const skelMap = [1,1,1,1,1,1,1]
    // useEffect(()=>{
    //     console.log(hotels)
    //     if(hotels.length == 0){
    //         setLoading(true)
    //     }
    // },[])

    return (
        <>
            <ResponsiveAppBar />
            <div style={{ marginLeft: "35vw" }}>
                <Box sx={{ flexGrow: 1, overflow: 'hidden' }} >
                    <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            // loading ?
                            //     skelMap.map((key) =>
                            //     (
                            //         <Grid xs={4} sm={8} md={12} key={key}>
                            //             <Skeleton variant="rectangular" width={"62vw"} height={250} />
                            //             <div style={{ paddingTop: "10px", paddingBottom: "2.5px" }}>
                            //                 <Skeleton variant="rectangular" width={320} height={10} />
                            //             </div>
                            //             <div style={{ paddingTop: "2.5px", paddingBottom: "2.5px" }}>
                            //                 <Skeleton variant="rectangular" width={320} height={10} />
                            //             </div>
                            //             <div style={{ paddingTop: "2.5px", paddingBottom: "2.5px" }}>
                            //                 <Skeleton variant="rectangular" width={250} height={10} />
                            //             </div>
                            //             <div style={{ paddingTop: "2.5px", paddingBottom: "2.5px" }}>
                            //                 <Skeleton variant="rectangular" width={200} height={10} />
                            //             </div>
                            //         </Grid>
                            //     ))
                            //     :
                                hotels.map((hotel) =>
                                (
                                    <Grid xs={4} sm={9} md={12}>
                                        <CardItem hotel={hotel} />
                                    </Grid>
                                )
                                )
                        }

                    </Grid>
                </Box>
            </div>
            <Filters/>
        </>
    )
}
export default HotelResultPage;