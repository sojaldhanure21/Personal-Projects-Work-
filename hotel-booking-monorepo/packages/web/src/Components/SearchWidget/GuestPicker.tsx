import { useEffect, useState } from "react";
import { useAppSelector } from "../../appStore/hooks";
import { setAdultsCountRedux, setChildrenCountRedux } from "../../appStore/hotelSlice";
import { useDispatch } from "react-redux";

function GuestPicker(props: any) {
    const [adultsCount, setAdultCount] = useState(1);
    let [childCount, setChildCount]: any = useState(0);
    const [childAgeCount, setChildAgeCount]: [any, any] = useState([])
    const dispatch = useDispatch();
    const adults = useAppSelector(state => state.hotel.adultsCount)

    const handleChildCountChange = (event: any) => {
        let count = event;
        if (count >= 0) {
            setChildCount(count++);
            setChildAgeCount(Array(count).fill(0));
        }
    };

    const handleChildAgeChange = (event: any, index: any) => {
        // const ages =[...childAgeCount].map(elem => {return {childAgeCount : elem}}) 
       const ages = [...childAgeCount];
        ages[index] = event;
        console.log("ages",ages)
        if (event >= 0) {
            setChildAgeCount(ages);
            setChildrenCountRedux(ages)
        }
    };

    useEffect(() => {
        if (adultsCount > 0) {
            dispatch(setAdultsCountRedux(adultsCount))
        }
        if (childCount >= 0) {
        dispatch(setChildrenCountRedux([]))
        }
        // if (childAgeCount > 0 && childAgeCount < 12) {
        //     dispatch(setChildrenAgeCountRedux(childAgeCount))
        // }
    }, [adultsCount, childCount])

    return (<>
        <div className="guest-selector">
            <div className="guest-picker">
                <span>Guest Details</span>
                <div className="guest-type">
                    <div className="adult-guest">
                        <span>Adults</span>
                        <div className="adult-selector">
                            <button onClick={() => setAdultCount(adults - 1)}>-</button>
                            <span>{adults}</span>
                            <button onClick={() => setAdultCount(adults + 1)}>+</button>
                        </div>
                    </div>
                    <div className="child-guest">
                        <span>Child</span>
                        <div className="child-selector">
                            <button onClick={() => handleChildCountChange(childCount - 1)}>-</button>
                            <span>{childCount}</span>
                            <button onClick={() => handleChildCountChange(childCount + 1)}>+</button>
                        </div>
                    </div>
                </div>
                {childAgeCount && childAgeCount.map((child: any, i: any) => {
                    return (i >=1 ? (<>
                        <div className="childage-count" key={i}>
                            <span>Children{ i }</span>
                            <div className="child-age">
                                <button onClick={() => handleChildAgeChange(child - 1, i)}>-</button>
                                <span>{child}</span>
                                <button onClick={() => handleChildAgeChange(child + 1, i)}>+</button>
                            </div>
                            <label>Years old</label>
                        </div>
                    </>) : i == 1 && i<2? (<>
                        <div className="childage-count" key={i}>
                            <span>Children</span>
                            <div className="child-age">
                                <button onClick={() => handleChildAgeChange(child - 1, i)}>-</button>
                                <span>{child}</span>
                                <button onClick={() => handleChildAgeChange(child + 1, i)}>+</button>
                            </div>
                            <label>Years old</label>
                        </div>
                    </>) : (<></>));
                })
                }
                <div className="guestform-submission">
                    <button>Continue</button>
                </div>
            </div>
        </div>
    </>);
}
export default GuestPicker;