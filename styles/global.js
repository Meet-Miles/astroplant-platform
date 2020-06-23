import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
* {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  html {
      scroll-behavior: smooth;
  }
  
  body {
    font-family: ${(props) => props.theme.fontFamily};
    color: ${(props) => props.theme.light};
    background-color: ${(props) => props.theme.dark};
  }

  h1,
  h2 {
    font-weight: 600;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.25rem;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 550;
  }
  
  h5 {
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  p,b {
    font-size: 1em;
    line-height: 1.45em;
  }
  
  p {
    font-weight: 300;
    text-transform: none;
  }

  b {
    font-weight: 550;
    text-transform: none;
  }
  
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  input {
    outline: none;
    border: none;
  }
`;
