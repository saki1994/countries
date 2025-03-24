import NavBar from '../NavBar/NavBar';
import Countries from '../Countries/Countries';
import Loader from '../Loader/Loader';
import './Home.scss'; 
import { useEffect, useState } from 'react'; 
import Search from '../Search/Search';
import RegionFilter from '../RegionFilter/RegionFilter';
 

function Home() {
  const [ countries, setCountries ] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState([])
  const [regionList, setRegionList] = useState([])
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light"; // Default to light if no theme is saved
  });

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('data.json');
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data)
        setRegionList(Array.from(new Set(data.map(country => country.region))))
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setError("Failed to fetch countries");
        setLoading(false); // Set loading to false in case of error
      }
    };

    // Delay fetchCountries by 3 seconds
    const timeoutId = setTimeout(() => {
      fetchCountries();
    }, 1000);

    // Cleanup the timeout if the component unmounts before 3 seconds
    return () => clearTimeout(timeoutId);
  }, []);  

  
  useEffect(() => {
    document.body.setAttribute("data-theme", theme); // Apply the theme to the body
    localStorage.setItem("theme", theme); // Save theme in localStorage
  }, [theme]);

  const setThemeHandler = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const searchFunction = (val, type) => {
    console.log(type)
     const searchTerm = val.toLowerCase();
    
    const filtered = countries.filter(country =>  country.name.toLowerCase().includes(searchTerm))
      setFilteredCountries(filtered);
  }

  return (
    <> 
    <header className='header-section'> 
      <h2>
      Where in the world?
      </h2>
      <NavBar setThemeHandler={setThemeHandler} theme={theme} />
    </header >
    <main> 
   
    {loading && <Loader loading={loading} theme={theme}/> }
    {error && <h3>Oops! Something went wrong</h3>}
    <div className='filter-container'>
    <Search searchFunc={searchFunction} />
    <RegionFilter regionList={regionList} />
    </div>
  
    <div className='countries-container'> 
      {
        !loading && !error && countries.length > 0 &&
        filteredCountries.map((country) => (
          <Countries key={country.name} country={country} />
        ))
      }
       </div>
       
     
    </main>
    </>
  );
}

export default Home;
