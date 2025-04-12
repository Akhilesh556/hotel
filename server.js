const express = require('express')
const app = express();
const db = require('./db')

const bodyParser = require('body-parser')
app.use(bodyParser.json())


app.get('/', function (req, res) {
    res.send("welcome to my hotel.")
})


const personroutes= require('./routes/personroutes')
app.use('/person', personroutes)

const menuroutes= require('./routes/menuroutes')
app.use('./menu', menuroutes)

app.listen(3000, () => {
    console.log("listening on port 3000")
})
 

// akhilesh bindra
// bsbdfb