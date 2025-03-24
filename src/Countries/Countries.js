import "./Countries.scss"

const Countries = ({country}) => {
    return (
        <div className="country-container">
            <img src={country.flags.png} alt="flag"   />
            <div className="country-info" >  
                <h3>{country.name}</h3>
                <p><b>Population</b>: {country.population}</p> 
                <p><b>Region</b>: {country.region}</p>
                <p><b>Capital</b>: {country.capital}</p>
            </div>
        </div>
    )
}

export default Countries
