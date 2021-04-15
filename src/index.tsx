import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import GlobalStyle from "./styles";
import GlobalFonts from "./styles/fonts";


ReactDOM.render(
  <Router>
    <GlobalStyle />
    <GlobalFonts />
    <App />
  </Router>,
  document.getElementById('root')
);
