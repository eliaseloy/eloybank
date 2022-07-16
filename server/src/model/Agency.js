const Sequelize = require('sequelize');

const sequelize = require('../database/database.js');

const Agency = sequelize.define("agency", {
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
            len: [1, 11]
        },
        references: {model: 'bank', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    },
    number: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        validate: {
            len: [4, 11]
        }
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING(40),
        notEmpty: true
    },
    deactivated: {
        allowNull: true,
        isDate: true,
        type: Sequelize.DATE()
    },
});

module.exports = Agency;