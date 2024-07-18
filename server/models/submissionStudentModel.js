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

const Student = sequelize.define('Student',{
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        get(){
            const rawFirstName = this.getDataValue('firstName');
            return rawFirstName ? rawFirstName.toUpperCase() : null;
        }
    }, 
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'NO_LAST_NAME',
        get(){
            const rawLastName = this.getDataValue('lastName');
            return rawLastName ? rawLastName.toUpperCase() : null;
        }
    },
    nameofInstitution: {
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
        allowNull: false,
        unique: true,
    },
    linkedinURL:{
        type: DataTypes.STRING,
        allowNull: false, 
        isUrl: {
            message: "Linkedin URL must be a valid URL"
        }
    },
    resume:{
        type: DataTypes.BLOB,
        allowNull: false,
        set(value){
            const compressedResume = zlib.deflateSync(value);
            this.setDataValue('resume', compressedResume);
        },
        get(){
            const uncompressedResume = this.getDataValue('resume');
            return uncompressedResume ? zlib.inflateSync(uncompressedResume) : null;
        }

    },
    currentGPA:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    internshipExperience:{
        type: DataTypes.STRING,
        allowNull: false 
    },
    top3Companies:{
        type: DataTypes.STRING,
        allowNull: false
    },
    studentQ1:{
       type: DataTypes.STRING,
       allowNull: false 
    },
    studentQ2:{
       type: DataTypes.STRING,
       allowNull: false 
    },
    studentQ3:{
       type: DataTypes.STRING,
       allowNull: false 
    },  
    studentQ4:{
       type: DataTypes.STRING,
       allowNull: false 
    },
    studentQ5:{
       type: DataTypes.STRING,
       allowNull: false 
    }
});

// Model Sync
Student.sync().then((data) => {
    console.log("Table and model synced successfully");
}).catch((err) => {
    console.log("Error syncing table and model");
})