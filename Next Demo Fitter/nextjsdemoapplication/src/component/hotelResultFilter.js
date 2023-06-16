import { useGetFilterDataMutation } from "@/redux/hotelApi";
import { store } from "@/redux/store";
import RangeSlider from 'react-range-slider-input';
import { Slider } from "@mui/material";
import React, { useState } from "react";
// import '../component/hotelfilter.css'
const Filters = () => {
    const [view, setView] = useState("Map");
    const [lowPrice, setLowPrice] = useState(0)
    const [highPrice, setHighPrice] = useState(6000)
    const [filters] = useGetFilterDataMutation()
    let payload = {
        filterGroup1: {
            'filters': {
                'priceGroups': [
                    {
                        "minPrice": lowPrice,
                        "maxPrice": highPrice
                    }
                ]
            }
        },
        searchId: store.getState().hotel.searchId,
        userSessionKey: store.getState().hotel.user_session_key

    }

    const setPriceFilters = async (e) => {
        e.preventDefault()
        if (e.target.value[0]) {
            setLowPrice(e.target.value[0])
        }
        if (e.target.value[1]) {

            setHighPrice(e.target.value[1])
        }

        const { data, error, status } = await filters(payload)
        console.log("filtered data", data, error, status)
        console.log('Price change', lowPrice, highPrice)
    }
    // const pricefilters =  async( min) =>{
    //             const {data , error , status } = await filters(payload)

    // }
     
    return (
        <>
            <div className="mainFilterConatiner">
                <div className="viewSwitchbgImg">
                    <button className="viewSwitchBtn">
                    Show {view} View
                    </button>
                    <br/>
                    <label>Filters</label>
                    <button>Reset All</button>
                    <br/>
                    <label>Price</label><br/>
                    <labe> $ {lowPrice} to $ {highPrice}</labe><br/>
                    <div  style = {{width :'20%', marginLeft :'20px'}}>
                    {/* <RangeSlider
                    min = {0}
                    max = {6000}
                    step = '1'
                    defaultValue = {[0,6000]}
                    onRangeDragStart = { setStartDrag () }
                    // value	= {[ lowPrice , highPrice]}
                    orientation ='vertical'
                    onInput = {(min) => setPriceFilters(min)}

                    /> */}

                <Slider 
                    min ={lowPrice}
                    max = { highPrice}
                    step={1} 
                    marks
                    // disableSwap
                    value= {[lowPrice,highPrice]}
                    orientation={'horizontal'}
                    onChange = {(min)=>setPriceFilters(min )}
                     
                    />
                    </div> 
                    <br/>
                </div>
            </div>
        </>
    )
}
export default Filters;