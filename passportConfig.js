const User = require('./user')
const bcrypt = require('bcryptjs')
const localStrategy = require('passport-local').Strategy

module.exports = function(passport) {
    passport.use(
        new localStrategy((username, password, done) => {
            User.findOne({username: username}, (err, user) => {
                if(err) throw(err)
                if(!user) return done(null, false)  // null(ERROR) false(NO USER)
                bcrypt.compare(password, user.password, (err, res) => {
                    if(err) throw(err)
                    if(res === true) {
                        return done(null, user)
                    } else {
                        return done(null, false)
                    }
                })
            })
        })
    )

    passport.serializeUser((user, cb) => {
        cb(null, user.id)
    })
    passport.deserializeUser((id, cb) => {
        // RESTRICTING USER-DATA IN CLIENT
        User.findOne({_id: id}, (err, user) => {
            const userInformation = {
              username: user.username,
            };
            cb(err, userInformation)
        })
    })
}