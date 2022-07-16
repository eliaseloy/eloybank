const Account = require('../model/Account');
const status = require('http-status');



//inserir os dados no banco
exports.Insert = (req, res, next) => {
    //na requisicao de insert
    //ele retorna um json no corpo
    //precisamos pegar cada dados e inserir na respectiva propriedade
    const bankId = req.body.bankId;
    const agencyId = req.body.agencyId;
    const number = req.body.number;
    const password = req.body.password;
    const customerId = req.body.customerId;
    const balance = req.body.balance;
    const deactivated = req.body.deactivated;

    //aqui passa os parametros com dados para os atributos do model
    Account.create({
        bankId: bankId,
        agencyId: agencyId,
        number: number,
        password: password,
        customerId: customerId,
        balance: balance,
        deactivated: deactivated,
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(account => {
            if (account) {
                res.status(status.OK).send(account);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};

exports.SearchAll = (req, res, next) => {
    Account.findAll()
        .then(account => {
            if (account) {
                res.status(status.OK).send(account);
            }
        })
        .catch(error => next(error));
}

exports.SearchOne = (req, res, next) => {
    const id = req.query.id;
    console.log("id da SearchOne " + req.query.id)

    Account.findByPk(id)
            .then(account => {
            if (account) {
                res.status(status.OK).send(account);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.GetBalance = (req, res, next) => {
    const id = req.query.accNumber;
    console.log("id da GetBalance" + req.query.accNumber)

    Account.findOne({
        where: {
            id: id
        }
    }).then(account => {
        if (account) {
            res.status(status.OK).send(account);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    }).catch(error => next(error));
};

exports.SearchLogin = (req, res, next) => {
    const agencyId = req.query.agencyId;
    const number = req.query.number;
    const password = req.query.password;

    Account.findOne({
        where: {
            agencyId: agencyId,
            number:  number,
            password: password
        }
    })
    .then(account => {
        if (account) {
            res.status(status.OK).send(account);
        }else {
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
};


//atualizar os dados
exports.UpdateBalance = (req, res, next) => {
    //na requisicao de atualizar
    //quando atualizamos enviamos o id, que vai ser pego da url
    console.log("UpdateBalance2");
    console.log("recebimento id body: " + req.body.id);
    console.log("recebimento balance body: " + req.body.balance);
    console.log("recebimento id query: " + req.query.id);
    console.log("recebimento balance query: " + req.query.balance);
    const id = req.body.id;
    console.log("const id: " + id)
    const balance = req.body.balance;
    console.log("const balance: " + balance)


    Account.findByPk(id)
        //primeiro precisamos verificar se o dado existe
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(account => {
            if (account) {
                //se existir, vai atualizar
                //passa um objeto com as infos
                account.update({
                    balance: balance,
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

//atualizar os dados
exports.UpdateBalanceDest = (req, res, next) => {
    //na requisicao de atualizar
    //quando atualizamos enviamos o id, que vai ser pego da url
    console.log("UpdateBalanceDest");
    console.log("recebimento ag body: " + req.body.ag);
    console.log("recebimento id body: " + req.body.id);
    console.log("recebimento balance body: " + req.body.balance);
    console.log("recebimento ag query: " + req.query.ag);
    console.log("recebimento id query: " + req.query.id);
    console.log("recebimento balance query: " + req.query.balance);
    const ag = req.body.ag;
    console.log("const ag: " + ag)
    const id = req.body.id;
    console.log("const id: " + id)
    const balance = req.body.balance;
    console.log("const balance: " + balance)


    Account.findByPk(id)
        //primeiro precisamos verificar se o dado existe
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(account => {
            if (account) {
                //se existir, vai atualizar
                //passa um objeto com as infos
                account.update({
                    balance: balance,
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

//atualizar os dados
exports.Update = (req, res, next) => {
    //na requisicao de atualizar
    //quando atualizamos enviamos o id, que vai ser pego da url
    const bankId = req.query.bankId;
    const agencyId = req.query.agencyId;
    const number = req.query.number;
    const password = req.query.password;
    const customerId = req.query.customerId;
    const balance = req.query.balance;
    const deactivated = req.query.deactivated;

    Account.findByPk(id)
        //primeiro precisamos verificar se o dado existe
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(account => {
            if (account) {
                //se existir, vai atualizar
                //passa um objeto com as infos
                account.update({
                    bankId: bankId,
                    agencyId: agencyId,
                    number: number,
                    password: password,
                    customerId: customerId,
                    balance: balance,
                    deactivated: deactivated,
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

    Account.findByPk(id)
        .then(account => {
            if (account) {
                account.destroy({
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
