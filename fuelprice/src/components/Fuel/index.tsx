import { getFuel } from "./services";
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

import { FuelComponentProps, IFuel } from "./types";
import { api } from "../../services/api";

export function FuelComponent({
  editMode,
  toggleEditMode,
}: FuelComponentProps) {
  const [fuels, setFuels] = useState<IFuel[]>([]);

  async function fetchAndUpdateData() {
    const data = await getFuel();

    setFuels(data);
  }
  async function onUpdatePrice(fuelId: number, price: string) {
    const updatedFuels = fuels.map((fuel) => {
      if (fuel.id === fuelId) {
        fuel.price = Number(price);
      }
      return fuel;
    });

    setFuels(updatedFuels);
  }

  async function handleSave(){
    await api.post('fuel', fuels);
    toggleEditMode();
  }

  useEffect(() => {
    fetchAndUpdateData();
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
                      onUpdatePrice(fuel.id , event.target.value);
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
              onClick={() => handleSave()}
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
