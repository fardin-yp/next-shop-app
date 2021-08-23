import { useEffect, useState ,useContext } from "react";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Layout/footer/footer'
import context from '../context/context'
import MobileMenu from '../components/Mobile/menu'

function Cart () {

const { Cart , IncrementQuantity ,DecrementQuantity ,TotalCart ,DeleteFromCart } = useContext(context)
    
    return (
    <div className="body" >
        <Navbar />
        <div className="body-cart">
          <div className="cart" style={Cart.length === 0 ? {height:"250px"} : null}>
            <h1>سبد خرید شما</h1>
            {Cart.length > 0 && Cart.map(res => {
            return <div key={res.id} className="cart-items">
                    <img src={`/uploads/${res.image}`} />
                        <div className="middle-cart">                      
                            <p>{res.name}</p>                                               
                            <div className="edit-item">
                              <label><button onClick={() => IncrementQuantity(res.id)}>+</button><p>{res.quantity}</p><button onClick={() => DecrementQuantity(res.id)}>-</button></label>
                              <button onClick={() => DeleteFromCart(res)} ><img src="/uploads/trash.png" />حذف</button>                          
                            </div>
                        </div>
                    <h1 style={{backgroundColor:"white" , color:"black"}}>{res.quantity > 0 ? res.price * res.quantity: DeleteFromCart(res)} تومان</h1>       
                </div> 
            }) ||  <><img className="err-image" src={"/uploads/err.png"} /><p style={{fontSize:"18px" ,opacity:"0.5" ,marginRight:"3px"}}>سبد شما خالی است!!!!</p></> }
           </div>
        <div className="total-price">
        {Cart.length > 0 && <><p>جمع سبد خرید :{TotalCart} تومان</p>
        <button onClick={() => alert("خرید شما با موفقیت انجام شد")}>ادامه فرایند خرید</button></> || <p>سبد شما خالی است</p>}
        </div>
      </div>
      <MobileMenu />
      <Footer />
    </div>
    )
}
export default Cart