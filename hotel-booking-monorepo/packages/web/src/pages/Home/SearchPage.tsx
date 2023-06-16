import { useNavigate } from 'react-router-dom'
import { useAutoSuggestQuery, useGetContextQuery } from '../../services/api/HotelApi'
import { setSearchDestinationFromDate, setSearchDestinationText, setSearchDestinationToDate, setAdultsCountRedux , setChildrenCountRedux, } from '../../appStore/hotelSlice'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../appStore/hooks'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass"
import { faCalendar } from "@fortawesome/free-regular-svg-icons/faCalendar"
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser"
import LocationAutoSuggestDropDown from '../../Components/SearchWidget/LocationAutosuggest'
import { useEffect, useReducer, useState } from 'react'
import GuestPicker from '../../Components/SearchWidget/GuestPicker'
import GuestSelection from '../../Components/SearchWidget/ChildCounts'
import DateRangeComponent from './DataRangeComponent'

function SearchWidget() {
    const [locationInput, setLocationInput] = useState('')
    const [locationInputValid, setLocationInputValid] = useState(false)
    const [guestInputValid, setGuestInputValid] = useState(false)
    const adults = useAppSelector( state=> state.hotel.adultsCount)
    const childs  = useAppSelector(state => state.hotel.childrenCount)
    const searchId = useAppSelector(state => state.hotel.user_session_key)
    const dates = useAppSelector(state => state.hotel.searchDestinationFromDate)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const moveToResults = () => {
        navigate('results')
    }

    useGetContextQuery();
    useAutoSuggestQuery(locationInput)

    const getInputEntered = (e: any) => {
        e.preventDefault();
        setLocationInput(e.target.value)
        setLocationInputValid(true);
    }

    const locationSelected = (city: any) => {
        setLocationInputValid(false)
        setLocationInput(String(city?.name))
    }

    useEffect(() => {
        if (locationInput.length > 0)
            dispatch(setSearchDestinationText(locationInput))

    }, [locationInput])

    const onDateChangedTo = (e: any) => {
        console.log(e.target.value)
        setSearchDestinationFromDate(e.target.value)
    }
    const onDateChangedFrom = (e: any) => {
        console.log(e.target.value)
        setSearchDestinationToDate(e.target.value)
    }

    const guestCountsSelector = () => {
        setGuestInputValid(true)
    }

    return (
        <>
            <div className='search-form-input'>
                <div className='location-input'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#c0bfbf", }} />
                    <div className='location-selector'>
                        <label>Location</label>
                        <input type='text' placeholder='Where do you want to go ?' onChange={(e) => getInputEntered(e)} value={locationInput}></input>
                    </div>
                    {locationInputValid && (
                        <div className='dropdown-selector'>
                            <LocationAutoSuggestDropDown locationSelected={locationSelected} />
                        </div>
                    )}
                </div>
                <div className='datepicker-picker'>
                    <FontAwesomeIcon icon={faCalendar} style={{ color: "#c4c4c4", }} />
                    <div className='date-selector'>
                        <label>When and how long is your trip?</label>
                        <DateRangeComponent/>
                        {/* <span>Wed, 24 May 23 - Thu, 25 May 23</span> */}
                    </div>
                </div>
                <div className='passenger-type'>
                    <FontAwesomeIcon icon={faUser} style={{ color: "#c4c4c4", }} />
                    <div className='passenger-selector'>
                        <label>Guest</label>
                        <span onClick={guestCountsSelector}> {adults} Adults, {childs} Child</span>
                    </div>

                    {guestInputValid && (
                        <GuestPicker />
                        // <GuestSelection/>
                    )}
                </div>
                <button onClick={moveToResults}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </>)
}
export default SearchWidget