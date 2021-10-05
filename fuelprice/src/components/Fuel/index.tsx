import { 
  Container, 
  Title, 
  SettingsIcon,
  Panel,
  Box,
  Row,
  FuelText,
  FuelPrice
} from "./styles";

export function FuelComponent(){
  return(
    <Container>
      <Title>ReactJS</Title>
      <SettingsIcon />

      <Panel>
        <Row>
          <Box>
            <FuelText>Gasolina Comum</FuelText>
          </Box>
          <Box>
            <FuelPrice>4,59</FuelPrice>
          </Box>
        </Row>
        <Row>
          <Box>
            <FuelText>Gasolina Comum</FuelText>
          </Box>
          <Box>
            <FuelPrice>4,59</FuelPrice>
          </Box>
        </Row>
        <Row>
          <Box>
            <FuelText>Gasolina Comum</FuelText>
          </Box>
          <Box>
            <FuelPrice>4,59</FuelPrice>
          </Box>
        </Row>
        <Row>
          <Box>
            <FuelText>Gasolina Comum</FuelText>
          </Box>
          <Box>
            <FuelPrice>4,59</FuelPrice>
          </Box>
        </Row>
   
      </Panel>
    </Container>
  )
}