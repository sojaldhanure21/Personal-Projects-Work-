import React, { useState } from 'react'
import { currencies } from '../Data Constant/Constants'
import '../Styles/Styles Mobile/SCSS/HeadNavigationMobile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Select from 'react-select'
function NavigationMobile() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };
    const mainCarLogo = require('../assets/Techspian-Logo.png')
    const currency = currencies
    const currancySelector = (e: any) => {
        console.log(e.target.value)
    }

    return (<>
        <div className='header-main-mob'>
            <div className='header-top-mob'>
                <div className='contact-info'>
                    <img src={mainCarLogo} />
                </div>
                <div className="menu-bar">
                    <div className="menu-icon" onClick={handleMenuClick}>
                        <i><FontAwesomeIcon icon={faBars as IconProp} /></i>
                    </div>
                    <div className={`menu ${isOpen ? 'open' : ''}`}>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>
                                <div className='currancies'>
                                    <Select 
                                            classNamePrefix='currancy-selector'
                                            placeholder='Currancies'
                                            options={currency}
                                            autoFocus={closed}
                                            onChange={currancySelector}
                                        />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='header-bottom-mob'>
                {/* <img className='header-bottom' src={mainCarLogo} /> */}
                <label>
                </label>
            </div>
        </div>
    </>
    )
}
export default NavigationMobile