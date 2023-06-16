import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { currencies } from '../../Data Constant/Constants'
import Select from 'react-select'
import '../../Styles/Styles Web/SCSS/HeaderNavigation.css'
import NavigationMobile from '../../Mobile/HeadNavigationMobile'
function Navigation() {
    const navigate = useNavigate();
    // const mainHeadLogo = require('../../assets/kanopii-logo.png')
    const hotelsIcon = require('../../assets/icon_Hotel.svg')
    const activitiesIcon = require('../../assets/activity-logo.svg') as string
    const carsIcon = require('../../assets/icon_Car.svg') as string
    const flightsIcon = require('../../assets/flight-logo.svg') as string
    const techspian = require('../../assets/Techspian-Logo.png')
    const currency = currencies
    const windowSize : any  = useRef([window.innerWidth, window.innerHeight])
    
    const currancySelector = (e: any) => {

    }

    const moveToHomePage = () =>{
        navigate('/')
    }

    return (  
        windowSize.current[0] > 1200 ? 
        (<>
        <div className='header-main'>
            <div className='header-main header-top'>
                <div className='contact-info'>
                    <a href="https://www.facebook.com/kanopiistay"><img src='brandico_facebook.svg' /></a>
                    <a href="https://www.instagram.com/kanopiistay"><img src='akar-icons_instagram-fill.svg' /></a>
                    <label>|</label>
                    <a href="https://play.google.com/store/apps/details?id=com.kanopii.www&pli=1"><img src='fa_android.svg' /></a>
                    <a href="https://apps.apple.com/us/app/kanopii-stay/id1579264170"><img src='ci_apple.svg' /></a>
                    <label>|</label>
                    <label>info@techspian.com       
                        {/* info@ikanopi.com */}
                        </label>
                </div>
                <div className='currancies'>
                    <Select
                        classNamePrefix='currancy-selector'
                        placeholder='Currancies'
                        options={currency}
                        autoFocus={closed}
                    />
                </div>
{/* 
                <select className='header-top' onChange={(e) => currancySelector(e)}>
                    {currency.map((currancy: any) => {
                        return (
                            <option className='header-top' value={currancy.currancy} key={currancy.label}>
                                <label className='options' >{currancy.currancy}</label>  - <label className='options'>{currancy.label}</label><label className='options'>{currancy.symbol}</label>
                            </option>
                        )
                    })}
                </select> */}
            </div>
            <div className='header-bottom'>
                <img className='header-bottom' src={techspian}/>
                <div className='header-bottom tab-section'>
                    <img className='tab-section' src={hotelsIcon} alt="Hotels img" />
                    <span className='tab-section'>HOTELS</span>
                    <img className='tab-section' src={flightsIcon} alt="Flights img" />
                    <span className='tab-section'>FLIGHTS</span>
                    <img className='tab-section' src={carsIcon} alt="Cars img" />
                    <span className='tab-section' onClick={moveToHomePage}>CARS</span>
                    <img className='tab-section' src={activitiesIcon} alt="Activity img" />
                    <span className='tab-section'>ACTIVITIES</span>
                </div>
            </div>
        </div>
    </>) : <NavigationMobile/>
    )
}
export default Navigation