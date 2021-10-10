import { getFuel, updatedFuel } from "./services";
import { useState, useEffect } from "react";
import {
  Container,
  Title,
  SettingsIcon,
  Panel,
  Box,
  Row,
  FuelText,
  FuelPrice,
  InfoText,
  UpdateIcon,
  SaveButton,
  SaveIcon,
  FuelInput,
} from "./styles";

import { FuelComponentProps, IFuelState } from "./types";

const TIME_TO_INTERVAL_MS = 1000;

export function FuelComponent({
  editMode,
  toggleEditMode,
}: FuelComponentProps) {
  const [fuels, setFuels] = useState<IFuelState[]>([]);

  async function fetchAndUpdateData() {
    const data = await getFuel();

    setFuels(data);
  }
  
  function onUpdatePrice(fuelId:number, price:string){

    const updatedFuels = fuels.map(fuel => {
      if (fuel.id === fuelId){
        fuel.price = Number(price);
        fuel.updated = true;
      }
      return fuel
    })

    setFuels(updatedFuels);
  }

  async function onSave(){

    const updatedFuels = fuels.filter(fuel => fuel.updated)

    if(!updatedFuels.length){
      toggleEditMode();
      return;
    } 

    for (const changedFuel of updatedFuels) {

      const {updated, ...rest} = changedFuel;

      await updatedFuel(rest)

    }

    fetchAndUpdateData();
    toggleEditMode();
  }

  useEffect(() => {
    fetchAndUpdateData();
  }, []);


  useEffect(() => {

    const intervalId = setInterval(() => {

      if(editMode) return;

      fetchAndUpdateData();

    },TIME_TO_INTERVAL_MS)  

    return () => {
      clearInterval(intervalId)
    }

  }, []);

  return (
    <Container>
      <Title>ReactJS</Title>
      <SettingsIcon onClick={toggleEditMode} />

     

      <Panel>
        {editMode && (
          <InfoText>
            <UpdateIcon />
            Altere o preço do item e salve
          </InfoText>
        )}



        {fuels?.map((fuel) => (
            <Row key={fuel.id}>
              <Box>
                <FuelText>{fuel.name}</FuelText>
              </Box>
              <Box>
                {editMode ? (
                  <FuelInput
                    id={fuel.name}
                    value={fuel.price}
                    type="number"
                    onChange={(event) => {
                      onUpdatePrice(fuel.id, event.target.value) 
                    }}
                  />
                ) : (
                  <FuelPrice>{fuel.price}</FuelPrice>
                )}
              </Box>
            </Row>
          ))
        }

        {editMode && (
          <Row>
            <SaveButton
              onClick={() => onSave()}
            >
              <SaveIcon />
              Salvar
            </SaveButton>
          </Row>
        )}
      </Panel>
    </Container>
  );
}

  