import React from 'react';
import "../../Styles/Styles Web/SCSS/CustomTimePicker.css";
import { useAppSelector } from '../../redux/hooks';

export const LocationAutoSuggestDropDown = (props:any) => {

    return(
        <>
            <div className="autoSuggestDropDownContainer">
                {
                    useAppSelector((state) => state.car.autoSuggestResponse?.locations).map((city:any)=>{
                        return (<div className='autoSuggestIndividual' onClick={()=>props.locationSelected(city)}>
                            <div className='autoSuggestName'>{city.name}</div>
                            <div className='autoSuggestFullName'>{city.fullName}</div>
                        </div>)
                    })
                }
            </div>
        </>
    )
}