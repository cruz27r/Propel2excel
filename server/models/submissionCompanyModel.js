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

const Company = sequelize.define('Company', {
    firstName:{
        type: Sequelize.DataTypes.STRING,
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
    companyWebsite:{
        type: DataTypes.STRING,
        allowNull: false,
        isUrl:{
            message: "Company Website URL must be a valid URL"
        }
    },
    industry:{
        type: DataTypes.STRING,
        allowNull: false
    },
    currentPartnerships:{
        type: DataTypes.STRING,
        allowNull: false
    },
    areasOfInterest:{
        type: DataTypes.STRING,
        allowNull: false
    },
    companyQ1:{
        type: DataTypes.STRING,
        allowNull: false
    },
    companyQ2:{
        type: DataTypes.STRING,
        allowNull: false 
    },
    companyQ3:{
        type: DataTypes.STRING,
        allowNull: false 
    },
    comments:{
        type: DataTypes.STRING,
        allowNull: true,
        set(value){
            const compressedComments = zlib.deflateSync(value);
            this.setDataValue('resume', compressedComments);
        },
        get(){
            const uncompressedComments = this.getDataValue('resume');
            return uncompressedComments ? zlib.inflateSync(uncompressedComments) : null;
        }
    }
});

// Model Sync
Volunteer.sync().then((data) => {
    console.log("Table and model synced successfully");
}).catch((err) => {
    console.log("Error syncing table and model");
})