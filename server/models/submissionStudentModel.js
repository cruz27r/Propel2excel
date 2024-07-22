const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbs'); // Adjust the path if needed

const Student = sequelize.define('Student', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nameofInstitution: {
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
    linkedinURL: {
        type: DataTypes.STRING,
        allowNull: true
    },
    resume: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    currentGPA: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    internshipExperience: {
        type: DataTypes.STRING,
        allowNull: true
    },
    top3Companies: {
        type: DataTypes.STRING,
        allowNull: true
    },
    studentQ1: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    studentQ2: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    studentQ3: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    studentQ4: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    studentQ5: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

Student.sync({ alter: true });

module.exports = Student;
