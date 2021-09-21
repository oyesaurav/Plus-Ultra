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
const Notice = require('./notice')
// const { RSA_NO_PADDING } = require('constants')

const app = express()
const REACT_PORT = "http://localhost:3000"
const NODE_PORT = "http://localhost:5000"
const BUILD_PORT = "https://plus-ultra-d6.herokuapp.com"

mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Database connected');
})

/******************** MIDDLEWARE ********************/
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ encoded: true, extended: true }))
app.use(cors({
    origin: "https://plus-ultra-try.herokuapp.com/",
    credentials: true
}))
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
}))
// passport.use(User.createStrategy())
app.use(cookieParser(process.env.SECRET))
app.use(passport.initialize())
app.use(passport.session())
require('./passportConfig')(passport)
/******************** MIDDLEWARE ********************/




/******************** ROOT-ROUTE ********************/
app.get("/", (req, res,next) => {
    console.log("At homepage now!");
    next()
})
app.get("/home/:id", (req, res) => {
    const id = req.params.id
    res.send(id)
    // console.log(id);
})
/******************** ROOT-ROUTE ********************/




/******************** TEST-ROUTE ********************/
app.get("/helloServer", (req, res,next) => {
    res.status(200).json({
        message: "Hello from server!"
    })
    next()
    res.send("Hello from server!")
})
/******************** TEST-ROUTE ********************/




/******************** HOME-ROUTE ********************/
app.get("/home", (req, res,next) => {
    console.log("<h1>Home</h1>");
    next()
    // res.render("<h1>Home</h1>")
})
/******************** HOME-ROUTE ********************/





/******************** STUDENTS-ROUTE ********************/
app.get("/students", (req, res,next) => {
   console.log("At students page now!");
    next()
})
/******************** STUDENTS-ROUTE ********************/





/******************** LOGIN-ROUTE ********************/
app.post("/login", async (req, res, next) => {
    
    await passport.authenticate("local", (err, user, info) => {
        if(err) throw(err)
        if(!user) res.send("No user found")
        if(user) {
            req.login(user, (error) => {
                if(error) throw(error)
                res.send('Logged in successfully!')
                // console.log("USER: ", user)
                // res.redirect(`/dashboard/${user.username}`)
            })
        }
    })(req, res, next)
})

app.get("/logout", (req, res,next) => {
    req.logout()
    // console.log("Successfully logged out!");
    // res.send("Logged out!")
    next()
})
/******************** LOGIN-ROUTE ********************/




// {$or: [{email: req.body.email}, {username: req.body.username}]}
/******************** SIGNUP-ROUTE ********************/
app.post("/signup", (req, res) => {
    User.findOne( {$or: [{email: req.body.email}, {username: req.body.username}]}, async(err,doc) => {
        if(err) throw(err);
        if(doc) res.send("User exists")

        if(!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const newUser = new User({
                email: req.body.email,
                username: req.body.username,
                password: hashedPassword
            });
            await newUser.save();
            res.send("New User registered")
        }
    });
});
/******************** SIGNUP-ROUTE ********************/





/******************** EDIT-PROFILE-ROUTE ********************/
app.get("/editprofile", (req, res,next) => {
    console.log("At editprofile page now!");
    next()
})
/******************** EDIT-PROFILE-ROUTE ********************/





/******************** DASHBOARD-ROUTE ********************/
// app.post("/send", (req, res) => {
//     res.send(req.body)
// })
app.get("/dashboard/:id", (req, res,next) => {
    console.log("At dashboard now!");
    // res.sendFile(path.join(__dirname, "client/public/index.html"))
     next()
 })


function loggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect('/');
    }
  }

  app.get("/dash/:id",loggedIn, (req, res, next) => {
    const user = req.params.id
    
    User.findOne({username: user}, (err, found) => {
        if(err) throw(err)
        if(!found) {
            res.status(404).json({ message: "BYE" })
            // console.log("BYE");
        }
        if (found) {
            const foundUser = {...found._doc}
            // console.log(found);
            res.status(200).json({
                id: foundUser._id,
                email: foundUser.email,
                username: foundUser.username,
                about: foundUser.about,
                achievements: foundUser.achievements,
                contact: foundUser.contact,
                skills: foundUser.skills,
                message: "HELLO" 
            })
            // next()
            // console.log("HELLO");
        }
    })
    
})

app.post("/updateProfile/:id", (req, res) => {
    const userId = req.params.id
    const updatedUser = {
        $set: {
            username: req.body.username,
            email: req.body.email,
            about: req.body.about,
            achievements: req.body.achievements,
            contact: req.body.contact,
            skills: req.body.skills,
        }
    }

    // console.log(userId, req.body.username, req.body.email);
    
    User.updateOne({_id: userId}, updatedUser, (err, found) => {
        if(err) throw(err)
        if(!found) res.send("Something went wrong")
        if(found) res.send("Updated profile")
    })
})
/******************** DASHBOARD-ROUTE ********************/






/******************** NOTICE-ROUTE ********************/
app.post("/noticeboard", (req, res) => {
    const newNotice = new Notice({
        date: req.body.date,
        body: req.body.body
    })
    newNotice.save()
    // console.log(newNotice);
})
app.get("/notice", (req, res) => {

    Notice.find({}, (err, found) => {
        if(err) throw(err)
        if(!found) res.send("No new notices!")
        if(found) {
            res.json({message: found})
            // res.send("Updated notices!")
        }
    })
    // next()
});
app.post("/delete-notice/:id", (req, res) => {
    const id = req.params.id
    Notice.deleteOne({_id: id}, (err, deleted) => {
        if(err) throw(err)
        if(deleted) res.send("Notice deleted!")
        else res.send("Something went wrong!")
    })
    // console.log(id);
})
app.post("/edit-notice/:id", (req, res) => {
    const id = req.params.id
    // console.log(id);
    const updatedNotice = {
        $set: {
            date: req.body.date,
            body: req.body.body
        }
    }
    // console.log(updatedNotice);
    Notice.updateOne({_id: id}, updatedNotice, (err, found) => {
        if(err) throw(err)
        if(!found) res.send("Something went wrong")
        if(found) res.send("Updated profile")
    })
})
/******************** NOTICE-ROUTE ********************/










if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    app.get("/*", function(req, res) {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
      });
}

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000");
})