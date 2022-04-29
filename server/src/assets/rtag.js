const siteId = 1
const cartID = 2
const wishlistId = 3,
    orderId = "m-775665"

window.rtag = ((methodType, data) => {
    if (methodType === 'event') {
        fetch('http://localhost:9000/tag', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    if (methodType === 'addItemToCart') {
        fetch(`http://localhost:9000/v1/site/${siteId}/carts/${cartID}/addItemToCart`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    if (methodType === 'addToWishlist') {
        fetch(`http://localhost:9000/v1/sites/${siteId}/wishlists/${wishlistId}/addToWishlist`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    if (methodType === 'removeItemFromCart') {
        fetch(`http://localhost:9000/v1/sites/${siteId}/carts/${cartID}/removeItemFromCart`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    if (methodType === 'removeFromWishlist') {
        fetch(`http://localhost:9000/v1/sites/${siteId}/wishlists/${wishlistId}/removeFromWishlist`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    if (methodType === 'viewCart') {
        fetch(`http://localhost:9000/v1/sites/${siteId}/carts/${cartID}/viewCart`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    if (methodType === 'initiateCheckout') {
        fetch(`http://localhost:9000/v1/sites/${siteId}/carts/${cartID}/initiateCheckout`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    if (methodType === 'initiatePayment') {
        fetch(`http://localhost:9000/v1/sites/${siteId}/orders/${orderId}/initiatePayment`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    if (methodType === 'addOrModifyShippingOptions') {
        fetch(`http://localhost:9000/v1/sites/${siteId}/orders/${orderId}/addOrModifyShippingOptions`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    if (methodType === 'placeOrder') {
        fetch(`http://localhost:9000/v1/sites/${siteId}/orders/${orderId}/placeOrder`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    if (methodType === 'updateOrderStatus') {
        fetch(`http://localhost:9000/v1/sites/${siteId}/orders/${orderId}/updateOrderStatus`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
}) 
