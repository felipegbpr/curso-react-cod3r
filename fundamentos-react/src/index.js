import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';

// const tag = <strong>Olá React</strong>;

ReactDOM.render(
  <div id="app">
    <Primeiro></Primeiro>
    <ComParametro
      titulo="Desempenho do aluno"
      aluno="Carlos Newman"
      nota={8.7}
    />
  </div>,
  document.getElementById('root')
);
