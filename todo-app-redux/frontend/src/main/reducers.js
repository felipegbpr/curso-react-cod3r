import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 8,
            description: 'Pagar fatura do cartão',
            done: true
        }, {
            _id: 9, 
            description: 'Reunião com a equipe ás 10:00',
            done: false
        }, {
            _id: 10, 
            description: 'Consulta médica na terça depois do almoço',
            done: false
        }]
    })
});

export default rootReducer;