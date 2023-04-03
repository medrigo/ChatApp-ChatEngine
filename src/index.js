import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Todos from '../src/conponents/Todos';
import './conponents/Todos/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todos/>
  </React.StrictMode>
);

