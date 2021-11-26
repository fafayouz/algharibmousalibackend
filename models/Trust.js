const mongoose = require("mongoose");



const TrustSchema = mongoose.Schema({
    images: [],
})




module.exports = mongoose.model("TrustSchema", TrustSchema);