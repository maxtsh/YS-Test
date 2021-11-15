import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /** Colors */
    --pm-black: #1f263e;
    --primary-green: #34a8a5;
    --primary-yellow: #f9bf04;
    --primary-purple: #663399;
    --light-green: #3dc997;
    --white: #ffffff;
    --black: #000000;
    /** Typography */
  }

  html{
    font-size: 16px;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  .app-wrapper{
    display: flex;
    width: 100%;
    min-height: 100vh;
  }

  #fallback{
    width: 100%;
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;

export default GlobalStyle;
