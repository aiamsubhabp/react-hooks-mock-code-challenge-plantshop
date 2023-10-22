import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(r => r.json())
      .then(plants => {
        setPlants(plants)
      })
  }, [])

  function handleAddPlant (newPlant) {
    const updatedPlantsArray = [...plants, newPlant]
    setPlants(updatedPlantsArray)
  }
  

const plantsToDisplay = plants

  return (
    <main>
      <NewPlantForm 
        plants = {plantsToDisplay} 
        onAddPlant = {handleAddPlant}  
      />
      <Search />
      <PlantList 
        plants = {plantsToDisplay} 
        
      />
    </main>
  );
}

export default PlantPage;
