const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbs'); // Ensure this path is correct

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
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
    },
    linkedinURL: {
        type: DataTypes.STRING,
    },
    resume: {
        type: DataTypes.TEXT,
    },
    currentGPA: {
        type: DataTypes.DECIMAL(3, 2),
    },
    internshipExperience: {
        type: DataTypes.TEXT,
    },
    top3Companies: {
        type: DataTypes.TEXT,
    },
    studentQ1: {
        type: DataTypes.TEXT,
    },
    studentQ2: {
        type: DataTypes.TEXT,
    },
    studentQ3: {
        type: DataTypes.TEXT,
    },
    studentQ4: {
        type: DataTypes.TEXT,
    },
    studentQ5: {
        type: DataTypes.TEXT,
    }
}, {
    timestamps: true,
});

module.exports = Student;
