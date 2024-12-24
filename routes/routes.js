const express = require('express');
const multer = require('multer');
// const { uploadImage, getImageUrl, getImageUrlList, saveUser, getUserData } = require('../controllers/imageController');
const {saveUser, getUserData, saveScore, getUserScore} = require('../controllers/controller')

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

router.post('/saveUser', saveUser);
router.post('/saveScore', saveScore);
router.post('/getUserScore', getUserScore);







module.exports = router;