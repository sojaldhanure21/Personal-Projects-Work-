import { useState } from "react";
import Filters from "./hotelResultFilter";

export default function FilterContainer() {
     const [ valid , setvalid] = useState(false)
     const buttonPressed = () => {
          setvalid(true)
     }      
     return ( <>
     <button  onClick={()=> buttonPressed()} > click for filter data</button>
        {  valid ? (<Filters/>) :null}
     
        </>)
}