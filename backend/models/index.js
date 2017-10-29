const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/petManager')

let Pet = require('./pet.js')

module.exports.Pet = Pet
