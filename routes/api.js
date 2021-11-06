const express = require('express');
const { CreatePost, GetAllPosts, CreateAudio } = require('../controllers/Posts');
const {fileStorageEngine} = require('../middleware/ImageUpload')
const multer  = require('multer');
const upload = multer({storage: fileStorageEngine})



const router = express.Router();

router.post('/CreatePost' , upload.array('images',5),CreatePost)
router.get('/GetPosts' , GetAllPosts)
router.post('/CreateAudio' , CreateAudio)



module.exports = router ;