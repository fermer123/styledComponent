import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import App from './App';

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: consolas;
  box-sizing: border-box;

}`;

ReactDOM.render(
  <React.StrictMode>
    <>
      <Global />
      <App />
    </>
  </React.StrictMode>,
  document.getElementById('root'),
);
