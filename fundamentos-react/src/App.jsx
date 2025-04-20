import React from "react"; 

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";


export default () => ( 
    <div id="app">
        <h1>Fundamentos do React (Arrow)</h1>
        <Aleatorio min={0} max={80} />
        <Fragmento />
        <ComParametro
        titulo="Desempenho do aluno"
        aluno="Carlos Newman"
        nota={8.7}
        />
        <Primeiro></Primeiro>
    </div>
);    
