import { faMap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { LocationAutoSuggestDropDown } from './LocationAutoSuggestDropDown'
import '../../Styles/Styles Web/SCSS/HomePageSearchComponent.css'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { useAutosuggestQuery } from '../../services/api/CarApi'

export const LocationInputHome = ({diffLoc, inputPlaceHolder}:any) => {
    const [autoSuggestDropDownToggle, setAutoSuggestDropDownToggle] = useState(false)
    const [selectedLocation, setSelectedLocation] = useState('')
    useAutosuggestQuery(selectedLocation)
    const dispatch = useAppDispatch();
    const locationSelected = (city:any) => {
        setAutoSuggestDropDownToggle(false)
        setSelectedLocation(String(city?.fullName))
    }
    const inputDetected = (text:any) => {
        setSelectedLocation(text.target.value)
        if(String(text.target.value).length) {
            setAutoSuggestDropDownToggle(true)
        }
        else{
            setAutoSuggestDropDownToggle(false)
        }
    }
    return(
        <>
            <div className={diffLoc?"locationInputContainerModifyDiffLocHome":"locationInputContainerModifyHome"}>
                <FontAwesomeIcon icon={faMap} style={{ 'position': 'absolute', 'color': '#009FE3', 'zIndex': '999'}} />
                <input className={diffLoc?"locationInputModifyDiffLocHome":"locationInputModifyHome"} onChange={(e: any) => inputDetected(e)} placeholder={inputPlaceHolder} value={selectedLocation} />
                {
                    autoSuggestDropDownToggle && (<div>
                        <LocationAutoSuggestDropDown locationSelected={locationSelected} />
                    </div>)
                }
            </div>  
        </>
    )
}