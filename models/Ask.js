const mongoose = require("mongoose");


const AskSchema = mongoose.Schema({
    name : {
        type : String , 
        require : true , 
    },
    question : {
        type : String , 
        require : true , 
        maxLength : 40

    },
})

module.exports = mongoose.model("AskSchema", AskSchema);
