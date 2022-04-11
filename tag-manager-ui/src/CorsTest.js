import { useEffect, useState } from 'react';

function CorsTest() {
    const [message, setMessage] = useState('Waiting')

    useEffect(() => {
        async function fetchData() {
            fetch('http://localhost:3000/cors')
                .then(response => response.json())
                .then(body => setMessage(body.message))
        }
        fetchData();
    }, [])

    return (<div>
        <h1>Backend Said : {message}</h1>
    </div>)
}

export default CorsTest;