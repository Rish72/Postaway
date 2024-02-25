
// const multer = require('multer');
// const fs = require('fs');
// const path = require('path');
import multer from "multer";
import fs from 'fs';
const port = 3000;

// Define the upload directory
const uploadDirectory = './uploads';

// Check if the upload directory exists, create it if it doesn't
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory);
    console.log(`Upload directory '${uploadDirectory}' created.`);
}

// Set up Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDirectory);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({storage : storage})
export default upload
