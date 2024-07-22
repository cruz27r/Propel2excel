const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    define: {
        freezeTableName: true
    }
});

const Volunteer = sequelize.define('Volunteer', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
            const rawFirstName = this.getDataValue('firstName');
            return rawFirstName ? rawFirstName.toUpperCase() : null;
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'NO_LAST_NAME',
        get() {
            const rawLastName = this.getDataValue('lastName');
            return rawLastName ? rawLastName.toUpperCase() : null;
        }
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
    volunteerQ1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    volunteerQ2: {
        type: DataTypes.STRING,
        allowNull: false
    },
    volunteerQ3: {
        type: DataTypes.STRING,
        allowNull: false
    },
    volunteerQ4: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Model Sync
Volunteer.sync().then(() => {
    console.log("Table and model synced successfully");
}).catch((err) => {
    console.log("Error syncing table and model", err);
});

module.exports = Volunteer;
