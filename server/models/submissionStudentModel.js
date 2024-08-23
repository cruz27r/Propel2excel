const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbs');

const Student = sequelize.define('SubmissionStudent', {
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
        allowNull: true,
        defaultValue: null
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
    linkedinURL: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    resume: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    currentGPA: {
        type: DataTypes.DECIMAL(3, 2),
        allowNull: true,
        defaultValue: null
    },
    internshipExperience: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    top3Companies: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    studentQ1: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    studentQ2: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    studentQ3: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    studentQ4: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    studentQ5: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    howDidYouHearAboutUs: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: 'Unknown'
    },
    organizations: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: 'None'
    }
}, {
    timestamps: true,
});

module.exports = Student;
