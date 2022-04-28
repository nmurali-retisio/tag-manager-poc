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
  const [onUpdate, setOnUpdate] = useState(0)
  const [orderPlaced, setOrderPlaced] = useState(0)

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
        setOnUpdate(body.onUpdateEvent)
        setOrderPlaced(body.orderPlaceEvent)
      })
  }, [])



  return (
    <div className='App'>
      <h1>Dashboard</h1>
      <div className="dashbord">
        <div class="card">
          <div class="container">
            <h4><b>Product Added to cart:</b></h4>
            <p>{productAdd}</p>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Cart view:</b></h4>
            <p> {CartView}</p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <h4><b>Checkout inititate:</b></h4>
            <p> {checkout}</p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <h4><b>Update shipping Address:</b></h4>
            <p> {onUpdate}</p>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Payment inititate:</b></h4>
            <p> {paymentInititate}</p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <h4><b>Order Placed</b></h4>
            <p> {orderPlaced}</p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <h4><b>Product Added to wishlist:</b></h4>
            <p>{wishlistCount}</p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <h4><b>Product Remove to wishlist:</b></h4>
            <p>{wishListRemoveCount}</p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <h4><b>Page Views:</b></h4>
            <p> {pageView}</p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <h4><b>Product clicks:</b></h4>
            <p> {productClicks}</p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <h4><b>Product Remove from cart:</b></h4>
            <p>{productRemove}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
