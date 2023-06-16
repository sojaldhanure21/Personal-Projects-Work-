import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../../Styles/Styles Web/SCSS/AgesPickers.css";
import { faPerson } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { staticAgeDropDown } from "../../utils/dateTimeHelperFunctions";

export const AgePicker = () => {
    const [onClick, setOnClick] = useState(false);
    const [age, setAge] = useState('Age 25+');

    return(
        <>
            <div onClick={() => setOnClick(!onClick)} className="TimePickerContainerss" id='agePicker'>
                                    <span className="FirstIcon">
                                        <FontAwesomeIcon icon={faPerson} />
                                    </span>
                                    <span className="LabelandTimeSelect">
                                        <span className="AgePickerValue">
                                            <div className="SelectedTime">
                                                {age}
                                            </div>
                                        </span>
                                    </span>
                                    <div className="LastIcon">
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </div>
                                </div>
                             
                                {onClick && (
                                    <>
                                    <div className="DropDowns">
                                        {staticAgeDropDown.map(
                                            val =>
                                            (
                                                <div className="DropDownOptions"
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