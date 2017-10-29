const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PetSchema = new Schema({
  name: String,
  weight: Number,
  checkupDate: Date,
  phone: Number,
  fosterOwner: String
})

const Pet = mongoose.model('Pet', PetSchema)

module.exports Pet
