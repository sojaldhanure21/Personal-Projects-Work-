import React from 'react';
import { CarCard } from '../Component/Results/CarCard';
import { Modify } from '../Component/Results/Modify';
import { SortByAndFilterApplied } from '../Component/Filters/SortByAndFilterApplied';
import { vehicles } from '../utils/dateTimeHelperFunctions';
import Filter from '../Component/Filters/Filters'
import '../Styles/Styles Web/SCSS/SearchResultPage.css'

export const SearchResultPage = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <div className="SearchResultPageContainer">
                <div className="ModifySearchComponent">
                    <Modify/>
                </div>
                <div className="SortBy-Filter-SearchResult">    
                    <div className="FilterComponent">
                        <Filter/>
                    </div>
                    <div className="SortByComponent">
                        <SortByAndFilterApplied/>
                    </div>
                    <div className="SearchResultList">
                    {
                        vehicles.map((vehicle)=>{
                            return(
                                <>
                                    <CarCard car={vehicle}/>
                                </>
                            )
                        })
                        
                    }
                    </div>
                </div>
            </div>
        </>
    )
}