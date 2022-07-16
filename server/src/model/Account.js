const Sequelize = require('sequelize');

const sequelize = require('../database/database.js');

const Account = sequelize.define("account", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
    },
    bankId: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        validate: {
            len: [1, 4],
        },
        references: {model: 'bank', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    },
    agencyId: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        validate: {
            len: [1, 11]
        },
        references: {model: 'agencies', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    },
    number: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
    },
    password: {
        allowNull: false,
        type: Sequelize.STRING(200),
        validate: {
            len: [8, 200]
            
        }
    },
    customerId: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        validate: {
            len: [1, 11]
        },
        references: {model: 'customers', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    },
    balance: {
        allowNull: true,
        type: Sequelize.DECIMAL(10,2),
        notEmpty: true,
        isDecimal: true
    },
    deactivated: {
        allowNull: true,
        isDate: true,
        type: Sequelize.DATE()
    },
});

module.exports = Account;