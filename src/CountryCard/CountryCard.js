import "./CountryCard.scss"
import { useNavigate } from "react-router";


const CountryCard = ({country, codeToName}) => {
    let navigate = useNavigate();

    return (
        <div className="country-card-container" onClick={() => navigate(`/${country.name}`, {
            state: { country, codeToName }
        })}>
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

export default CountryCard
