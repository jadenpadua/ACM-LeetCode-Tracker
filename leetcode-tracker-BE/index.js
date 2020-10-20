const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = express.Router()
const app = express()
const apiPort = 8000

const MongoClient = require('mongodb').MongoClient
const MongoURL = "mongodb+srv://jaden:test1234@acmleetcodetracker.ppf0e.mongodb.net/ACMLeetCodeTracker?retryWrites=true&w=majority"
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

MongoClient.connect(MongoURL, function(err,client) {
    if(err) {
        console.log("Error occured while connect to MongoDB", err)
    }
    console.log("MongoDB Connected.....") 

    client.close()

})

app.get('/', (req,res) => {
    res.send("This is working")
})

app.post('/create-question', (req,res) => {
    console.log(req.body)
    res.send(req.body)
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))