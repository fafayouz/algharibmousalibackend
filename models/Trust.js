const mongoose = require("mongoose");



const TrustSchema = mongoose.Schema({
    images: String,
})




module.exports = mongoose.model("TrustSchema", TrustSchema);