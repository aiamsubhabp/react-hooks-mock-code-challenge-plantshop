import React from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      <PlantCard />  
    </ul>
  );
}

export default PlantList;
