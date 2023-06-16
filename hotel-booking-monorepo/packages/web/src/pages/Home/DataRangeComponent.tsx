import { useState } from "react";

function DateRangeComponent() {
    const [datePicker ,setDatePicker]=useState()
    const [datePikerValid,setDatePickerValid] =useState(false)

    const dateSelectors =() =>{
        setDatePickerValid(true)
    }
return (<>
<div className="dateranges-component">
    <span onClick={dateSelectors}> 3 may 2023</span>
    {datePikerValid && datePikerValid ? (<>
    <div className="datepicker-element">
        
    </div>
    </>):""}
</div>    
</>  );
}

export default DateRangeComponent;