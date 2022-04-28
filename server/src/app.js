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
    pageViewEvent: 0,
    login: 0,
    logout: 0,
    clickPromotion: 0,
    clickProduct: 0,
    addItemToCart: 0,
    searchProduct: 0,
    removeItemFromCart: 0,
    changeQuantity: 0
    

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

// app.post('/tag', cors(corsOptions), (req, res) => {
//     const eventType = req.body.method;
//     if (CustomEvents.hasOwnProperty(eventType)) {
//         console.log("Method exists")
//         CustomEvents[eventType] = CustomEvents[eventType] + 1
//         console.log("New Event counter", CustomEvents)
//     }
//     res.status(201).send({
//         message: "Received Message"
//     })
// })

app.post('/integration/v1/sites/:siteID/login', cors(corsOptions), (req, res) => {
    const eventType = req.body.method;
    if (CustomEvents.hasOwnProperty(eventType)) {
        console.log("Method exists")
        CustomEvents[eventType] = CustomEvents[eventType] + 1
        console.log("New Event counter", CustomEvents)
        let timeStamp = Date.now();
        res.status(201).send ({
            "data": {   "id": "e6f36a",    
                        "status": "success",    
                        "createdAt": timeStamp
                    }
        })
    } 
})

app.post('/integration/v1/sites/:siteID/logout', cors(corsOptions), (req, res) => {
    const eventType = req.body.method;
    if (CustomEvents.hasOwnProperty(eventType)) {
        console.log("Method exists")
        CustomEvents[eventType] = CustomEvents[eventType] + 1
        console.log("New Event counter", CustomEvents)
        let timeStamp = Date.now();
        res.status(201).send ({
            "data": {   "id": "e6f36a",    
                        "status": "success",    
                        "createdAt": timeStamp
                    }
        })
    } 
})

app.post('/integration/v1/sites/:siteID/clickPromotion', cors(corsOptions), (req, res) => {
    const eventType = req.body.method;
    if (CustomEvents.hasOwnProperty(eventType)) {
        console.log("Method exists")
        CustomEvents[eventType] = CustomEvents[eventType] + 1
        console.log("New Event counter", CustomEvents)
        let timeStamp = Date.now();
        res.status(201).send ({
            "data": {   "id": "e6f36a",    
                        "status": "success",    
                        "createdAt": timeStamp
                    }
        })
    } 
})

app.post('/integration/v1/sites/:siteID/clickProduct', cors(corsOptions), (req, res) => {
    const eventType = req.body.method;
    if (CustomEvents.hasOwnProperty(eventType)) {
        console.log("Method exists")
        CustomEvents[eventType] = CustomEvents[eventType] + 1
        console.log("New Event counter", CustomEvents)
        let timeStamp = Date.now();
        res.status(201).send ({
            "data": {   "id": "e6f36a",    
                        "status": "success",    
                        "createdAt": timeStamp
                    }
        })
    } 
})

app.post('/integration/v1/sites/:siteID/searchProduct', cors(corsOptions), (req, res) => {
    const eventType = req.body.method;
    if (CustomEvents.hasOwnProperty(eventType)) {
        console.log("Method exists")
        CustomEvents[eventType] = CustomEvents[eventType] + 1
        console.log("New Event counter", CustomEvents)
        let timeStamp = Date.now();
        res.status(201).send ({
            "data": {   "id": "e6f36a",    
                        "status": "success",    
                        "createdAt": timeStamp
                    }
        })
    } 
})

app.post('/integration/v1/sites/:siteID/carts/:cartID/addItemToCart', cors(corsOptions), (req, res) => {
    const eventType = req.body.method;
    if (CustomEvents.hasOwnProperty(eventType)) {
        console.log("Method exists")
        CustomEvents[eventType] = CustomEvents[eventType] + 1
        console.log("New Event counter", CustomEvents)
        let timeStamp = Date.now();
        res.status(201).send ({
            "data": {   "id": "e6f36a",    
                        "status": "success",    
                        "createdAt": timeStamp
                    }
        })
    } 
})

app.post('/integration/v1/sites/:siteID/carts/:cartID/removeItemFromCart', cors(corsOptions), (req, res) => {
    const eventType = req.body.method;
    if (CustomEvents.hasOwnProperty(eventType)) {
        console.log("Method exists")
        CustomEvents[eventType] = CustomEvents[eventType] + 1
        console.log("New Event counter", CustomEvents)
        let timeStamp = Date.now();
        res.status(201).send ({
            "data": {   "id": "e6f36a",    
                        "status": "success",    
                        "createdAt": timeStamp
                    }
        })
    } 
})

app.post('/integration/v1/sites/:siteID/carts/:cartID/changeQuantity', cors(corsOptions), (req, res) => {
    const eventType = req.body.method;
    if (CustomEvents.hasOwnProperty(eventType)) {
        console.log("Method exists")
        CustomEvents[eventType] = CustomEvents[eventType] + 1
        console.log("New Event counter", CustomEvents)
        let timeStamp = Date.now();
        res.status(201).send ({
            "data": {   "id": "e6f36a",    
                        "status": "success",    
                        "createdAt": timeStamp
                    }
        })
    } 
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