import React from "react"; 

import Card from './components/layout/Card';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";


export default () => ( 
    <div id="app">
        <h1>Fundamentos do React (Arrow)</h1>

        <Card titulo="#04 - Desafio Aleatório">
            <Aleatorio min={0} max={80} />
        </Card>

        <Card titulo="#03 - Fragmento">
            <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parâmetro">
            <ComParametro
                titulo="Desempenho do aluno"
                aluno="Carlos Newman"
                nota={8.7}
            />
        </Card>

        <Card titulo="#01 - Primeiro Componente">  
            <Primeiro></Primeiro>
        </Card>
    </div>
);    
