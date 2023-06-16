// import { useAppSelector } from "../../appStore/hooks";

// function ChildCounts(props: any) {
//     const childAge = useAppSelector(state => state.hotel.childrenCount)

//     return (
//         <>
//             {/* <div className="childage-count">
//                 <span>Children {props.childsNo > 0 ? props.childsNo : ''} </span>
//                 <div className="child-age">
//                     <button onClick={() => props.childCountSet(childAge - 1)}>-</button>
//                     <span>{childAge}</span>
//                     <button onClick={() => props.childCountSet(childAge + 1)}>+</button>
//                 </div>
//                 <label>Years old</label>
//             </div> */}
//         </>
//     );
// }
// export default ChildCounts;

import React, { useState } from 'react';

const GuestSelection = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [childAges, setChildAges] : [any,any] = useState([]);

  const handleAdultCountChange = (event :any) => {
    setAdultCount(parseInt(event.target.value));
  };

  const handleChildCountChange = (event: any) => {
    const count = parseInt(event.target.value);
    setChildCount(count);
    setChildAges(Array(count).fill(0));
  };

  const handleChildAgeChange = (event: any, index:any)  => {
    const ages  = [...childAges];
    ages[index]  =parseInt(event.target.value);
    setChildAges(ages);
  };

  return (
    <div>
      <div>
        <label htmlFor="adultCount">Adults:</label>
        <input
          type="number"
          id="adultCount"
          min="1"
          value={adultCount}
          onChange={handleAdultCountChange}
        />
      </div>
      <div>
        <label htmlFor="childCount">Children:</label>
        <input
          type="submit"
          id="childCount"
          min="0"
          value={childCount}
          onChange={handleChildCountChange}
        />
      </div>
      {childCount > 0 && (
        <div>
          <p>Child ages:</p>
          {childAges.map((age :any, index :any) => (
            <div key={index}>
              <label htmlFor={`childAge${index}`}>Child {index + 1}:</label>
              <input
                type="number"
                id={`childAge${index}`}
                min="0"
                value={age}
                onChange={(event) => handleChildAgeChange(event, index)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GuestSelection;
