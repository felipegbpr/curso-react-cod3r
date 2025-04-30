import './App.css';

import React from 'react';

import Card from './components/layout/Card';

import ParOuImpar from './components/condicional/ParOuImpar';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';

export default () => (
  <div className="App">
    <h1>Fundamentos do React</h1>

    <div className="Cards">
      <Card titulo="#08 - Renderização Condicional" color="#6c3739">
        <ParOuImpar numero={5}></ParOuImpar>
      </Card>

      <Card titulo="#07 - Desafio Repetição" color="#6F826A">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="#06 - Repetição" color="#6F826A">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#05 - Componente com Filhos" color="#a93226">
        <Familia sobrenome="Oliveira">
          <FamiliaMembro nome="Maria" />
          <FamiliaMembro nome="Alana" />
          <FamiliaMembro nome="Julia" />
        </Familia>
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
