const express = require('express');
const { CreatePost, GetAllPosts, CreateAudio, GetAllAudio, DeleteAudio, OnePost, DeletePost } = require('../controllers/Posts');
const {fileStorageEngine} = require('../middleware/ImageUpload')
const multer  = require('multer');
const { Asker, GetQuestions, Reponse, GetReponse, DeleteAsk } = require('../controllers/Ask');
const { Signup, SignIn } = require('../controllers/Admin');
const { CreateTrust, GetTrust } = require('../controllers/Trust');
const { CreateFatwa, GetFatwa } = require('../controllers/Fatawa');
const upload = multer({storage: fileStorageEngine})



const router = express.Router();

router.post('/CreatePost' , upload.single('image'),CreatePost)
router.post('/CreateTrust' , upload.single('image'),CreateTrust)
router.post('/CreateFatwa' , upload.array('photos',5),CreateFatwa)
router.get('/GetPosts' , GetAllPosts)
router.get('/GetFatwa' , GetFatwa)
router.get('/GetTrust' , GetTrust)
router.get('/post_by_id' , OnePost)
router.post('/CreateAudio' , CreateAudio)
router.get('/GetAudio' , GetAllAudio)
router.delete('/DeleteAudio/:id' , DeleteAudio)
router.delete('/DeletePost/:id' , DeletePost)
router.post('/Ask' , Asker)
router.get('/GetQuestions' , GetQuestions)
router.post('/Reponse' , Reponse)
router.get('/GetAllReponse' , GetReponse)
router.delete('/DeleteReponse/:id' , DeleteAsk)

router.post('/Signup' , Signup);
router.post('/Signin' , SignIn);




module.exports = router ;