import '../../layout/home.css'
import DatePicker from 'react-datepicker'
import { useEffect, useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { useGetAutoSuggestQuery, useInitHotelSearchMutation } from '@/redux/hotelApi';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import moment from 'moment/moment';
import { Router, useRouter } from 'next/router';



function HomePage() {
    const cityName2 = useSelector((state) => state.hotel.autoSuggestResponse)
    let today = new Date();
    const [startDate, setStartDate] = useState(new Date())
    let someDate = new Date();
    let numberOfDaysToAdd = 2;
    let result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    let toDateStart = new Date(result)
    const [toDate, setToDate] = useState(toDateStart)
    const [cityName, setCityName] = useState("")
    const [selectedCity, setSelectedCity] = useState("")
    const [options, setOptions] = useState([])
    const [adultCnt, setAdultCount] = useState(2);
    const [childCnt, setChildCount] = useState(0);
    const [id,setID]=useState('');
    const [fullCityName, setFullCityName] = useState('');
    const [validation,setValidation]=useState(false);

    const [initSearch] = useInitHotelSearchMutation()
    const router = useRouter()

    useEffect(() => {
        let names = []
        if (cityName2.locations) {
            cityName2?.locations?.forEach(city => {
                names.push({ label: city?.fullName, value: city?.id })
            })
            setOptions(names)
        }


    }, [cityName2])

    const onChangeHandler = (value) => {
        setCityName(value)
    }

    const onSearchHandler = async() => {
        let valid = true;
        if(selectedCity==""){
            valid = false;
            setValidation(true);    
        }

        if(valid){
            let payload = {
                "culture": "en-us",
                "currency": "USD",
                "checkIn": moment(startDate).format("MM/DD/YYYY"),
                "checkOut": moment(toDate).format("MM/DD/YYYY"),
                "rooms": [
                    {
                        "adults": adultCnt,
                        "children": childCnt,
                        "childAges": []
                    }
                ],
                "countryOfResidence": "US",
                "nationality": "US",
                "locationId": id,
                "fullName": fullCityName,
                "channelId": ""
            }
    
            const { data, error, isLoading } = await initSearch(payload)
            
            console.log("status",data,error,isLoading)
            if(data.status=='success'){
                router.push('/hotelResult')
            }else{
                alert('Failed')
            }


        }

    }

    const onSearchSelected = (value) => {
        
        setSelectedCity(value)
        setID(value?.value)
        setFullCityName(value?.label)
        setValidation(false)

    }

    const blockInvalidChar = e => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()

    const handleAdultsCountAdd = () => {
        if (adultCnt < 4) {
            let cnt = parseInt(adultCnt, 10) + 1;
            setAdultCount(cnt)
        }
    };

    const handleAdultsCountSub = () => {
        if (adultCnt > 1) setAdultCount(adultCnt - 1);
    };

    const handleAdultChange = (e) => {
        var numbers = /^[0-9\b]+$/;
        let val = e.target.value.trim();
        if (val.match(numbers) || val == "") {
            if (val <= 4 ) {
                let str = e.target.value.trim().toString();
                if (e.target.value % 1 === 0 && str.substr(str.length - 1) !== ".") {
                    setAdultCount(e.target.value)
                }
            }
        }
    };

    const handleChildCountAdd = () => {
        if (childCnt < 4) {
            let cnt = parseInt(childCnt, 10) + 1;
            setChildCount(cnt)
        }
    };

    const handleChildCountSub = () => {
        if (childCnt > 0) setChildCount(childCnt - 1);
    };

    const handleChildChange = (e) => {
        var numbers = /^[0-9\b]+$/;
        let val = e.target.value.trim();
        if (val.match(numbers) || val == "") {
            if (val <= 4 ) {
                let str = e.target.value.trim().toString();
                if (e.target.value % 1 === 0 && str.substr(str.length - 1) !== ".") {
                    setChildCount(e.target.value)
                }
            }
        }
    };

    useGetAutoSuggestQuery(cityName)

    return (
        <main>
            <p style={{ "backgroundColor": "white" }}>SMARTERTRAVELS</p>
            <>

                <img
                    src="https://images.hopjump.com/image/upload/c_limit/c_fill,q_auto:eco,w_auto/smartertravel/smarter_homepage_desktop.jpg"
                />
                <div style={{ "position": "absolute", "top": "170px", "left": "515px" }}>
                    <p style={{ "font-size": "60px", "color": "white", "margin-left": "-90px", "fontFamily": "sans-serif" }}>Hotel deals, delivered</p>
                    <p style={{ "color": "white", "font-size": "20px", "font-weight": "600" }}>Save up to 50% off retail with our insider hotel deals</p>
                    <Select
                        //ref={selectRef}
                        value={selectedCity}
                        name="city"
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={onSearchSelected}
                        options={options}
                        placeholder="Select City"
                        components={{
                            DropdownIndicator: () => null,
                            IndicatorSeparator: () => null,
                            NoOptionsMessage: () => null
                        }}
                        onInputChange={onChangeHandler}
                        //isDisabled={(location.pathname !== "/") && (location.pathname !== "/HeaderMyFiles") && (location.pathname !== "/MySavedQuotes")  && (location.pathname !== "/SearchResults") && (location.pathname !== "/SearchResultsFlexiDate") && (location.pathname !== "/calculator")}
                        isClearable
                        required={true}

                    //formatOptionLabel={formatOptionLabel}
                    //filterOption={createFilter({ignoreAccents: false})}
                    />
                    {validation && <span style={{"color":"red"}}>* Required </span>}
                    <div className="col-md-12" style={{ "display": "inline", "width": "250px" }}>
                        <span className="col-md-3">
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} monthsShown={2} minDate={today} />
                        </span>
                        <span className="col-md-6">
                            <DatePicker selected={toDate} onChange={(date) => setToDate(date)} monthsShown={2} minDate={startDate} />
                        </span>
                        <span>
                            <>
                                <div className="col-4 p-xs  col-md-4 pr-md-0">
                                    <div className="form-group">
                                        <label className="serach_label">
                                            Adults<span>12+</span>
                                        </label>
                                        <div className="btn-group">
                                            <button
                                                className="fas fa-minus serach_min_plusIcon"
                                                aria-hidden="true"
                                                onClick={handleAdultsCountSub}
                                                disabled={adultCnt == 1 ? true : false}
                                            >-</button>
                                            <input
                                                type="text"
                                                className="form-control serach_NumInput"
                                                value={adultCnt}
                                                onKeyDown={blockInvalidChar}
                                                onChange={handleAdultChange}
                                            />
                                            <button
                                                className="fas fa-plus serach_min_plusIcon"
                                                aria-hidden="true"
                                                onClick={handleAdultsCountAdd}
                                                disabled={adultCnt == 4 ? true : false}
                                            >+</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        </span>
                        <span>
                            <>
                                <div className="col-4 p-xs  col-md-4 pr-md-0">
                                    <div className="form-group">
                                        <label className="serach_label">
                                            Children<span>0-17 Years</span>
                                        </label>
                                        <div className="btn-group">
                                            <button
                                                aria-hidden="true"
                                                onClick={handleChildCountSub}
                                                disabled={childCnt == 0 ? true : false}
                                            >-</button>
                                            <input
                                                type="text"
                                                value={childCnt}
                                                onKeyDown={blockInvalidChar}
                                                onChange={handleChildChange}
                                            />
                                            <button
                                                aria-hidden="true"
                                                onClick={handleChildCountAdd}
                                                disabled={childCnt == 3 ? true : false}
                                            >+</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        </span>

                    </div>
                    <button onClick={onSearchHandler}>Search</button>
                </div>
            </>
        </main>
    )
}

export default HomePage
