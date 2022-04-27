import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Button, Card, Input, Select, Spin } from 'antd';
import { useEffect, useState } from 'react'
import moment from "moment";
import productData from './mock/productData.json'
import { osName, isMobile } from "react-device-detect";
import TextArea from 'antd/lib/input/TextArea';


const { Meta } = Card;
const { Option } = Select

function App() {

  const [itemCount, setItemCount] = useState(0)
  const [wishListItems, setWishListItems] = useState({ items: [] })
  const [wishItemCount, setWishItemCount] = useState(0)
  const [itemQuantity, setItemQuantity] = useState(0)
  const [addressToggle, setAddressToggle] = useState(true)
  const [checkoutInitiate, setCheckoutInitiate] = useState(false)
  const [sidePanelToggle, setSidePanelToggle] = useState(false)
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [deviceType, setDeviceType] = useState('')
  const [paymentType, setPaymentType] = useState('')
  const [loadingToggle, setLoadingToggle] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(true)

  let cartProduct = {
    productId: '',
    productName: '',
    modelNumber: '',
    quantity: '',
    price: '',
    coupon: '',
    discount: ''
  }



  const deviceParam = () => {
    if (isMobile) {
      setDeviceType("Mobile")
    } else {
      setDeviceType("Desktop")
    }
  }

  const onItemAddToCard = (e, product) => {
    deviceParam()
    e.preventDefault();
    window.rtag('addItemToCart', {
      'method': 'productAddEvent',
      'data': {
        'timeStamp': moment(new Date(), "DD:MM:YYYYTHH:MM"),
        'DeviceParam': {
          'deviceType': deviceType,
          'osType': osName
        }
      }
    })

    const item = e.target.value;
    console.log(product)
    cartProduct.productId = product.productId
    cartProduct.productName = product.productName
    cartProduct.modelNumber = product.modelNumber
    cartProduct.quantity = product.quantity
    cartProduct.price = product.price
    cartProduct.coupon = product.coupon
    cartProduct.discount = product.discount

    setCartItems([...cartItems, cartProduct]);
    setItemQuantity(itemQuantity + 1)
    setItemCount(itemCount + 1)
    // setShowItemToggle(true)
  }

  const onItemQuantityReduce = () => {
    window.rtag('removeItemFromCart', {
      'method': 'productRemoveEvent',
      'data': {
        'timeStamp': moment(new Date()).format("DD-MM-YYYYTHH:MM")
      }
    })

    if (itemCount > 0 || itemQuantity > 0) {
      setItemCount(itemCount - 1)
      setItemQuantity(cartItems.quantity - 1)
    }

  }

  const onItemQuantityIncrease = () => {
    setItemQuantity(cartItems.quantity + 1)
    setItemCount(itemCount + 1)
  }

  const addToWishlist = (e) => {
    e.preventDefault();
    window.rtag('addToWishlist', {
      'method': 'wishlistAddEvent',
      'data': {
        "skuID": "SKU_12345",
        "productID": "PRD_5474",
        "visitorID": "123e4567-e89b-12d3-a456",
        "profileID": "rob@gmail.com",
        "catalogID": "CAT-1",
        'timeStamp': moment(new Date()).format("DD-MM-YYYYTHH:MM"),
      }
    })
    let value = e.target.value
    wishListItems.items.push({
      productName: value,
      quantity: 1
    })
    console.log(wishListItems)
    setWishItemCount(wishItemCount + 1)
    setWishListItems(wishListItems)
  }

  const removeFromWishlists = (e) => {
    e.preventDefault();
    window.rtag('removeFromWishlist', {
      'method': 'wishlistRemoveEvent',
      'data': {
        "skuID": "SKU_12345",
        "productID": "PRD_5474",
        "visitorID": "123e4567-e89b-12d3-a456",
        "profileID": "rob@gmail.com",
        "catalogID": "CAT-1",
        'timeStamp': moment(new Date()).format("DD-MM-YYYYTHH:MM"),
      }
    })
    let value = e.target.value
    //console.log(value)
    //console.log(wishListItems)
    if (wishListItems.items.length > 0) {

      wishListItems.items.pop()
      console.log(wishListItems)
      setWishItemCount(wishItemCount - 1)
    }
  }

  const totalpriceQuantity = () => {
    let Quantity = 0, price = 0;
    if (cartItems.length > 0) {
      for (let i = 0; i < cartItems.length; i++) {
        Quantity = Quantity + cartItems[i].quantity
        price = price + cartItems[i].price
      }
    }
    setTotalQuantity(Quantity)
    setTotalPrice(price)
  }

  const onViewCart = () => {
    totalpriceQuantity()
    setSidePanelToggle(true)
    window.rtag('viewCart', {
      'method': 'cartViewEvent',
      'data': {
        "cartID": "c-9774",
        "profileID": "ab@xyz.com",
        "visitorID": "",
        "currency": "USD",
        "items": [{
          "skuID": "232438",
          "modelNumber": "PRF1667HB",
          "productID": "232438",
          "quantity": "2",
          "listPrice": 99.88,
          "itemTax": 15.56,
          "salePrice": 199.76,
          "promotionID": "4c916580-422d-40c4-8055-030172d0970d",
          "discountType": "Percentage",
          "discount": 19.76,
          "shippingMethod": "ISPU",
          "shippingType": "Store",
          "ShippingStoreID": "store1"
        }],
        "totalCartValue": 180,
        "totalTax": 15.56,
        "totalDiscount": 19.76,
        'timeStamp': moment(new Date()).format("DD-MM-YYYYTHH:MM")
      }
    })
  }

  const initiateCheckout = () => {
    setCheckoutInitiate(true)
    window.rtag('initiateCheckout', {
      'method': 'checkoutEvent',
      'data': {
        "orderID": "m-775665",
        "profileID": "rh28@bm.com",
        "visitorID": "",
        "items": [{
          "skuID": "232438",
          "modelNumber": "PRF1667HB",
          "productID": "232438",
          "quantity": "2",
          "listPrice": 99.88,
          "itemTax": 15.56,
          "salePrice": 199.76,
          "promotionId": "4c916580-422d-40c4-8055-030172d0970d",
          "discountType": "Percentage",
          "discount": 19.76,
          "shippingPostalCode": "32746"
        }],
        "currency": "USD",
        "orderPromotionID": "4c916580-422d-40c4-8055-030172d0xxxd",
        "orderPromotionDiscount": 1.2,
        "totalOrderValue": 180,
        "totaltax": 15.56,
        "totalDiscount": 19.76,
        'timeStamp': moment(new Date()).format("DD-MM-YYYYTHH:MM")
      }
    })
  }

  const onPaymentTypeChenage = (value) => {
    setPaymentType(value)
  }

  const inititatePayment = () => {
    window.rtag('initiatePayment', {
      'method': 'paymentEvent',
      'data': {
        "profileID": "rh28@bm.com",
        "visitorID": "",
        "amount": 65.55,
        "currency": "USD",
        "paymentMethod": "VISA",
        'timeStamp': moment(new Date()).format("DD-MM-YYYYTHH:MM")
      }
    })
    setLoadingToggle(true)
    setCheckoutInitiate(false)
    setSidePanelToggle(false)
  }


  const orderPlacedHandler = () => {
    console.log(cartItems.length)
    for (let i = cartItems.length; i > 0; i--) {
      console.log(cartItems.length)
      cartItems.pop()
    }
    if (cartItems.length === 0) {
      setOrderPlaced(false)
      setItemCount(0)
    }
    console.log(cartItems)
  }


  return (
    <div className='main-container'>
      <header className='topheader'>
        <Button className='homeButton' type='primary' onClick={() => setLoadingToggle(false)}>Home</Button>
        <div className='hearderCartLabel'>
          <Button className='cartLabel'>Wishlist <label className='cartLabel'>{wishItemCount}</label></Button>

        </div>
        <div className='hearderCartLabel'>
          <Button className='cartLabel' onClick={onViewCart}>Cart <label className='cartLabel'>{itemCount}</label></Button>

        </div>

        <Button className='loginButton' type="primary" size='large'>
          Login
        </Button>

      </header>
      <nav className='navbar'>

      </nav>
      {loadingToggle === false ?
        <section className='main-section'>
          <section className='container'>
            {productData.items.map((product, key) => (
              <div className="card" key={key}>
                <div className='cardDesc'>
                  <div className='cardItemToggle'>
                    <div > <p className='productName'>{product.productName}</p></div>
                    <div>
                      {wishListItems.items.length > 0 ? (wishListItems.items.find(items => items.productName === product.productName) ?
                        <button value={key} onClick={removeFromWishlists}>Remove from wishlist</button> :
                        <button value={product.productName} onClick={addToWishlist}>Add to wishlist</button>) : <button value={product.productName} onClick={e => addToWishlist(e)}>Add to wishlist</button>}
                    </div>
                  </div>

                  <p className='productId'>{product.modelNumber}</p>
                  <p className='productDesc'>{product.Description}</p>
                </div>
                <div className='cardItemToggle'>
                  <h2 className='productPrice'> ${product.price}</h2>
                  {cartItems.length > 0 && cartItems.find(item => item.productName === product.productName) ? <Button type='primary' onClick={onViewCart}>view cart</Button> :
                    <Button type='primary' key={key} value={product.productName} onClick={e => onItemAddToCard(e, product)}>Add to Card</Button>
                  }
                </div>
              </div>
            ))}
          </section>
        </section> :
        <>
          <h3 className='messageHeading'>Processing with payment : {paymentType}</h3>
          {orderPlaced ? <> <Spin className='loading' size="large" />  <section className='cartViewList'>
            <Button className='processOrder' type="primary" onClick={orderPlacedHandler} >Placed</Button>
            <Button className='cancelPayment' type="ghost" onClick={() => setLoadingToggle(false)}>Cancel</Button></section></> : <label className='successLabel'>Order Successfully Placed</label>}

        </>}
      <section className={sidePanelToggle === false ? "hideSidePanel " : 'sidepanel'}>
        <a class="closebtn" onClick={() => setSidePanelToggle(false)}>×</a>
        <h2 className='itemLabel'>Cart</h2>
        <div>
          <ul className='itemLists'>
            {cartItems.map((item, key) => (<>
              <div className='cartViewList'>
                <li className='itemList' key={key}>{item.productName}</li>


                {/* <Button className='removeItem' value={item.productName} onClick={onItemQuantityReduce}>-</Button> */}
                <Input className='dispalyQuantity' value={item.quantity} readOnly></Input>
                {/*  <Button className='addItem' value={item.productName} onClick={onItemQuantityIncrease}>+</Button> */}


                <Input className='dispalyPrice' value={item.price} readOnly></Input>

              </div>

            </>))}
            {cartItems.length > 0 ? (<>
              <hr></hr>
              <div className='cartViewList'>
                <label className='itemList'></label>
                <div className='viewList'>
                  <label className='cartLabel'>Quantity</label>
                  <Input className='totalyQuantity' readOnly value={totalQuantity}></Input>
                </div>
                <div className='viewList'>
                  <label className='cartLabel'>Total:-</label>
                  <Input className='totalPrice' readOnly value={totalPrice}></Input>
                </div>
              </div>
              <hr></hr>
              {checkoutInitiate ? (
                <>
                  <div className='cartViewList'>
                    <label>Select Payment </label>
                    <Select className='selectPayment' defaultValue="Select" onChange={onPaymentTypeChenage}>
                      <Option value='Card payment'>Card payment</Option>
                      <Option value='UPI'>UPI</Option>
                      <Option value='Net Banking'>Net Banking</Option>
                    </Select>
                  </div>
                  <hr></hr>
                  <div className='cartViewList'>
                    <label>Shipping Adresss</label>
                    <TextArea className='shippingAddres' defaultValue="Cecilia Chapman
711-2880 Nulla St.
Mankato Mississippi 96522
(257) 563-7401" autoSize={{ minRows: 3, maxRows: 5 }} readOnly={addressToggle} ></TextArea>
                    {addressToggle ? <Button className='updateAddress' onClick={() => setAddressToggle(false)} >Edit Address</Button> : <Button className='updateAddress' type="primary" onClick={() => setAddressToggle(true)}>Update</Button>}
                  </div>
                  <hr></hr>
                  <div className='cartViewList'>
                    <Button onClick={() => setCheckoutInitiate(false)}>Back </Button>
                    <Button type="primary" className='paymentInititate' onClick={inititatePayment} >Pay</Button>
                  </div>
                </>) :
                <div className='cartViewList'>
                  <label className='itemList'></label>
                  <Input className='appliedCoupon'></Input>
                  <Button className='couponApply'>Apply coupon</Button>
                  <Button className='continueShop' type="primary" onClick={() => setSidePanelToggle(false)}>Continue Shopping</Button>
                  <Button className='checkout' type="primary" onClick={initiateCheckout}>Checkout</Button>
                </div>
              }
            </>) : ""}
          </ul>
        </div>
      </section>


    </div>
  );
}

export default App;
