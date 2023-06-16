import { faAngleDown, faMap, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { AgePicker } from "../LandingPage/AgePicker";
import { CustomTimePicker } from "../LandingPage/CustomTimePicker";
import { DateRangeComponent } from "../LandingPage/DateRange";
import { LocationInput } from "../LandingPage/LocationInput";
import '../../Styles/Styles Web/SCSS//Modify.css'
import '../../Styles/Styles Web/SCSS/HomePageSearchComponent.css'
import { staticAgeDropDown } from "../../utils/dateTimeHelperFunctions";
import { AgePickerModify } from "./AgePickerModify";

export const Modify = () => {
    const [onClick, setOnClick] = useState(false);
    const [age, setAge] = useState('Age 25+');
    const [diffLoc, setDiffLoc] = useState(false);

    return(
        <>
            <div className="ModifyContainer">
                <div className="DropOffCheckBox-Age">
                    <span className="DropOffCheckbox">
                        <input type="checkbox" onChange={()=>setDiffLoc(!diffLoc)}/> <span className="DropOffLabel">Drop-off location is the same</span>
                    </span>
                    <span className="AgeInModify">
                    
                        
                            
                                <AgePickerModify/>
                                
                            
        
                    </span>
                </div>
                <div className="Location-dates-time-modifyBtn">
                    {diffLoc?
                    (
                        <>
                            <LocationInput diffLoc={diffLoc} inputPlaceHolder={'Pick-up Location'}/>
                            <LocationInput diffLoc={diffLoc} inputPlaceHolder={'Drop-off Location'}/>
                        </>
                    )
                    :
                    (
                        <>
                            <LocationInput diffLoc={diffLoc} inputPlaceHolder={'Location'}/>
                        </>
                    )
                }
                    <span className="datePickerModify">
                        <DateRangeComponent idToOpenNext='pickUpTime' />
                    </span>
                    <span className="TimePickerPickUpModify">
                        <CustomTimePicker label='Pick-up time' id='pickUpTime' idToOpenNext='dropOffTime' />
                    </span>
                    <span className="TimePickerDropOffModify">
                        <CustomTimePicker label='Drop-off time' id='dropOffTime' />
                    </span>
                    <span className="ModifyBtn">
                        Modify
                    </span>
                </div>
            </div>
        </>
    )
}