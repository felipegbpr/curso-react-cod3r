const _ = require('lodash');

const alunos = [{
    nome: 'Amanda',
    nota: 7.5
}, {
    nome: 'Tiago',
    nota: 7.3
}, {
    nome: 'Valentina',
    nota: 8.5 
}];

const media = _.sumBy(alunos, 'nota') / alunos.length;
console.log(media);