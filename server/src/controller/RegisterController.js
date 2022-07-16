const Register = require('../model/Register');
const status = require('http-status');



//inserir os dados no banco
exports.Insert = (req, res, next) => {
    //na requisicao de insert
    //ele retorna um json no corpo
    //precisamos pegar cada dados e inserir na respectiva propriedade
    const bankId = req.body.bankId;
    const agencyId = req.body.agencyId;
    const accountId = req.body.accountId;
    const date = req.body.date;
    const type = req.body.type;
    const description = req.body.description;
    const amount = req.body.amount;

    //aqui passa os parametros com dados para os atributos do model
    Register.create({
        bankId: bankId,
        agencyId: agencyId,
        accountId: accountId,
        date: date,
        type: type,
        description: description,
        amount: amount,
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(register => {
            if (register) {
                res.status(status.OK).send(register);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};

exports.SearchAll = (req, res, next) => {
    Register.findAll()
        .then(register => {
            if (register) {
                res.status(status.OK).send(register);
            }
        })
        .catch(error => next(error));
}

exports.SearchOne = (req, res, next) => {
    const id = req.params.id;

    Register.findByPk(id)
            .then(register => {
            if (register) {
                res.status(status.OK).send(register);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};


//atualizar os dados
exports.Update = (req, res, next) => {
    //na requisicao de atualizar
    //quando atualizamos enviamos o id, que vai ser pego da url
    const bankId = req.body.bankId;
    const agencyId = req.body.agencyId;
    const accountId = req.body.accountId;
    const date = req.body.date;
    const type = req.body.type;
    const description = req.body.description;
    const amount = req.body.amount;

    Register.findByPk(id)
        //primeiro precisamos verificar se o dado existe
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(register => {
            if (register) {
                //se existir, vai atualizar
                //passa um objeto com as infos
                register.update({
                    bankId: bankId,
                    agencyId: agencyId,
                    accountId: accountId,
                    date: date,
                    type: type,
                    description: description,
                    amount: amount,
                },
                    //recebe um parametro id na clausula where
                    {
                        where: { id: id }
                    })
                    .then(() => {
                        //status 200 é o padrao
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                //caso nao existir, retorna erro
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Register.findByPk(id)
        .then(register => {
            if (register) {
                register.destroy({
                    where: { id: id }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
