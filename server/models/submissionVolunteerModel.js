const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbs'); // Ensure this path is correct

const Volunteer = sequelize.define('SubmissionVolunteer', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
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
    volunteerExperience: {
        type: DataTypes.TEXT,
    },
    volunteerQ1: {
        type: DataTypes.TEXT,
    },
    volunteerQ2: {
        type: DataTypes.TEXT,
    },
    volunteerQ3: {
        type: DataTypes.TEXT,
    },
    volunteerQ4: {
        type: DataTypes.TEXT,
    },
    volunteerQ5: {
        type: DataTypes.TEXT,
    }
}, {
    timestamps: true,
});

module.exports = Volunteer;
