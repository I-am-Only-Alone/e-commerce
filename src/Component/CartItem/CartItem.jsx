import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'


const CartItem = () => {
    const {getTotalCartAmount , all_product, cartItems, removeFromCart } = useContext(ShopContext)
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e,i) => {
                if (cartItems[e.id] > 0) {
                   
                    return <div key={i}>
                        <div className=" cartitems-format-main cartitems-format">
                            <img className='carticon-product-icon' src={e.image} alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className='carticons-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>cart Totals </h1>
                    <div >
                        <div className="cartitems-total-item">
                            <p>subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>

                    </div>
                    <button>PROCED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promom code ,Enter it here</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default CartItem