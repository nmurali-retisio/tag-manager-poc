import React from 'react'

function product() {
    return (
        <div>
            <div className="card">
                {/*  <img className='CardImage' src="lg-tv-lifestyle.jpg" alt="BigCo Inc. logo" /> */}

                <div className='cardDesc'>
                    <div className='cardItemToggle'>
                        <div > <p className='productName'>Samsung - 75" Class QLED UHD Q60A 4K Smart TV 2021</p></div>
                        <div>
                            {wishListToggle === false ? <a onClick={addToWishlist}>Add to wishlist</a> : <a onClick={removeFromWishlist}>Remove from wishlist</a>}</div>
                    </div>
                    <p className='productId'>Model:OLED77C1PUB</p>
                    <h2 className='productPrice'>ON SALE  $1,097.99</h2>
                    <p className='productDes'>Product Features
                        Smart TV By webOS
                        Cinema HDR (Dolby Vision, HDR10, HLG)
                        4 HDMI Connections | 3 USB Ports | 1 Ethernet Port
                        Built-In Google Assistant | Amazon Alexa | Works With Apple Airplay 2 </p>
                </div>
                <div className='cardItemToggle'>
                    <Button onClick={e => {
                        window.rtag('event', {
                            'method': 'productClickEvent',
                            'value': '114'
                        })
                    }}>View Product</Button>
                    {/*   {showItemToggle === false ? <Button type='primary' value='Samsung - 75" Class QLED UHD' onClick={onItemAddToCard}>
                Add to Card
              </Button> : <div className='itemToggle'>
                <Button className='removeItem' value='Samsung - 75" Class QLED UHD' onClick={onItemQuantityReduce}>-</Button>
                <Input className='dispalyQuantity' value={itemQuantity} ></Input>
                <Button className='addItem' value='Samsung - 75" Class QLED UHD' onClick={onItemQuantityIncrease}>+</Button>
              </div>} */}
                    <Button type='primary' value='Samsung - 75" Class QLED UHD' onClick={onItemAddToCard}>
                        Add to Card
                    </Button>
                    <div className='itemToggle'>
                        <Button className='removeItem' value='Samsung - 75" Class QLED UHD' onClick={onItemQuantityReduce}>-</Button>
                        <Input className='dispalyQuantity' value={itemQuantity} ></Input>
                        <Button className='addItem' value='Samsung - 75" Class QLED UHD' onClick={onItemQuantityIncrease}>+</Button>
                    </div>
                </div>
            </div>
            {/*   <div className="card">
            <img className='CardImage' src="lg-tv-lifestyle.jpg" alt="BigCo Inc. logo" />
            <div className='cardDesc'>
              <p className='productName'>LG - 77" Class OLED 4K UHD C1 Series Smart TV 2021</p>
              <p className='productId'>Model:QN75Q60AAFXZA</p>
              <h2 className='productPrice'>ON SALE $2,197.99</h2>
              <p className='productDes'>Product Features
                Smart TV By TIZEN™
                Quantum HDR
                3 HDMI | 2 USB | 1 Ethernet Port
                Built-In Bixby | Works with Google Assistant | Amazon Alexa
                Motion Xcelerator
                3,840 x 2,160 Lines Of Resolution</p>
            </div>
            <div className='cardItemToggle'>
              <Button onClick={e => {
                window.rtag('event', {
                  'method': 'productClickEvent',
                  'value': '114'
                })
              }}>View Product</Button>
              {showItemToggle === false ? <Button type='primary' value='LG - 77" Class OLED ' onClick={onItemAddToCard}>
                Add to Card
              </Button> : <div className='itemToggle'>
                <Button className='removeItem' onClick={onItemQuantityReduce}>-</Button>
                <Input className='dispalyQuantity' value={itemCount} ></Input>
                <Button className='addItem' onClick={onItemQuantityIncrease}>+</Button>
              </div>}
            </div>
          </div> */}
            t</div>
    )
}

export default product