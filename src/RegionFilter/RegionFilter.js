import './RegionFilter.scss'
import { useState } from "react"; 
import { IoChevronDownOutline, IoChevronUpOutline  } from "react-icons/io5";




function RegionFilter({regionList, searchFunc}) {
    const [showRegionList, setShowRegionList] = useState(false); 
    return (
        <div className='region-filter-container'> 
        <div className="region-filter-btn" >
            <button onClick={() => setShowRegionList(!showRegionList)}>Filter by Region
            <span> {showRegionList ? <IoChevronUpOutline /> : <IoChevronDownOutline  />}</span>
            </button>
            


        </div>   
            {showRegionList &&
                <div className="dropdown-menu">
                    {regionList.map((region, index) => (
                        <button key={index} onClick={() => searchFunc(region, "filterRegion")}>{region}</button>
                    ))}
                </div>
}
        </div>
    )   
}

export default RegionFilter