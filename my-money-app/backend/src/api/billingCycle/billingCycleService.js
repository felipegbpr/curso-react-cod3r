const BillingCycle = require('./billingCycle');
const errorHandler = require('../common/errorHandler');

// Definição dos métodos e opções da rota em uma única chamada.
BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({ new: true, runValidators: true });
BillingCycle.after('post', errorHandler).after('put', errorHandler);

// Desabilita a paginação padrão do node-restful para que você possa controlá-la manualmente.
BillingCycle.route('get', (req, res, next) => {
    // Captura e converte os parâmetros de paginação da query, com valores padrão.
    const skip = parseInt(req.query.skip) || 0;
    const limit = parseInt(req.query.limit) || 10;

    // Executa a query com as opções de skip e limit.
    BillingCycle.find({})
        .skip(skip)
        .limit(limit)
        .exec((err, docs) => {
            if (!err) {
                res.json(docs);
            } else {
                res.status(500).json({errors: [err]});
            }
        });
});

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.countDocuments((err, value) => { // Use countDocuments() em Mongoose 5+
        if (err) {
            res.status(500).json({errors: [err]});
        } else {
            res.json({value});
        }
    });
});

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([
        {
            $project: {
                credit: {$sum: "$credits.value"},
                debt: {$sum: "$debts.value"}
            }
        },
        {
            $group: {
                _id: null,
                credit: {$sum: "$credit"},
                debt: {$sum: "$debt"}
            }
        },
        {
            $project: {
                _id: 0,
                credit: 1,
                debt: 1
            }
        }
    ]).exec((err, result) => {
        if (err) {
            res.status(500).json({errors: [err]});
        } else {
            res.json(result[0] || { credit: 0, debt: 0 });
        }
    });
});

module.exports = BillingCycle;