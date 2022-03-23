const express = require("express");
const path = require('path')
const mongoose = require("mongoose");

const app = express();
const skillsRout = require('./routes/skills')
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use("/skills", require('./routes/skills'))

mongoose.connect("mongodb://localhost:27017/flights", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
() => {
    console.log("mongodb connected successfully!");
});

app.listen(port, () => {
    console.log(`Express-API-Warmup is running on port ${port}`);
  });
  