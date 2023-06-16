import React, { useState } from 'react';
import '../../Styles/Styles Web/SCSS/Filters.css'
import { filtersData } from '../../Data Constant/Constants';

const Filter = () => {
    const [isOpenPrice, setIsOpenPrice] = useState(true);
    const [isOpenCars, setIsOpenCars] = useState(true);
    const [isOpenPassanger, setIsOpenPassanger] = useState(true);
    const [isOpenTransmission, setIsOpenTransmission] = useState(true);
    const [isOpenProvider, setIsOpenProvider] = useState(true);
    const [selectedOption, setSelectedOption]: [any, Function] = useState(null);
    const filteredDataCategory = filtersData
    const priceGroupData = filtersData.filters.filter((data) => { return (data.category === "PriceGroup" ? data : null) })
    const carsTypesData = filteredDataCategory.filters.filter((data) => { return (data.category === "CarTypes" ? data : null) })
    const passangersData = filteredDataCategory.filters.filter((data) => { return (data.category === "SeatTypes" ? data : null) })
    const transmissionTypesData = filteredDataCategory.filters.filter((data) => { return (data.category === "TransmissionType" ? data : null) })
    const providerNamesData = filteredDataCategory.filters.filter((data) => { return (data.category === "ProviderName" ? data : null) })

    const toggleFilter = (e: any) => {
        const groupType = e.target.title
        if (groupType == "Price Group") {
            setIsOpenPrice(!isOpenPrice);
        }
        if (groupType == "Car Types") {
            setIsOpenCars(!isOpenCars);

        }
        if (groupType == "Passengers") {
            setIsOpenPassanger(!isOpenPassanger);
        }
        if (groupType == "Transmission Type") {
            setIsOpenTransmission(!isOpenTransmission);

        }
        if (groupType == "Provider Name") {
            setIsOpenProvider(!isOpenProvider)

        }
    };

    const handleOptionClick = (option: any) => {
        // setSelectedOption(option);
        // setIsOpenPrice(false);
        // setIsOpenCars(false);
        // setIsOpenPassanger(false);
        // setIsOpenTransmission(false);
        // setIsOpenProvider(false);
    };

    const setDropdown = (e: any) => {

    }


    return (<>
        <div className="filter-main-side">
            <div className="filter-main-side filter">
                <div className='filter price-group-section'>
                    {priceGroupData.map((data) => {
                        return (
                            <div className="price-group-section price-group">
                                <div className="filter-header" onClick={(e) => toggleFilter(e)} defaultValue={data.name}>
                                    <div className="filter-selected" onClick={(e) => setDropdown(e)} title={data.name}>
                                        {data.name}
                                    </div>
                                    <div className={`filter-arrow ${isOpenPrice ? 'open' : ''}`} onClick={(e) => toggleFilter(e)} title={data.name}>&#x25BC;</div>
                                </div>
                                <div className={`filters-options-section ${isOpenPrice ? "open" : "close"}`}>
                                    <div
                                        className="filter-option"
                                        onClick={handleOptionClick}
                                    >
                                        {data.options.map((options) => {
                                            return (
                                                <form action='' className="form-options-layout" >
                                                    <input type='checkbox' />
                                                    <label>{options.label}</label>
                                                </form>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                    }
                </div>

                {/* price section logic end here    */}

                <div className="filter car-segment-types-section">
                    {carsTypesData.map((data) => {
                        return (
                            <div className="car-segment-types-section car-segment">
                                <div className="filter-header" onClick={(e) => toggleFilter(e)} title={data.name}>
                                    <div className="filter-selected" onClick={(e) => setDropdown(e)} title={data.name}>
                                        {data.name}
                                    </div>
                                    <div className={`filter-arrow ${isOpenCars ? 'open' : ''}`} onClick={(e) => toggleFilter(e)} title={data.name}>&#x25BC;</div>
                                </div>
                                <div className={`filters-options-section ${isOpenCars ? 'open' : 'close'}`}>
                                    <div
                                        className="filter-option"
                                        onClick={handleOptionClick}
                                    >
                                        {data.options.map((options) => {
                                            return (
                                                <form className="form-options-layout" >
                                                    <input type='checkbox' />
                                                    <label>{options.label}</label>
                                                </form>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                    }
                </div>

                {/* car-segment-types  logic end here */}

                <div className="filter passengers-quantity-section">
                    {passangersData.map((data) => {
                        return (
                            <div className="passengers-quantity-section passengers-quantity">
                                <div className="filter-header" onClick={(e) => toggleFilter(e)} title={data.name}>
                                    <div className="filter-selected" onClick={(e) => setDropdown(e)} title={data.name}>
                                        {data.name}
                                    </div>
                                    <div className={`filter-arrow ${isOpenPassanger ? 'open' : ''}`} onClick={(e) => toggleFilter(e)} title={data.name}>&#x25BC;</div>
                                </div>
                                <div className={`filters-options-section ${isOpenPassanger ? 'open' : 'close'}`}>
                                    <div
                                        className="filter-option"
                                        onClick={handleOptionClick}
                                    >
                                        {data.options.map((options) => {
                                            return (
                                                <form className="form-options-layout" >
                                                    <input type='checkbox' />
                                                    <label>{options.label}</label>
                                                </form>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                    }
                </div>

                {/* passengers-quantity end here */}

                <div className="filter transmisson-type-section">
                    {transmissionTypesData.map((data) => {
                        return (
                            <div className="transmisson-type-section transmisson-type">
                                <div className="filter-header" onClick={(e) => toggleFilter(e)} title={data.name}>
                                    <div className="filter-selected" onClick={(e) => setDropdown(e)} title={data.name}>
                                        {data.name}
                                    </div>
                                    <div className={`filter-arrow ${isOpenTransmission ? 'open' : ''}`} onClick={(e) => toggleFilter(e)} title={data.name}>&#x25BC;</div>
                                </div>
                                <div className={`filters-options-section ${isOpenTransmission ? 'open' : 'close'}`}>
                                    <div
                                        className="filter-option"
                                        onClick={handleOptionClick}
                                    >
                                        {data.options.map((options) => {
                                            return (
                                                <form className="form-options-layout" >
                                                    <input type='checkbox' />
                                                    <label>{options.label}</label>
                                                </form>
                                            )
                                        })}
                                    </div>
                                </div>

                            </div>
                        )
                    }
                    )
                    }
                </div>

                {/* transmisson-type end here */}

                <div className="filter service-provider-name">
                    {providerNamesData.map((data) => {
                        return (
                            <div className="provider-name">
                                <div className="filter-header" onClick={(e) => toggleFilter(e)} title={data.name}>
                                    <div className="filter-selected" onClick={(e) => setDropdown(e)} title={data.name}>
                                        {data.name}
                                    </div>
                                    <div className={`filter-arrow ${isOpenProvider ? 'open' : ''}`} onClick={(e) => toggleFilter(e)} title={data.name}>&#x25BC;</div>
                                </div>
                                <div className={`filters-options-section ${isOpenProvider ? 'open' : 'close'}`}>
                                    <div
                                        className="filter-option"
                                        onClick={handleOptionClick}
                                    >
                                        {data.options.map((options) => {
                                            return (
                                                <form className="form-options-layout" >
                                                    <input type='checkbox' />
                                                    <label>{options.label}</label>
                                                </form>
                                            )
                                        })}
                                    </div>
                                </div>

                            </div>
                        )
                    }
                    )
                    }
                </div>
            </div>

            {/* filter class end here */}

        </div>
    </>
    );
};

export default Filter;