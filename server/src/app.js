const express = require('express')
const app = express()
const cors = require('cors')
const port = 9000
const path = require('path');


var corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:3000"],
    methods: ['GET', 'PUT', 'POST'],
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const CustomEvents = {
    productClickEvent: 0,
    pageViewEvent: 0
}

app.use(express.json())
// app.use(cors())

app.options('*', cors())

app.get('/hello', (req, res) => {
    res.send({
        message: 'Hello World!'
    })
})

app.get('/cors', cors(corsOptions), (req, res) => {
    res.send({
        message: 'Hello World!'
    })
})

app.post('/tag', cors(corsOptions), (req, res) => {
    const eventType = req.body.method;
    if (CustomEvents.hasOwnProperty(eventType)) {
        console.log("Method exists")
        CustomEvents[eventType] = CustomEvents[eventType] + 1
        console.log("New Event counter", CustomEvents)
    }
    res.send({
        message: "Received Message"
    })
})

app.get('/events', cors(corsOptions), (req, res) => {
    res.send(CustomEvents)
})

app.get('/rtag.js', cors(corsOptions), (req, res) => {
    console.log("Current dir name", __dirname)
    var options = {
        root: path.join(__dirname, 'assets')
    };
    res.sendFile('rtag.js', options)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})