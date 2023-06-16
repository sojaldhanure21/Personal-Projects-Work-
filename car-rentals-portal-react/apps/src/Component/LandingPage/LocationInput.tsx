import { faMap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { locations } from '../../utils/dateTimeHelperFunctions'
import { LocationAutoSuggestDropDown } from './LocationAutoSuggestDropDown'
import '../../Styles/Styles Web/SCSS/HomePageSearchComponent.css'

export const LocationInput = ({diffLoc, inputPlaceHolder}:any) => {
    const [autoSuggestDropDownToggle, setAutoSuggestDropDownToggle] = useState(false)
    const [selectedLocation, setSelectedLocation] = useState('')
    const locationSelected = (city:any) => {
        setAutoSuggestDropDownToggle(false)
        setSelectedLocation(String(city?.fullName))
    }
    const inputDetected = (text:any) => {
        console.log('qaqaaaq',autoSuggestDropDownToggle)
        console.log('qqqq',text.target.value)
        if(text.target.value) {
            setSelectedLocation(text.target.value)
            setAutoSuggestDropDownToggle(true)
        }
        else{
            setSelectedLocation(text.target.value)
            setAutoSuggestDropDownToggle(false)
        }
    }
    return(
        <>
            <div className={diffLoc?"locationInputContainerModifyDiffLoc":"locationInputContainerModify"}>
                <FontAwesomeIcon icon={faMap} style={{ 'position': 'absolute', 'color': '#009FE3', 'zIndex': '999', 'marginLeft': '1.5vw', 'marginTop': '2.5vh' }} />
                <input className={diffLoc?"locationInputModifyDiffLoc":"locationInputModify"} onChange={(e: any) => inputDetected(e)} placeholder={inputPlaceHolder} value={selectedLocation} />
                {
                    autoSuggestDropDownToggle && (<div>
                        <LocationAutoSuggestDropDown autoSuggestions={locations} locationSelected={locationSelected} />
                    </div>)
                }
            </div>  
        </>
    )
}