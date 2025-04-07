import Loader from "../Loader/Loader";
import "./Home.scss";
import { useEffect, useState } from "react";
import Search from "../Search/Search";
import RegionFilter from "../RegionFilter/RegionFilter";
import CountryCard from "../CountryCard/CountryCard";

function Home({ theme }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [regionList, setRegionList] = useState([]);
  const [codeToName, setCodeToName] = useState([{}]);

  useEffect(() => {
    const fetchCountries = async () => {
      const storedData = sessionStorage.getItem("countriesData");

      if (storedData) {
        const data = JSON.parse(storedData);
        setCountries(data);
        setFilteredCountries(data);
        const codeMapping = {};
        data.forEach((country) => {
          codeMapping[country.alpha3Code] = country.name;
        });
        setCodeToName(codeMapping);
        setRegionList(
          Array.from(new Set(data.map((country) => country.region)))
        );
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        sessionStorage.setItem("countriesData", JSON.stringify(data)); // Save to sessionStorage
        setCountries(data);
        setFilteredCountries(data);
        const codeMapping = {};
        data.forEach((country) => {
          codeMapping[country.alpha3Code] = country.name;
        });
        setCodeToName(codeMapping);
        setRegionList(
          Array.from(new Set(data.map((country) => country.region)))
        );
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch countries");
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const searchFunction = (val, type) => {
    console.log(type);
    const searchTerm = val.toLowerCase();

    if (type === "search") {
      const filtered = countries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm)
      );
      setFilteredCountries(filtered);
    } else if (type === "filterRegion") {
      const filtered = countries.filter((country) =>
        country.region.toLowerCase().includes(searchTerm)
      );
      setFilteredCountries(filtered);
    }
  };

  return (
    <>
      <main>
        {loading && <Loader loading={loading} theme={theme} />}
        {error && <h3>Oops! Something went wrong</h3>}
        {!loading && !error && countries.length > 0 && (
          <>
            <div className="filter-container">
              <Search searchFunc={searchFunction} />
              <RegionFilter
                regionList={regionList}
                searchFunc={searchFunction}
              />
            </div>

            <div className="countries-container">
              {filteredCountries.map((country) => (
                <CountryCard
                  key={country.name}
                  country={country}
                  codeToName={codeToName}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default Home;
