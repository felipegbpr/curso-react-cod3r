import './App.css';

import React from 'react';

import Card from './components/layout/Card';

import Familia from './components/basicos/Familia';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

export default () => (
  <div className="App">
    <h1>Fundamentos do React (Arrow)</h1>

    <div className="Cards">
      <Card titulo="#05 - Componente com Filhos" color="#a93226">
        <Familia sobrenome="Gomes"></Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#85193C">
        <Aleatorio min={0} max={80} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#3D365C">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmetro" color="#7C4585">
        <ComParametro
          titulo="Desempenho do aluno"
          aluno="Carlos Newman"
          nota={8.7}
        />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#03A791">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
