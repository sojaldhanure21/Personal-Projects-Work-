import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../../Styles/Styles Web/SCSS/CustomTimePicker.css";
import { faUserClock } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { staticTimeDropDown } from "../../utils/dateTimeHelperFunctions";

export const CustomTimePicker = (props: any) => {
    const [onClick, setOnClick] = useState(false);
    const [time, setTime] = useState(String(new Date().getHours()) + ':00');

    return (
        <>
            <div onClick={() => setOnClick(!onClick)} className="TimePickerContainer" id={props.id}>
                <span className="FirstIcon">
                    <FontAwesomeIcon icon={faUserClock} />
                </span>
                <span className="LabelandTimeSelect">
                    <span className="label">
                        {props.label}
                    </span>
                    <span className="TimePickerSelect">
                        <div className="SelectedTime">
                            {time}
                        </div>
                    </span>
                </span>
                <div className="LastIcon">
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
            {onClick && (
                <>
                    <div className="DropDown">
                        {staticTimeDropDown.map(
                            val =>
                            (
                                <div className="DropDownOption"
                                    onClick={() => {
                                        setTime(String(val))
                                        setOnClick(false);
                                        const element = document.getElementById(props?.idToOpenNext)
                                        element?.click();
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