const admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.Signup = async (req , res) => {
    const username = req.body.username
    const password = req.body.password

    const user = await admin.findOne({username :username}).exec()
    if(user) {
        return res.send({error : true , message : 'Username est deja utilisé'})
    }
    const code = await bcrypt.genSalt(10)

    const admintosave = new admin()
    admintosave.username = username
    admintosave.password = await bcrypt.hash(password , code)
    admintosave.save()
    .then((ok) => {
        res.send({err : false , message :'un nouvelle admin a été ajouter'})
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports.SignIn = async (req ,res) => {
    const username = req.body.username
    const password = req.body.password

    const user = await admin.findOne({username : username}).exec()
    //check if the user exist in our database 

    if(!user) {
        return res.send({error : true , message : 'invalid Username'})
    }
    //check if the password is correct 
    const isValid = await bcrypt.compare(password , user.password)
    if(!isValid){
        return res.send({error : true , message : 'password inccorect'})
    }
    let Token = jwt.sign({username} , 'l5d7s82sd45f2df58df13s5sd5s5ds96d652sqsqiksd55sd', {
        expiresIn: '1h',
    })
    return res.send({error : false , message : ('Is login') , Token:Token , username:username})
}