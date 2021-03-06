import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

ReactDOM.render((
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <App />
    </div>
  </ThemeProvider>
), document.getElementById('root'));
