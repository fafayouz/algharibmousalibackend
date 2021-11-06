const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const route = require('./routes/api')
const path = require('path')


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use('/Api' , route)
dotenv.config();

const PORT = 8001;
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is runnig in port ${PORT}`))
  )
  .catch((error) => console.log(error));
