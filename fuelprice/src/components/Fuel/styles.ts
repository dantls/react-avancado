import styled from 'styled-components'
import {FiSettings} from 'react-icons/fi'
import imageGasStation from '../../assets/gas-station.jpg'


export const Container = styled.h1`
  height: 100vh;
  
  background: url(${imageGasStation});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

  text-align: center;

`;

export const Title = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 3rem;
  padding-top: 1rem;

  color: ${({theme})=> theme.colorGrey100};

`;

export const SettingsIcon = styled(FiSettings)`
  color: ${({theme})=> theme.colorGrey200};
  font-size: 2rem;
  cursor: pointer;

  position: absolute;
  top: 1.4rem;
  right: 1.4rem;

`;

export const Panel = styled.section`

  width: 18rem;
  height: 29rem;
  background-color: ${({theme})=> theme.colorGrey100};

  border-radius: 0.3rem;

  position: relative;
  padding-top: 3rem;
  left: calc(100vw - 20rem);
 

`;
export const Box = styled.div`

  width: 8rem;
  height: 4rem;
  background-color: ${({theme})=> theme.colorBlue200};
  

  border-radius: 0.3rem;
  
  display: flex;
  align-items: center;
  justify-content: center;


`;
export const Row = styled.div`
  display: flex;

  justify-content: space-evenly;

  padding-top: 1rem;  

`;
export const FuelText = styled.span`
  color: ${({theme})=> theme.colorWhite};
  font-size: 1.5rem;
  font-weight: bold;
`;

export const FuelPrice = styled.span`
  font-family: "Digital-7 Mono", sans-serif;
  color: ${({theme})=> theme.colorYellow600};
  font-size: 3.5rem;
  text-align: left;
  font-weight: normal;
`;