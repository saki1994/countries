import './RegionFilter.scss'

function RegionFilter({regionList}) {
    return (
        <div className="region-filter">
            <button>Filter by Region</button>
             {regionList.length > 0 && (
                <div className="dropdown-menu">
                    {regionList.map((region, index) => (
                        <button key={index}>{region}</button>
                    ))}
                </div>
            )}
           </div>   
    )   
}

export default RegionFilter