const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    define: {
        freezeTableName: true
    }
});

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
        unique: true,
        validate: {
            isEmail: {
                msg: "Email must be of the form foo@bar.com"
            }
        }
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    jobTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    companySize: {
        type: DataTypes.STRING,
        allowNull: false
    },
    industry: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    companyQ1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    companyQ2: {
        type: DataTypes.STRING,
        allowNull: false
    },
    companyQ3: {
        type: DataTypes.STRING,
        allowNull: false
    },
    companyQ4: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Model Sync
Company.sync().then(() => {
    console.log("Table and model synced successfully");
}).catch((err) => {
    console.log("Error syncing table and model", err);
});

module.exports = Company;
