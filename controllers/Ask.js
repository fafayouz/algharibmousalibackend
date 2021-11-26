const Ask = require('../models/Ask');
const Reponse = require('../models/Reponse')

module.exports.Asker = (req , res) => {
    const Name = req.body.name
    const Question = req.body.question
    if (Name.length > 20 ) {
        return res.send({err : true , message:'إسمك لا يتجاوز 20 حرفا'})
    }
    if(Question.length > 40) {
        return res.send({err : true , message:' السؤال لا يتجاوز 40 حرف '})
    }

    const newAsk = new Ask();
    newAsk.name = Name;
    newAsk.question = Question;

    newAsk.save().then(ok => {
        res.status(200).json({err : false , message :'تم طرح السؤال ، سنيجب في أقرب وقت .'})
    }).catch(err => {
        console.log(err)
    })
}

module.exports.GetQuestions = async (req , res) => {
    try {
        const AllQuestions = await Ask.find();
        res.status(200).json({err : false , AllQuestions})
    } catch (error) {
        res.status(400).json({err : true , message : 'Un Probleme au nivaeu de serveur'})
    }
}

module.exports.Reponse =  (req , res) => {

        const NewReponse = new Reponse();
        NewReponse.name = req.body.name
        NewReponse.reponse = req.body.reponse
        NewReponse.question = req.body.question

        NewReponse.save().then(ok => {
            res.status(200).json({err : false , message : 'تم الرد على السؤال'})
        }).catch(err => {
            console.log(err)
        })
}

module.exports.GetReponse = async (req ,res) => {
    try {
        const AllReponse = await Reponse.find();
        res.status(200).json({err : false , AllReponse})
    } catch (error) {
        res.status(400).json({err : true , message : 'Un Probleme au nivaeu de serveur'})
    }
}
module.exports.DeleteAsk =  (req ,res) => {
    const id = req.params.id 
    Ask.findByIdAndDelete(id).then(ok => {
        res.send({err : false , message : 'تم الإجابة على السؤال'   })
    }).catch(err => {
        res.send({error : true , message : err  })
    })
}