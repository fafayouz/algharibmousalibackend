const mongoose = require('mongoose')


const admin = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type : String,
        require:true,
        max:100,
        min:6
    }

})

module.exports = mongoose.model("admin" , admin)