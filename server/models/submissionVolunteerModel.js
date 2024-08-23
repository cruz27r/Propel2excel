const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbs');

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
    volunteerExperience: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    volunteerQ1: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    volunteerQ2: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    volunteerQ3: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    volunteerQ4: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    volunteerQ5: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    }
}, {
    timestamps: true,
});

module.exports = Volunteer;
