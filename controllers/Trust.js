const TrustPost = require('../models/Trust');
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer")

module.exports.CreateTrust = async (req , res) => {
    const result = await cloudinary.uploader.upload(req.file.path)
    try {
        const Newtrust = new TrustPost();
        Newtrust.images = result.secure_url;
    
        Newtrust.save().then(ok => {
            res.status(200).json({err : false , message : `تم نشر المنشور ${ok.title}` , ok})
        })
        .catch(err => {
            res.status(400).json({err : true , message : err})
        })
    
    } catch (err) {
        console.log(err)
    }
   

}
module.exports.GetTrust = async (req , res) => {
    try {
        const AllData = await TrustPost.find();
        res.status(200).json({err : false , AllData})
    } catch (error) {
        res.status(400).json({err : true , message : 'Un Probleme au nivaeu de serveur'})
    }
}