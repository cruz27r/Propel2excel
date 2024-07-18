const { allowedNodeEnvironmentFlags } = require('process');
const Sequelize = require('sequelize');
const { type } = require('os');
const { DataTypes } = Sequelize;
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const sequelize = new Sequelize('sequelize-learning', 'root', DB_PASSWORD,{ host: 'localhost',
    port: PORT,
    dialect: 'mysql',
    define: {
        freezeTableName: true
    } 
});

const Volunteer = sequelize.define('Volunteer', {
    firstName:{
        type: DataTypes.STRING,
        allowNull: false,
        get(){
            const rawFirstName = this.getDataValue('firstName');
            return rawFirstName ? rawFirstName.toUpperCase() : null;
        }
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull:false,
        get(){
            const rawLastName = this.getDataValue('firstName');
            return rawLastName ? rawLastName.toUpperCase() : null;
        }
    },
    degreeStudied:{
        type: DataTypes.STRING,
        allowNull: false
    },
    currentCompany:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail:{
            message: "Email must be of the form foo@bar.com"
        } 
    },
    phoneNumber:{
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true
    },
    linkedinURL:{
        type: DataTypes.STRING,
        allowNull: false,
        isUrl:{
            message: "LinkedIn URL must be a valid URL"
        }
    },
    experience:{
        type: DataTypes.STRING,
        allowNull: false
    },
    volunteerQ1:{
        type: DataTypes.STRING,
        allowNull: false
    },
    volunteerQ2:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Model Sync
Volunteer.sync().then((data) => {
    console.log("Table and model synced successfully");
}).catch((err) => {
    console.log("Error syncing table and model");
})