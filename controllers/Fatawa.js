const PostFatwa = require('../models/Fatawa');


module.exports.CreateFatwa = (req , res) => {
    const NewFatwa = new PostFatwa();
    NewFatwa.name = req.body.name 
    NewFatwa.article = req.body.article
    NewFatwa.title = req.body.title

    NewFatwa.save().then(ok => {
        res.status(200).json({err : false , message : `تم نشر فتوى ${ok.name}` , ok})
    })
    .catch(err => {
        res.status(400).json({err : true , message : err})
    })
}
module.exports.GetFatwa = async (req , res) => {
    try {
        const AllData = await PostFatwa.find();
        res.status(200).json({err : false , AllData})
    } catch (error) {
        res.status(400).json({err : true , message : 'Un Probleme au nivaeu de serveur'})
    }
}