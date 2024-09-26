import React from 'react'
import './CartItem.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItem = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart,addToCart} = useContext(ShopContext);
    const addQuantity=(itemId)=>addToCart(itemId)
    const removeItem = (itemId) => removeFromCart(itemId);
   
  return (
    <div className='cartitem'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Totle</p>
            
            <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return (
                        <div key={e.id}>

                    <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon' />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <div>
                        <button onClick={()=>removeItem(e.id)}>-</button>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <button onClick={()=>addQuantity(e.id)}>+</button>
                        </div>
                       
                        <p>${e.new_price*cartItems[e.id]}</p>
                        <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=""/>
    
                    </div>

                    <hr />
    
                </div>
                    )
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-totle">
                    <h1>cart Totals</h1>
                    <div>
                      <div className="cartitems-totle-item">
                           <p>Subtatal</p>
                           <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-totle-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>

                </div>
                <hr />
                <div className="cartitems-totle-item">
                    <h3>Totle</h3>
                    <h3>${getTotalCartAmount()}</h3>

                </div>
             </div>
             <button>PROCEED TO CHECKOUT</button>
             </div>
             <div className="cartitems-promocode">
                <p>If have a promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='promocode'/>
                    <button>Submit</button>

                </div>

             </div>
         </div>
    </div>
  );
};
export default CartItem;