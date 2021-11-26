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
    NewAudio.playlist = req.body.playlist

    NewAudio.save().then(ok => {
        res.status(200).json({err : false , message :  `تم نشر الصوتية `})
    })
    .catch(err => {
        res.status(400).json({err : true , message : err})
    })
}
module.exports.DeletePost = (req ,res) => {
    const id = req.params.id 
    PostArticle.findByIdAndDelete(id).then(ok => {
        res.send({err : false , message : ' تم مسح المقالة  '   })
    }).catch(err => {
        res.send({error : true , message : err  })
    })

}

module.exports.GetAllAudio = async (req , res) => {
    try {
        const AllData = await PostAudio.find();
        res.status(200).json({err : false , AllData})
    } catch (error) {
        res.status(400).json({err : true , message : 'Un Probleme au nivaeu de serveur'})
    }
}
module.exports.DeleteAudio = (req ,res) => {
    const id = req.params.id 
    PostAudio.findByIdAndDelete(id).then(ok => {
        res.send({err : false , message : ' تم مسح الصوتية  '   })
    }).catch(err => {
        res.send({error : true , message : err  })
    })

}
module.exports.OnePost = (req , res) => {
    let type = req.query.type ;
    let postIds = req.query.id

    if(type === "array"){

    }
    PostArticle.find({'_id' : {$in : postIds}})
    .then(ok => {
        res.status(200).json(ok)
    }).catch(err => {
        console.log(err)
    })
}