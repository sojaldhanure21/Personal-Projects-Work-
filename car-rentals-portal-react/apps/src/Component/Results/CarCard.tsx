import { faAngleDoubleRight, faCarBurst, faSuitcaseRolling, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../Styles/Styles Web/SCSS/CarCard.css'

export const CarCard = ({car}:any) => {
    const vehicleFeatures = Object.keys(car.features)
    return(
        <>
        {console.log('qwerty',car)}
        <div className="CarCardContainer">
            <div className="CarCardImageContainer">
                <img className='CarCardImage' src={car?.category?.image_url} alt="" />
            </div>
            <div className="CarInfo">
                <h1>
                    {car?.category?.name}
                </h1>
                <h2>
                    {car?.category?.make}
                </h2>
                <div className="carFacilities">
                    <span className="SeatIcon Icon">
                        <img src={'https://uat.ui.ikanopii.techspian.com/assets/assets/icons/seat.svg'} alt="" />
                        <span className="SeatingCapacity">
                            {car?.capacity?.seats}
                        </span>
                    </span>                   
                    <span className="large_suitcase Icon">
                        <img src={'https://uat.ui.ikanopii.techspian.com/assets/assets/icons/bags.svg'} alt="" />
                        <span className="LargeSuitcaseCapaciy">
                            {car?.capacity?.luggage_capacity?.large_suitcase}
                        </span>
                    </span>
                    
                    <span className="small_suitcase Icon">
                        <img src={'https://uat.ui.ikanopii.techspian.com/assets/assets/icons/smallbag.svg'} alt="" />
                        <span className="SmallSuitacaseCapacity">
                            {car?.capacity?.luggage_capacity?.small_suitcase}
                        </span>
                    </span>
                    
                </div>
                <div className="ViewCarInfo">
                    View vehicle information
                    <span className='rightArrow'>
                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </span>
                </div>
            </div>
            <div className="VehicleFeatures">
                {vehicleFeatures.map((feature)=>{
                    return(
                        <div className='IndividualFeature'>
                            <span>
                                {car.features[feature] ? 
                                    (<img src={'https://uat.ui.ikanopii.techspian.com/assets/assets/icons/checks.svg'} alt="" />)
                                    :
                                    (<img src={'https://uat.ui.ikanopii.techspian.com/assets/assets/icons/cross.svg '} alt="" />)
                                }
                            </span>
                            <span>
                                {feature}
                            </span>
                        </div>
                    )
                    })}
            </div>
            <div className="PriceAndPayBtn">
                <div className="vehiclePrice">
                    {String(car?.rate?.totalRate)+'$'}
                </div>
                <div className="payNowButton">
                    Pay Now
                </div>
                <div className="StaticTextofTaxInclusion">
                        Taxes & fees included in the prices
                </div>
            </div>
        </div>
        </>
    )
}