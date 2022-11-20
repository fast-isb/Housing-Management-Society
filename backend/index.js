const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const contactus=require("./Models/ContactUs.js");
const app = express();
app.use(express.json());
app.use(cors())
const port = 3001;

mongoose
  .connect("mongodb+srv://kamil:kamililyas69@cluster0.mbddjuq.mongodb.net/test")
  .then(() => {
    console.log("Mongo Connected");
  })
  .catch(() => {
    console.log("Error :)");
  });

  app.post("/Kamil/giveconcerns", async (req, res) => {
  try {
    const temp = await new contactus(req.body);
    temp.save().then((out) => {
      console.log(out);
      res.json({saved: out });
    });
  } catch (error) {
    res.json({ result: error });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});