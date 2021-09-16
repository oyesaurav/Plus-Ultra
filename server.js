const express = require('express')
const mongoose = require('mongoose')
// const cors = require('cors')
const dotenv = require('dotenv').config()
const path = require('path')

const app = express()
// const PORT = process.env.PORT

// mongoose.connect("mongodb+srv://raj-aryan:RajAryan@cluster0.tpzwd.mongodb.net/auth?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, () => {
//     console.log('Database connected');
// })

app.get("/helloServer", (req, res) => {
    res.json({
        message: "Hello from server!"
    })
})

app.post("/send", (req, res) => {
    console.log(req.body)
})

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000");
})