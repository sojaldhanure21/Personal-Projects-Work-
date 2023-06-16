import { useState } from "react";
import { getMonth } from "../../utils/constant";
import { addDays } from "date-fns";
import {DateRange, Range} from "react-date-range"
function DateRangePicker() {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(addDays(new Date(), 7))
    const [dateSelectionCount, setDateSelectionCount] = useState(1);


    const [state, setState] : any = useState<Range[]>([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }])

    return (<>
        <div className="daterange-picker">
            <div className="date-ranges">
                <DateRange />
            </div>
        </div>
    </>);
}

export default DateRangePicker;