const express = require('express')
const app = express()
const cors = require('cors')
const port = 9000
const path = require('path');
const { cursorTo } = require('readline');


var corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ['GET', 'PUT', 'POST'],
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const CustomEvents = {
    productClickEvent: 0,
    pageViewEvent: 0,
    productAddEvent: 0,
    productRemoveEvent: 0,
    wishlistAddEvent: 0,
    wishlistRemoveEvent: 0,
    cartViewEvent: 0,
    checkoutEvent: 0,
    paymentEvent: 0,
    onUpdateEvent: 0,
    orderPlaceEvent: 0,
    updateOrderStatusEvent: 0
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
    //console.log(req.body.data)
    if (CustomEvents.hasOwnProperty(eventType)) {

        //console.log("Method exists")
        CustomEvents[eventType] = CustomEvents[eventType] + 1
        //console.log("New Event counter", CustomEvents)
    }
    res.send({
        message: "Received Message",

    })
})

app.get('/events', cors(corsOptions), (req, res) => {
    res.send(CustomEvents)
})

app.post('/v1/site/:siteId/carts/:cartID/addItemToCart', cors(corsOptions), (req, res) => {
    const eventType = req.body.method;
    //res.send(CustomEvents)
    if (CustomEvents.hasOwnProperty(eventType)) {
        //console.log("Method exists")
        CustomEvents[eventType] = CustomEvents[eventType] + 1
        //console.log("New Event counter", CustomEvents)
    }
    res.send({
        "productAddEvent": CustomEvents.productAddEvent,
        "data": {
            "id": "e6f36a",
            "status": "success",
            "createdAt": 1442286338435
        }
    })
})

app.post('/v1/sites/:siteId/carts/:cartID/removeItemFromCart', cors(corsOptions), (req, res) => {
    const eventType = req.body.method;
    if (CustomEvents.hasOwnProperty(eventType)) {
        //console.log("Method exists")
        if (eventType === 'productRemoveEvent') {
            if (CustomEvents['productAddEvent'] > 0) {
                CustomEvents['productAddEvent'] = CustomEvents['productAddEvent'] - 1
            }
        }
        CustomEvents[eventType] = CustomEvents[eventType] + 1
        //console.log("New Event counter", CustomEvents)
    }
    res.send({
        "productRemoveEvent": CustomEvents.productRemoveEvent,
        "data": {
            "id": "e6f36a",
            "status": "success",
            "createdAt": 1442286338435
        }
    })
})

app.post('/v1/sites/:siteId/wishlists/:wishlistId/addToWishlist', cors(corsOptions), (req, res) => {
    const eventType = req.body.method;
    if (CustomEvents.hasOwnProperty(eventType)) {
        //console.log("Method exists")
        CustomEvents[eventType] = CustomEvents[eventType] + 1
        //console.log("New Event counter", CustomEvents)
    }
    //console.log(req.body)
    console.log(req.params)
    //res.send(CustomEvents)
    res.status(200).send({
        "wishlistAddEvent": CustomEvents.wishlistAddEvent,
        "data": {
            "id": "e6f36a",
            "status": "success",
            "createdAt": 1442286338435
        }
    })
})

app.post('/v1/sites/:siteId/wishlists/:wishlistId/removeFromWishlist', cors(corsOptions), (req, res) => {
    const eventType = req.body.method;
    if (CustomEvents.hasOwnProperty(eventType)) {
        //console.log("Method exists")
        if (eventType === 'wishlistRemoveEvent') {
            if (CustomEvents['wishlistAddEvent'] > 0) {
                CustomEvents['wishlistAddEvent'] = CustomEvents['wishlistAddEvent'] - 1
            }
        }
        CustomEvents[eventType] = CustomEvents[eventType] + 1
        //console.log("New Event counter", CustomEvents)
    }
    //console.log(req.body)
    res.status(200).send({
        "wishlistRemoveEvent": CustomEvents.wishlistRemoveEvent,
        "data": {
            "id": "e6f36a",
            "status": "success",
            "createdAt": 1442286338435
        }
    })
})

app.post('/v1/sites/:siteId/carts/:cartID/viewCart', cors(corsOptions), (req, res) => {
    const eventType = req.body.method;
    if (CustomEvents.hasOwnProperty(eventType)) {
        //console.log("Method exists")
        CustomEvents[eventType] = CustomEvents[eventType] + 1
        //console.log("New Event counter", CustomEvents)
    }
    //console.log(req.body)
    res.status(200).send({
        "cartViewEvent": CustomEvents.cartViewEvent,
        "data": {
            "id": "e6f36a",
            "status": "success",
            "createdAt": 1442286338435
        }
    })
})

app.post('/v1/sites/:siteId/carts/:cartID/initiateCheckout', cors(corsOptions), (req, res) => {
    const eventType = req.body.method;
    if (CustomEvents.hasOwnProperty(eventType)) {
        //console.log("Method exists")
        CustomEvents[eventType] = CustomEvents[eventType] + 1
        //console.log("New Event counter", CustomEvents)
    }
    //console.log(req.body)
    res.status(200).send({
        "checkoutEvent": CustomEvents.checkoutEvent,
        "data": {
            "id": "e6f36a",
            "status": "success",
            "createdAt": 1442286338435
        }
    })
})

app.post('/v1/sites/:siteId/orders/:orderId/initiatePayment', cors(corsOptions), (req, res) => {
    const eventType = req.body.method;
    if (CustomEvents.hasOwnProperty(eventType)) {
        //console.log("Method exists")
        CustomEvents[eventType] = CustomEvents[eventType] + 1
        //console.log("New Event counter", CustomEvents)
    }
    //console.log(req.body)
    res.status(200).send({
        "paymentEvent": CustomEvents.paymentEvent,
        "data": {
            "id": "e6f36a",
            "status": "success",
            "createdAt": 1442286338435
        }
    })
})

app.post('/v1/sites/:siteId/orders/:orderId/addOrModifyShippingOptions', cors(corsOptions), (req, res) => {
    const eventType = req.body.method;
    if (CustomEvents.hasOwnProperty(eventType)) {
        //console.log("Method exists")
        CustomEvents[eventType] = CustomEvents[eventType] + 1
        //console.log("New Event counter", CustomEvents)
    }
    //console.log(req.body)
    res.status(200).send({
        "onUpdateEvent": CustomEvents.onUpdateEvent,
        "data": {
            "id": "e6f36a",
            "status": "success",
            "createdAt": 1442286338435
        }
    })
})

app.post('/v1/sites/:siteId/orders/:orderId/placeOrder', cors(corsOptions), (req, res) => {
    const eventType = req.body.method;
    if (CustomEvents.hasOwnProperty(eventType)) {
        //console.log("Method exists")
        CustomEvents[eventType] = CustomEvents[eventType] + 1
        //console.log("New Event counter", CustomEvents)
    }
    //console.log(req.body)
    res.status(200).send({
        "orderPlaceEvent": CustomEvents.orderPlaceEvent,
        "data": {
            "id": "e6f36a",
            "status": "success",
            "createdAt": 1442286338435
        }
    })
})

app.post('/v1/sites/:siteId/orders/:orderId/updateOrderStatus', cors(corsOptions), (req, res) => {
    const eventType = req.body.method;
    if (CustomEvents.hasOwnProperty(eventType)) {
        //console.log("Method exists")
        CustomEvents[eventType] = CustomEvents[eventType] + 1
        //console.log("New Event counter", CustomEvents)
    }
    //console.log(req.body)
    res.status(200).send({
        "updateOrderStatusEvent": CustomEvents.updateOrderStatusEvent,
        "data": {
            "id": "e6f36a",
            "status": "success",
            "createdAt": 1442286338435
        }
    })
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