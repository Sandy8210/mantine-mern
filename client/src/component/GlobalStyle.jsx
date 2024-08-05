import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Outfit', sans-serif;
  }

  input, textarea, select {
    font-family: 'Outfit', sans-serif;
  }
`;

export default GlobalStyle;
