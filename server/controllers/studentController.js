const Student = require('../models/Student'); // Adjust the path as needed

exports.createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json({
            message: 'Student created successfully',
            id: student.id
        });
    } catch (error) {
        console.error('Error creating student:', error);
        res.status(500).json({
            error: 'Failed to create student',
            message: error.message
        });
    }
};
