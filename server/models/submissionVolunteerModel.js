const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbs'); // Adjust the path if needed

const Volunteer = sequelize.define('Volunteer', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    volunteerQ1: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    volunteerQ2: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    volunteerQ3: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    volunteerQ4: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

Volunteer.sync({ alter: true });

module.exports = Volunteer;
