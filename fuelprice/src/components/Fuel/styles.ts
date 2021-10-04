import styled from 'styled-components'

import imageGasStation from '../../assets/gas-station.jpg';

export const Container = styled.h1`
  height: 100vh;
  
  background: url(${imageGasStation});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

`;

export const Title = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 3rem;

  color: ${({theme})=> theme.colorGrey100}

`;