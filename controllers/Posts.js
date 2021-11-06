const PostArticle = require('../models/Posts');
const PostAudio = require('../models/Audio');



module.exports.CreatePost = (req , res) => {
    const file = req.files
    const NewPost = new PostArticle();
    NewPost.title = req.body.title 
    NewPost.article = req.body.article
    NewPost.images = file;



    NewPost.save().then(ok => {
        res.status(200).json({err : false , message : `تم نشر المنشور ${ok.title}` , ok})
    })
    .catch(err => {
        res.status(400).json({err : true , message : err})
    })
}

module.exports.GetAllPosts = async (req , res ) => {
    try {
        const AllData = await PostArticle.find();
        res.status(200).json({err : false , AllData})
    } catch (error) {
        res.status(400).json({err : true , message : 'Un Probleme au nivaeu de serveur'})
    }
}

module.exports.CreateAudio = (req ,res) => {
    const NewAudio = new PostAudio();
    NewAudio.lien = req.body.lien

    NewAudio.save().then(ok => {
        res.status(200).json({err : false , message :  `تم نشر الصوتية `})
    })
    .catch(err => {
        res.status(400).json({err : true , message : err})
    })
}