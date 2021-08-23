import { useContext } from "react";
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Layout/footer/footer'
import context from '../../context/context'
import MobileMenu from '../Mobile/menu'

function FullPost ({posts}) {

const { AddToCart } = useContext(context)

    return (
  <div className="body" >
    <Navbar />
    <div className="full-container">
      {posts && posts.map(res => {
      return <> 
          <div className="full-post">
              <img src={`/uploads/${res.image}`} alt={res.name} />
              <div className="detail">
                   <h3>{res.name}</h3>
                   <ul>
                    ویژگی های کالا:
                   <li>شرکت سازنده: {res.company}</li>
                   </ul>
              </div>
              <div className="price-detail">
          <h3>قیمت: {res.price} <b style={{fontSize:"10px",opacity:"0.7"}}> تومان</b></h3>
             <button onClick={() => AddToCart(res)}>افزودن به سبد خرید</button>
          </div>
          </div>
            </>
        })}
        </div>
        <MobileMenu />
    <Footer />
  </div>
    )
}
export default FullPost