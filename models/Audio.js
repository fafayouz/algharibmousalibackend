const mongoose = require("mongoose");

const AudioSchema = mongoose.Schema({
  lien: {
    type: String,
  },
});

module.exports = mongoose.model("AudioSchema", AudioSchema);
