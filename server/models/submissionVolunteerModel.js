const { allowedNodeEnvironmentFlags } = require('process');
const { DB_PASSWORD} = require('./path_config.js-where-password exists');
const Sequelize = require('sequelize');
const { type } = require('os');

const sequelize = new Sequelize('sequelize-learning', 'root', DB_PASSWORD,{ host: 'localhost',
    port: 3307,
    dialect: 'mysql',
    define: {
        freezeTableName: true
    } 
});

const Volunteer = sequelize.define('Volunteer', {
    firstName:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: Sequelize.DataTypes.STRING,
        allowNull:false
    },
    degreeStudied:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    currentCompany:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    phoneNumber:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    linkedinURL:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    experience:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    volunteerQ1:{
        type:Sequelize.DataTypes.STRING,
        allowNull: false
    },
    volunteerQ2:{
        type:Sequelize.DataTypes.STRING,
        allowNull: false
    }
});

// Model Sync
Volunteer.sync().then((data) => {
    console.log("Table and model synced successfully");
}).catch((err) => {
    console.log("Error syncing table and model");
})