const mongoose = require("mongoose");


const ReponseSchema = mongoose.Schema({
    name : {
        type : String , 
        require : true , 
    },
    question:{
        type:String
    },
    reponse : {
        type : String , 
        require : true , 
    },
})

module.exports = mongoose.model("ReponseSchema", ReponseSchema);