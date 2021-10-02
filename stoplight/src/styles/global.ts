import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #f0f2f5;
    --primary: #363F5F;
    --text-body: #969CB3;

    --yellow: #ffff00;
    --green: #33CC95;
    --red: #E52E4D;
    --input-border: #D7D7D7;
    --input-color: #E7E9EE;
    --shape: #FFFFFF;
  }
  body, input , textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight:600;
  }
  strong {
    font-weight:500;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    @media(max-width: 1080px){
      font-size: 93.75%;
    }
    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }
  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    width: 100vw;
    height: 100vh;
  }
  button{
    cursor: pointer;
  }
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

`;