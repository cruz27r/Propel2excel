const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbs'); // Ensure this path is correct

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
    },
    companyURL: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
    },
    companyQ1: {
        type: DataTypes.TEXT,
    },
    companyQ2: {
        type: DataTypes.TEXT,
    },
    companyQ3: {
        type: DataTypes.TEXT,
    },
    companyQ4: {
        type: DataTypes.TEXT,
    },
    companyQ5: {
        type: DataTypes.TEXT,
    }
}, {
    timestamps: true,
});

module.exports = Company;
