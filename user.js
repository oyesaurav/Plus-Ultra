const mongoose = require('mongoose')
// const passportLocalMongoose = require('passport-local-mongoose')

const user = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    avatar: String,
    cover: String,
    name: String,
    contact: String,
    about: String,
    education: String,
    skills: String,
    achievements: String
})

// user.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", user)