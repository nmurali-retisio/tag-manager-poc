import logo from './logo.svg';
import {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [pageView, setPageView] = useState(0);
  const [productClicks, setProductClicks] = useState(0);
  const [loginMessage, setLoginMessage] = useState('');
  const [logoutData, setLogoutData] = useState('')
  const [clickedPromotioncount, setClickedPromotionCount] = useState('')
  const [clickProductCount, setClickedProductCount] = useState('')
  const [searchProductCount, setSearchProductCount] = useState('')
  const [viewCartBtn, setViewCartBtn] = useState('')

  useEffect(() => {
    fetch('http://localhost:9000/events', {
      method: 'GET',
      mode: 'cors',
    })
    .then(response => response.json())
    .then(body => {
      setPageView(body.pageViewEvent)
      setProductClicks(body.productClickEvent)
      setLoginMessage(body.login)
      setLogoutData(body.logout)
      setClickedPromotionCount(body.clickPromotion)
      setClickedProductCount(body.clickProduct)
      setSearchProductCount(body.searchProduct)
      setViewCartBtn(body.viewCart)
    })
  }, [])

  return (
    <div className="App">
      <h1>Dashboard</h1>
      <h2>Random website</h2>
      <h3>Page Views: {pageView}</h3>
      <h3>Product clicks: {productClicks}</h3>
      <h3>User has logged in: {loginMessage}</h3>
      <h3>User has logged out: {logoutData}</h3>
      <h3>Promotion click counter: {clickedPromotioncount}</h3>
      <h3>Products clicked: {clickProductCount}</h3>
      <h3>Products Searched: {searchProductCount}</h3>
      <h3>View Cart Details{viewCartBtn}</h3>
    </div>
  );
}

export default App;
