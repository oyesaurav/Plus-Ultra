const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
// const cors = require('cors')
const dotenv = require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(express.static(path.resolve(__dirname, '../client/build')));

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

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})