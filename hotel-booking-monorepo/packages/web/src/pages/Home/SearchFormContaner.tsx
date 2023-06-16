import SearchWidget from "./SearchPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import {faCircleChevronLeft} from "@fortawesome/free-solid-svg-icons/faCircleChevronLeft"
import {faCircleChevronRight} from"@fortawesome/free-solid-svg-icons/faCircleChevronRight"
function SearchFormContainer() {
    return (<>
        <div className="homepage-main">
            <div className="homepage-frames">
                <iframe src="https://igoroom.com/vt/ScubaSpa/?noui" />
            </div>
            <div className="homepage-navigation">
                <div className="homepage-container">
                    <div className='navbar-tabs'>
                    <FontAwesomeIcon icon={faCircleChevronLeft} />
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                    </div>
                    <div className="input-container">
                        <div className="search-bar">
                            <ul className="searchbar-navigation">
                                <li>Latest offer</li>
                                <li>Accomodations</li>
                                <li>VIP</li>
                                <li>Explore</li>
                            </ul>
                            <div className="searchbar-tab">
                                <SearchWidget />
                            </div>
                        </div>
                        <div className="footer-homepage">
                            <span>© 2023 Igotopia Sdn Bhd</span>
                            <ul>
                                <li><a href="">Privacy</a></li>
                                <li><a href="">Terms</a></li>
                                <li><a href="">Support</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="support">
                        <button>
                        <FontAwesomeIcon icon={faMessage} />                            
                            <span>Need Help?</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </>);
}

export default SearchFormContainer;