const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    concern: {
      type: String,
      required: true,
    },
  },

);
let Contactus=mongoose.model("ContactCencern", ContactSchema);
module.exports =Contactus; 