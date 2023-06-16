import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../appStore/hooks";
import {faLocationPin} from "@fortawesome/free-solid-svg-icons/faLocationPin"
// import { locations } from "../../utils/constant";
    
function LocationAutoSuggestDropDown(props : any) {
const locations = useAppSelector(state => state.hotel.autoSuggestResponse.locations)
    return (<>
        <div className="autosuggest-dropdown">
            <div className="autosuugest-location">
            {locations.map((city: any) => {
                return (<div className="autosuggest-individual" onClick={()=> props.locationSelected(city)}>
                    <div className="location-icon">
                    <FontAwesomeIcon icon={faLocationPin} style={{color: "#f76464",}} />
                    </div>
                    <div className="cityname">{city.name}, {city.country}</div>
                </div>)
            })
            }
            </div>
        </div>
    </>);
}

export default LocationAutoSuggestDropDown;