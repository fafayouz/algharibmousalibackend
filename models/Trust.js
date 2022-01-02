const mongoose = require("mongoose");



const TrustSchema = mongoose.Schema({
    image: String,
})




module.exports = mongoose.model("TrustSchema", TrustSchema);