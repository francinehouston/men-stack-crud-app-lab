const mongoose = require('mongoose')

const clothingSchema = new mongoose.Schema({
  name: { type: String, required: false },
  description: { type: String, required: false },
  number: String ,
  category:{type:String,required:false}
  
});

const Clothing = mongoose.model('Clothing', clothingSchema)
module.exports = Clothing