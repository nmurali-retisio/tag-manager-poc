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
}) 