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

  color: ${({theme})=> theme.colorGrey100}

`;

export const SettingsIcon = styled(FiSettings)`
  color: ${({theme})=> theme.colorGrey200};
  font-size: 2rem;
  cursor: pointer;

  position: absolute;
  top: 1.4rem;
  right: 1.4rem;

`;