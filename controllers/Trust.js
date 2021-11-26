const TrustPost = require('../models/Trust');


module.exports.CreateTrust = (req , res) => {
    const file = req.files
    const Newtrust = new TrustPost();
    Newtrust.images = file;

    Newtrust.save().then(ok => {
        res.status(200).json({err : false , message : `تم نشر المنشور ${ok.title}` , ok})
    })
    .catch(err => {
        res.status(400).json({err : true , message : err})
    })


}
module.exports.GetTrust = async (req , res) => {
    try {
        const AllData = await TrustPost.find();
        res.status(200).json({err : false , AllData})
    } catch (error) {
        res.status(400).json({err : true , message : 'Un Probleme au nivaeu de serveur'})
    }
}