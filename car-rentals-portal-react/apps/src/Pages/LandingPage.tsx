import React, { useState, useRef, useEffect } from "react";
import '../Styles/Styles Web/SCSS/HomePageSearchComponent.css'
import { DateRange, Range } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { locations } from "../utils/dateTimeHelperFunctions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import { CustomTimePicker } from "../Component/LandingPage/CustomTimePicker";
import { AgePicker } from "../Component/LandingPage/AgePicker";
import { DateRangeComponent } from "../Component/LandingPage/DateRange";
import { LocationInputHome } from "../Component/LandingPage/LocationInputHome";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {

    const [searchPayload, setSearchPayload] = useState<any>(
        {
            //add the payload for the search api call
        }
    );
    const [autoSuggestDropDownToggle, setAutoSuggestDropDownToggle] = useState(false)
    const [selectedLocation, setSelectedLocation] = useState('')
    const [diffLoc, setDiffLoc] = useState(false)
    const navigate = useNavigate()
    const windowSize: any = useRef([window.innerWidth, window.innerHeight])

    const moveResults = () => {
        navigate('/results')
    }
    return (
        <>
            <div className="HomeSearchBody">
                <div className="DisplayText">Find your best car with Kanopii</div>
                <div className="SearchContainer">
                    <div className={diffLoc ? windowSize.current[0]< 1200 ? "locationInputContainer-expand":"locationInputContainer" : "locationInputContainer"}>
                    {diffLoc?
                    (
                        <>
                            <LocationInputHome diffLoc={diffLoc} inputPlaceHolder={'Pick-up Location'}/>
                            <LocationInputHome diffLoc={diffLoc} inputPlaceHolder={'Drop-off Location'}/>
                        </>
                    )
                    :
                    (
                        <>
                            <LocationInputHome diffLoc={diffLoc} inputPlaceHolder={'Location'}/>
                        </>
                    )
                }
                    </div>
                    <div className="checkBoxDifferentLocation">
                        <input type="checkbox" id="diffLoc" name="diffLoc" value="differentLoaction" onChange={()=>setDiffLoc
                        (!diffLoc)}></input>
                        <label> Return car to different location</label><br></br>
                    </div>
                    <div className="thirdLine">
                        <span className="datePicker" >
                            <DateRangeComponent idToOpenNext='pickUpTime'/>
                        </span>
                        <div className="pickup-dropoff-time-container">
                            <span className="PickUp-DropOff-Time">
                                <CustomTimePicker label='Pick-up time' id='pickUpTime' idToOpenNext='dropOffTime'/>
                            </span>

                            <span className="PickUp-DropOff-Time DropOffOnly">
                                <CustomTimePicker label='Drop-off time' id='dropOffTime' idToOpenNext='agePicker'/>
                            </span>
                        </div>
                    </div>
                    <div className="AgeDrop">
                        <div>
                            <AgePicker />
                        </div>
                    </div>

                    <div className="FreeCancelationText">
                        <span>
                            Book a car with free cancellation for flexibility
                        </span>
                    </div>

                    <div className="SearchCarButton">
                        <span onClick={moveResults}>
                            SEARCH CAR
                        </span>
                    </div>
                </div>
            </div>
        </>)
}   