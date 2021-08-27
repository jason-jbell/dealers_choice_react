const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/dealers_choice_react')
const { STRING } = Sequelize.DataTypes

const Character = db.define('character', {
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    house: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    bloodType: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        defaultValue: 'Muggle-Born'
    },
    wandCore: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        defaultValue: 'dragon-heartsting'
    },
    patronus: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        defaultValue: 'none'
    }
})

module.exports = {
    db, 
    Character
};