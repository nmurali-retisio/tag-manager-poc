import logo from './logo.svg';
import {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [pageView, setPageView] = useState(0);
  const [productClicks, setProductClicks] = useState(0);

  useEffect(() => {
    fetch('http://localhost:9000/events', {
      method: 'GET',
      mode: 'cors',
    })
    .then(response => response.json())
    .then(body => {
      setPageView(body.pageViewEvent)
      setProductClicks(body.productClickEvent)
    })
  }, [])

  return (
    <div className="App">
      <h1>Dashboard</h1>
      <h2>Random website</h2>
      <h3>Page Views: {pageView}</h3>
      <h3>Product clicks: {productClicks}</h3>
    </div>
  );
}

export default App;
