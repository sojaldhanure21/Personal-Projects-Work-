import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../../Styles/Styles Web/SCSS/AgesPickers.css";
import { faPerson } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { staticAgeDropDown } from "../../utils/dateTimeHelperFunctions";

export const AgePickerModify = () => {
    const [onClick, setOnClick] = useState(false);
    const [age, setAge] = useState('Age 25+');

    return(
        <>
            <div onClick={() => setOnClick(!onClick)} className="TimePickerContainer" id='agePicker'>
                                    <span className="FirstIconAgePickerModify">
                                        <FontAwesomeIcon icon={faPerson} />
                                    </span>
                                    <span className="LabelandTimeSelect">
                                        <span className="AgePickerValueModify">
                                            <div className="SelectedTimeAgePickerModify">
                                                {age}
                                            </div>
                                        </span>
                                    </span>
                                    <div className="LastIconAgePickerModify">
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </div>
                                </div>
                             
                                {onClick && (
                                    <>
                                    <div className="DropDown">
                                        {staticAgeDropDown.map(
                                            val =>
                                            (
                                                <div className="DropDownOption"
                                                    onClick={() => {
                                                        setAge(String(val))
                                                        setOnClick(false);
                                                    }}

                                                    key={val}
                                                >
                                                    {val}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </>
                                )}
        </>
    )
}