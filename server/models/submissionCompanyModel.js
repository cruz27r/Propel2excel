const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbs'); // Adjust the path if needed

const Company = sequelize.define('Company', {
    companyName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contactPerson: {
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
    jobTitle: {
        type: DataTypes.STRING,
        allowNull: true
    },
    companySize: {
        type: DataTypes.STRING,
        allowNull: true
    },
    industry: {
        type: DataTypes.STRING,
        allowNull: true
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true
    },
    companyQ1: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    companyQ2: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    companyQ3: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    companyQ4: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

Company.sync({ alter: true });

module.exports = Company;
