const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Ingles = sequelize.define('ingles', {
    NAME1: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    NAME2: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    NAME3: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    NAME4: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    NAME5: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ABAUTME: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    DESCRIPTION: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    UNIQUE: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TITLE1: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TITLE2: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TITLE3: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TITLE4: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TITLE1DESCRIPTION: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TITLE2DESCRIPTION: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TITLE3DESCRIPTION: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TITLE4DESCRIPTION: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TECHNOLOGY: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    PREV: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    SEEMORE: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    HTML: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    JS: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CSS: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GIT: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    REACT: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    NODE: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    GITHUB: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ANGULAR: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TYPESCRIPT: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TIME: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LUCK: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    POKEDEX: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    RANDM: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CRUD: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    HOTEL: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TITLETIME: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TITLELUCK: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TITLEPOKEDEX: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TITLERANDM: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TITLECRUD: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TITLEHOTEL: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LINK1: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LINK2: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LINK3: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LINK4: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LINK5: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LINK6: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LINK7: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LINK8: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CONTACT1: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    NAME: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ACCEPT: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    MESSAGE: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    MESSAGE1: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    SEND: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TITLECV: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CONTACTME: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    DOWLOAND: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CODE: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CODE1: {
        type: DataTypes.TEXT,
        allowNull: false
    },
});

module.exports = Ingles;