
var path = require('path')
const dotenv = require('dotenv');
dotenv.config();

const mockAPIResponse = require('./mockAPI.js')
const express = require('express')
const PORT = process.env.PORT
var bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require("node-fetch");





const app = express()
app.use(express.json())
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/sentiment-2.0', async function(req, res){

    const API_KEY = process.env.API_KEY
    const BASE_API_URL = process.env.BASE_API_URL
    const URL = `${BASE_API_URL}?key=${API_KEY}&url=${req.body.url}&lang=en`
    
    fetch(URL,{ method:'POST' })
    .then(async function(response){
        const status = response.status
        const body = await response.json()
        return {
            status,
            body
        }
    })
    .then(({ status, body }) => res.status(status).send({
        score_tag:body.score_tag,
        agreement: body.agreement,
        subjectivity: body.subjectivity,
        confidence: body.confidence,
        irony: body.irony,
    }))
    .catch(error => res.send(error));
  
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})


