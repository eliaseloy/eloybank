const Agency = require('../model/Agency');
const status = require('http-status');



//inserir os dados no banco
exports.Insert = (req, res, next) => {
    //na requisicao de insert
    //ele retorna um json no corpo
    //precisamos pegar cada dados e inserir na respectiva propriedade
    const bankId = req.body.bankId;
    const number = req.body.number;
    const name = req.body.name;
    const deactivated = req.body.deactivated;

    //aqui passa os parametros com dados para os atributos do model
    Agency.create({
        bankId: bankId,
        number: number,
        name: name,
        deactivated: deactivated,
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(agency => {
            if (agency) {
                res.status(status.OK).send(agency);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};

exports.SearchAll = (req, res, next) => {
    Agency.findAll()
        .then(agency => {
            if (agency) {
                res.status(status.OK).send(agency);
            }
        })
        .catch(error => next(error));
}

exports.SearchOne = (req, res, next) => {
    const id = req.params.id;

    Agency.findByPk(id)
            .then(agency => {
            if (agency) {
                res.status(status.OK).send(agency);
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
    const number = req.body.number;
    const name = req.body.name;
    const deactivated = req.body.deactivated;

    Agency.findByPk(id)
        //primeiro precisamos verificar se o dado existe
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(agency => {
            if (agency) {
                //se existir, vai atualizar
                //passa um objeto com as infos
                agency.update({
                    bankId: bankId,
                    number: number,
                    name: name,
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

    Agency.findByPk(id)
        .then(agency => {
            if (agency) {
                agency.destroy({
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
