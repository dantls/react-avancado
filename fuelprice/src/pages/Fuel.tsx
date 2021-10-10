import { useState } from "react";
import { FuelComponent } from "../components/Fuel";

export function FuelPage(){
  const [editMode, setEditMode]= useState(false);

  function toggleEditMode() {
    setEditMode(prevState => !prevState)
  }


  return(
    <FuelComponent
      editMode={editMode}
      toggleEditMode={toggleEditMode}
    />
  )
}