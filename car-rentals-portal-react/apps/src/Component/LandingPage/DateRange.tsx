import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import "../../Styles/Styles Web/SCSS/CustomTimePicker.css";
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { staticTimeDropDown, getMonth } from "../../utils/dateTimeHelperFunctions";
import { addDays } from 'date-fns';
import { DateRange, Range } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export const DateRangeComponent = (props: any) => {
    const [onClick, setOnClick] = useState(false);
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(addDays(new Date(), 7))
    const refOne = useRef(null)
    const [datePicker, setDatePicker] = useState(false)
    const [dateSelectionCount, setDateSelectionCount] = useState(1);
    const [state, setState] = useState<Range[]>([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    if (dateSelectionCount > 1) {
        console.log('hellow')
    }
    const windowSize: any = useRef([window.innerWidth, window.innerHeight])

    console.log(windowSize.current[0])
    return (
        <>
            {windowSize.current[0] > 768 ?
                //Desktop View Starts Here
                (<div onClick={() => setOnClick(!onClick)} className="DatePickerContainer" id="date">
                    <span className="FirstIcon">
                        <FontAwesomeIcon icon={faCalendar} />
                    </span>
                    <span className="LabelandDateSelect">
                        <span className="labelDate">
                            <span>Pick-up date</span>  <span className="DropOff_label">Drop-off date</span>
                        </span>
                        <span className="DatePickerSelect">
                            <div className="SelectedTime">
                                <span>{String(startDate.getDate()) + ' ' + (String(getMonth(startDate.getMonth() + 1))) + ' ' + String(startDate.getFullYear())}</span> &nbsp; - &nbsp; <span>{String(endDate.getDate()) + ' ' + (String(getMonth(endDate.getMonth() + 1))) + ' ' + String(endDate.getFullYear())}</span>
                            </div>
                        </span>
                    </span>
                </div>) :
                // Mobile View Starts Here 
                (<div onClick={() => setOnClick(!onClick)} className="DatePickerContainer" id="date">
                    <div className="datePicker-contents">
                        <div className="pickup-dates">
                            <div className="FirstIcons">
                                <FontAwesomeIcon icon={faCalendar} />
                            </div>
                            {!datePicker ? (<span className="labelDates">
                                <span>Pick-up date</span>
                            </span>) :
                                (<div className="datePickerSelectMob">
                                    <div className="SelectedTimePick">
                                        <span>{String(startDate.getDate()) + ' ' + (String(getMonth(startDate.getMonth() + 1))) + ' ' + String(startDate.getFullYear())}</span>
                                    </div>
                                </div>)}
                        </div>

                        <div className="drop-off-dates">
                            <div className="FirstIcons">
                                <FontAwesomeIcon icon={faCalendar} />
                            </div>
                            {!datePicker ? (<span className="labelDates" >
                                <span className="DropOff_label">Drop-off date</span>
                            </span>) :
                                (<div className="datePickerSelectMob">
                                    <div className="SelectedTimeDrop">
                                        <span>{String(endDate.getDate()) + ' ' + (String(getMonth(endDate.getMonth() + 1))) + ' ' + String(endDate.getFullYear())}</span>
                                    </div></div>)}
                        </div>
                    </div>
                </div>)}
            {/* Date Picker Container Logic */}
            {onClick && (
                <>
                    <div className="DatePickerElement" ref={refOne}>
                        <DateRange
                            className={windowSize.current[0] < 977 ? "DateRanges" : ""}
                            onChange={(item: any) => {
                                setDateSelectionCount(dateSelectionCount + 1)
                                setStartDate(item.selection.startDate)
                                setEndDate(item.selection.endDate)
                                if (dateSelectionCount == 2) {
                                    setOnClick(false)
                                    setDateSelectionCount(1)
                                    setDatePicker(true)
                                    const element = document.getElementById(props?.idToOpenNext)
                                    element?.click()
                                }

                                setState([item.selection])
                                console.log('awesome', item.selection, 'fan', dateSelectionCount)
                                console.log('hello', new Date())
                            }}
                            showMonthAndYearPickers={false}
                            editableDateInputs={true}
                            moveRangeOnFirstSelection={false}
                            months={2}
                            ranges={state}
                            direction="horizontal"
                            preventSnapRefocus={true}
                            calendarFocus="forwards"
                            minDate={startDate}
                        />
                    </div>
                </>
            )}
        </>
    )
}