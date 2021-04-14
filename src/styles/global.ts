import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }

  p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style-type: none;
  }
`;

export default GlobalStyle;
