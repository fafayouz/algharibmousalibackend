const multer  = require('multer')


module.exports.fileStorageEngine = multer.diskStorage({
    destination : (req , file , cb) => {
        cb(null , './uploads')
    },
    filename : (req , file , cb ) => {
        cb(null , `${Date.now()}${'--'}${file.originalname}`)
    }
})