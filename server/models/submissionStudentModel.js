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

const Student = sequelize.define('Student',{
    firstName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }, 
    lastName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'NO_LAST_NAME' 
    },
    nameofInstitution: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false 
    },
    email:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    phoneNumber:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    linkedinURL:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false // Mandatory or not??
    },
    resume:{
        type: Sequelize.DataTypes.BLOB,
        allowNull: false
    },
    currentGPA:{
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
    },
    internshipExperience:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false 
    },
    top3Companies:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    studentQ1:{
       type: Sequelize.DataTypes.STRING,
       allowNull: false 
    },
    studentQ2:{
       type: Sequelize.DataTypes.STRING,
       allowNull: false 
    },
    studentQ3:{
       type: Sequelize.DataTypes.STRING,
       allowNull: false 
    },  
    studentQ4:{
       type: Sequelize.DataTypes.STRING,
       allowNull: false 
    },
    studentQ5:{
       type: Sequelize.DataTypes.STRING,
       allowNull: false 
    }
});

// Model Sync
Student.sync().then((data) => {
    console.log("Table and model synced successfully");
}).catch((err) => {
    console.log("Error syncing table and model");
})