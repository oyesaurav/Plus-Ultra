const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv').config()
const path = require('path')
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require('express');
const User = require("./user");

const app = express()

mongoose.connect("mongodb+srv://raj-aryan:RajAryan@cluster0.tpzwd.mongodb.net/auth?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Database connected');
})

/******************** MIDDLEWARE ********************/
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ encoded: true, extended: true }))
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}))
// passport.use(User.createStrategy())
app.use(cookieParser("secretcode"))
app.use(passport.initialize())
app.use(passport.session())
require('./passportConfig')(passport)
/******************** MIDDLEWARE ********************/










/******************** TEST-ROUTE ********************/
app.get("/helloServer", (req, res) => {
    res.json({
        message: "Hello from server!"
    })
    // res.redirect("/")
})
/******************** TEST-ROUTE ********************/





/******************** ROOT-ROUTE ********************/
app.get("/", (req, res) => {
    console.log("At homepage now!");
})
/******************** ROOT-ROUTE ********************/





/******************** HOME-ROUTE ********************/
app.get("/home", (req, res) => {
    res.render("<h1>Home</h1>")
})
/******************** HOME-ROUTE ********************/





/******************** STUDENTS-ROUTE ********************/
app.get("/students", (req, res) => {
    console.log("At students page now!");
})
/******************** STUDENTS-ROUTE ********************/





/******************** LOGIN-ROUTE ********************/
app.post("/login", (req, res, next) => {
    // User.findOne({username: "hello"}, (err, found) => {
    //     if(err) console.error(error);
    //     if(found) {
    //         console.log(found);
    //     } else {
    //         console.log("ERROR");
    //     }
    // })
    
    passport.authenticate("local", (err, user, info) => {
        if(err) throw(err)
        if(!user) res.send("No such user exists!");
        else {
            req.login(user, err => {
                if(err) throw(err)
                res.send('Logged in successfully!')
                console.log(req.user.username);
            })
        }
    })(req, res, next)
})
app.get("/logout", (req, res) => {
    req.logout()
    res.redirect("/students")
})
/******************** LOGIN-ROUTE ********************/





/******************** SIGNUP-ROUTE ********************/
app.get("/signup", (req, res) => {
    console.log("At signup page now!");
})
/******************** SIGNUP-ROUTE ********************/





/******************** EDIT-PROFILE-ROUTE ********************/
app.get("/editprofile", (req, res) => {
    console.log("At editprofile page now!");
})
/******************** EDIT-PROFILE-ROUTE ********************/





/******************** TEST-ROUTE ********************/
app.post("/send", (req, res) => {
    console.log(req.body)
})
/******************** TEST-ROUTE ********************/






/******************** TEST-ROUTE ********************/
app.get('*', (req, res) => {
    // res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    res.render("<h1>Go back!</h1>")
});
/******************** TEST-ROUTE ********************/










if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000");
})