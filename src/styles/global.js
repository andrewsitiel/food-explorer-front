import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    min-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};

    position: relative;
    padding: 12rem 0 14rem;
  }
`;