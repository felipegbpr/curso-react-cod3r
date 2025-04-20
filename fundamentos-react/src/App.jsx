import React from "react"; 

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';


export default () => ( 
    <div id="app">
        <h1>Fundamentos do React (Arrow)</h1>
        <Fragmento />
        <ComParametro
        titulo="Desempenho do aluno"
        aluno="Carlos Newman"
        nota={8.7}
        />
        <Primeiro></Primeiro>
    </div>
);    
