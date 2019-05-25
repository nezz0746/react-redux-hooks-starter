import React from 'react';
import { createGlobalStyle } from 'styled-components';
import HomePage from './pages/HomePage';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

  body {
    font-family: 'Roboto Mono'
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <HomePage />
    </div>
  );
}

export default App;
