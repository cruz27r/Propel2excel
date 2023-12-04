const multer = require('multer');
const path = require('path');
const fs = require('fs'); // Require the file system module

// Define the path for the uploads directory
const uploadDirectory = path.join(__dirname, '../uploads');

// Check if the uploads directory exists, and create it if it doesn't
if (!fs.existsSync(uploadDirectory)){
    fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDirectory); // Use the upload directory path
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
