const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    createdAt:Date
})

module.exports = mongoose.model('users',userSchema)