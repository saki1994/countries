import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { IoArrowBackSharp } from "react-icons/io5";

import "./Country.scss";

const Country = () => {
  const location = useLocation();
  let navigate = useNavigate();

  const { country, codeToName } = location.state;

  return (
    <>
      <button className="back-btn" onClick={() => navigate(-1)}>
        {" "}
        <span>
          <IoArrowBackSharp />
        </span>
        Back
      </button>
      <div className="country-container">
        <div className="country-flag">
          <img src={country.flags.png} alt="flag" />
        </div>
        <div className="country-info-container">
          <div className="main-country-info">
            <h3>{country.name}</h3>
            <div className="sub-country-info">
              <p>
                <b>Native Name</b>: {country.nativeName}
              </p>
              <p>
                <b>Population</b>: {country.population}
              </p>
              <p>
                <b>Region</b>: {country.region}
              </p>
              <p>
                <b>Sub Region</b>: {country.subregion}
              </p>
              <p>
                <b>Capital</b>: {country.capital}
              </p>
            </div>
          </div>
          <div className="additional-info">
            <p>
              <b>Top Level Domain</b>: {country.topLevelDomain}
            </p>
            <p>
              <b>Currencies</b>:{" "}
              {country.currencies.map((currency) => currency.name).join(", ")}
            </p>
            <p>
              <b>Languages</b>:{" "}
              {country.languages.map((language) => language.name).join(", ")}
            </p>
          </div>
          {country.borders && (
            <div className="border-info">
              <p>
                <b>Border Countries</b>:
              </p>
              <div className="border-countries">
                {country.borders.map((border, key) => (
                  <span key={key}>{codeToName[border]}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Country;
