import { useState } from "react";
import CitySelector, { citiesData } from "./CitySelector/CitySelector"
import CityCard from "./CityCard/CityCard";

function App() {
  const [chosenCity, setChosenCity] = useState(citiesData[0]);

  const handleCityFromChild = (city) => {
    setChosenCity(city);
  };

  return (
    <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
      < CitySelector passCityToParent={handleCityFromChild} />
      < CityCard city={chosenCity} />
    </div>
  );
}

export default App;
