import React, { useState } from 'react'
import { useAppSelector } from '../../redux/hooks';
import '../../Styles/Styles Web/SCSS/SortByAndFilterApplied.css'

export const SortByAndFilterApplied = () => {
    const [priceLtoHSelected, setPriceLtoHSelected] = useState(false);
    const [priceHtoLSelected, setPriceHtoLSelected] = useState(false);
    const [numberOfSeatsSelected, setNumberOfSeatsSelected] = useState(false);
    const filtersApplied = useAppSelector((state)=>state.car.filtersApplied)

    return(
    <>
        <div className="SortByAndFilterAppliedContainer">
            <div className="sortBy">
                <span className="SortyByStaticText">
                    Sortby:
                </span>
                <span onClick={()=>{
                    setPriceLtoHSelected(true)
                    setPriceHtoLSelected(false)
                    setNumberOfSeatsSelected(false)
                }} className={priceLtoHSelected?"PriceLtoH sortByIndividual":"PriceLtoH"}  >
                    Price(Low to High)
                </span>
                <span onClick={()=>{
                    setPriceLtoHSelected(false)
                    setPriceHtoLSelected(true)
                    setNumberOfSeatsSelected(false)
                }}
                className={priceHtoLSelected?"PriceHtoL sortByIndividual":"PriceHtoL"}>
                    Price(High to Low)
                </span>
                <span onClick={()=>{
                    setPriceLtoHSelected(false)
                    setPriceHtoLSelected(false)
                    setNumberOfSeatsSelected(true)
                }}
                className={numberOfSeatsSelected?"NumberOfSeats sortByIndividual":"NumberOfSeats"}>
                    Number of Seats(High to Low)
                </span>
            </div>
            {
                Boolean(filtersApplied.length)&&
                    (
                        <div className="FilterAppliedContainer">
                            <span className="FilterAppliedStaticText">
                                Filters
                            </span>
                            {
                                filtersApplied.map((filterName: any) => {
                                    return (
                                        <span className="FiltersApplied">
                                            {filterName}
                                        </span>
                                    )
                                }
                                )
                            }

                        </div>
                    )
            }
            
        </div>
    </>
    )
}