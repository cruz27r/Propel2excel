const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbs');

const Company = sequelize.define('SubmissionCompany', {
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
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    companyURL: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    companyQ1: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    companyQ2: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    companyQ3: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    companyQ4: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    companyQ5: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    }
}, {
    timestamps: true,
});

module.exports = Company;
