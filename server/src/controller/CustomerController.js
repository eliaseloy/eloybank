const Customer = require('../model/Customer');
const status = require('http-status');



//inserir os dados no banco
exports.Insert = (req, res, next) => {
    //na requisicao de insert
    //ele retorna um json no corpo
    //precisamos pegar cada dados e inserir na respectiva propriedade
    const type = req.body.type;
    const name = req.body.name;
    const email = req.body.email;
    const doc = req.body.doc;
    const birth = req.body.birth;
    const address = req.body.address;
    const zip = req.body.zip;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;

    //aqui passa os parametros com dados para os atributos do model
    Customer.create({
        type: type,
        name: name,
        email: email,
        doc: doc,
        birth: birth,
        address: address,
        zip: zip,
        city: city,
        state: state,
        country: country,
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(customer => {
            if (customer) {
                res.status(status.OK).send(customer);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};

exports.SearchAll = (req, res, next) => {
    Customer.findAll()
        .then(customer => {
            if (customer) {
                res.status(status.OK).send(customer);
            }
        })
        .catch(error => next(error));
}

exports.SearchOne = (req, res, next) => {
    const id = req.params.id;

    Customer.findByPk(id)
            .then(customer => {
            if (customer) {
                res.status(status.OK).send(customer);
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
    const type = req.body.type;
    const name = req.body.name;
    const email = req.body.email;
    const doc = req.body.doc;
    const birth = req.body.birth;
    const address = req.body.address;
    const zip = req.body.zip;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;

    Customer.findByPk(id)
        //primeiro precisamos verificar se o dado existe
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(customer => {
            if (customer) {
                //se existir, vai atualizar
                //passa um objeto com as infos
                customer.update({
                    type: type,
                    name: name,
                    email: email,
                    doc: doc,
                    birth: birth,
                    address: address,
                    zip: zip,
                    city: city,
                    state: state,
                    country: country,
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

    Customer.findByPk(id)
        .then(customer => {
            if (customer) {
                customer.destroy({
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
