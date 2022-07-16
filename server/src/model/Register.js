const Sequelize = require('sequelize');

const sequelize = require('../database/database.js');

const Register = sequelize.define("register", {
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
            len: [4, 4]
        },
        references: {model: 'bank', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    },
    agencyId: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        validate: {
            len: [4, 11]
        },
        references: {model: 'agencies', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    },
    accountId: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        validate: {
            len: [1, 11]
        },
        references: {model: 'accounts', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    },
    date: {
        allowNull: false,
        type: Sequelize.DATE(),
        isDate: true
    },
    type: {
        allowNull: false,
        type: Sequelize.STRING(20),
        validate: {
            len: [1, 20]
        }
    },
    description: {
        allowNull: false,
        type: Sequelize.STRING(80),
        notEmpty: true,
        validate: {
            len: [5, 80]
        }
    },
    amount: {
        allowNull: false,
        type: Sequelize.DECIMAL(),
        isDecimal: true
    },
});

module.exports = Register;