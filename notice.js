const mongoose = require('mongoose')
// const passportLocalMongoose = require('passport-local-mongoose')

const notice = new mongoose.Schema({
    date: String,
    body: String
})

// user.plugin(passportLocalMongoose)

module.exports = mongoose.model("Notice", notice)