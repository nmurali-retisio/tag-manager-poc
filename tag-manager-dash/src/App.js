import logo from './logo.svg';
import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [pageView, setPageView] = useState(0);
  const [CartView, setCartView] = useState(0);
  const [productClicks, setProductClicks] = useState(0);
  const [productAdd, setProductAdd] = useState(0);
  const [productRemove, setProductRemove] = useState(0)
  const [wishlistCount, setWishlistCount] = useState(0)
  const [wishListRemoveCount, setWishListRemoveCount] = useState(0)
  const [checkout, setCheckout] = useState(0)
  const [paymentInititate, setPaymentInititate] = useState(0)

  const siteId = 1
  const cartID = 2
  const wishlistId = 3, orderId = "m-775665"


  useEffect(() => {
    fetch('http://localhost:9000/events', {
      method: 'GET',
      mode: 'cors',
    })
      .then(response => response.json())
      .then(body => {
        setPageView(body.pageViewEvent)
        setProductClicks(body.productClickEvent)
        setProductAdd(body.productAddEvent)
        setWishlistCount(body.wishlistAddEvent)
        setProductRemove(body.productRemoveEvent)
        setWishListRemoveCount(body.wishlistRemoveEvent)
        setCartView(body.cartViewEvent)
        setCheckout(body.checkoutEvent)
        setPaymentInititate(body.paymentEvent)
      })
  }, [])



  return (
    <div className="App">
      <h1>Dashboard</h1>
      <h2>Random website</h2>
      <h3>Cart view : {CartView}</h3>
      <h3>Page Views: {pageView}</h3>
      <h3>Product clicks: {productClicks}</h3>
      <h3>Payment inititate: {paymentInititate}</h3>
      <h3>Checkout inititate: {checkout}</h3>
      <h3>Product Added to cart : {productAdd}</h3>
      <h3>Product Remove from cart: {productRemove}</h3>
      <h3>Product Added to wishlist : {wishlistCount}</h3>
      <h3>Product Remove to wishlist : {wishListRemoveCount}</h3>
    </div>
  );
}

export default App;
