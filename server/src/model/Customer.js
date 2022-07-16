const Sequelize = require('sequelize');

//busco os dados de configuracao do bd
const sequelize = require('../database/database.js');

//o define cria a tabela no bd
//o nome da tabela é invoice
//defino os atributos
const Customer = sequelize.define("customer", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    type: {
        allowNull: false,
        type: Sequelize.STRING(1),
        equals: "C, P",
        validate: {
            len: [1, 1]
            
        }
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING(40),
        isEmail: true
    },
    doc: {
        allowNull: false,
        type: Sequelize.STRING(30),
        validate: {
            len: [3, 30]
        }
    },
    birth: {
        allowNull: true,
        isDate: true,
        type: Sequelize.DATE()
    },
    address: {
        allowNull: false,
        type: Sequelize.STRING(80),
        validate: {
            len: [3, 80]
        }
    },
    zip: {
        allowNull: false,
        type: Sequelize.INTEGER(20),
        validate: {
            len: [5, 20]
        }
    },
    city: {
        allowNull: false,
        type: Sequelize.STRING(50),
        validate: {
            len: [3, 50]
        }
    },
    state: {
        allowNull: false,
        type: Sequelize.STRING(30),
        validate: {
            len: [3, 30]
        }
    },
    country: {
        allowNull: false,
        type: Sequelize.STRING(40),
        validate: {
            len: [2, 40]
        }
    },
    deactivated: {
        allowNull: true,
        isDate: true,
        type: Sequelize.DATE()
    },
});

module.exports = Customer;