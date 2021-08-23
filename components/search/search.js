import Navbar from '../Navbar/Navbar'
import Footer from '../Layout/footer/footer'
import MobileMenu from '../Mobile/menu'


const page = ( {posts} ) => {
    return (
        <div className="body">
            <Navbar />
            <div className="page-container">
              {posts && posts.map(res => {
         return <a key={res.id} href={`/product/${res.id}`}>
                    <div key={res.id} className="item-box" >
                       <img src={`/uploads/${res.image}`} />
                       <p>{res.name}</p>
                       <h3>{res.price} <b style={{fontSize:"10px",opacity:"0.7"}}> تومان</b></h3>                
                    </div>
                </a>
              }) }
             {posts.length === 0 && <div className="search-err">
                 <img className="err-image" src={"/uploads/err.png"} />
                 <p style={{fontSize:"18px" ,opacity:"0.5" ,marginRight:"3px"}}>جستجو نتیجه ای در بر نداشت !!!!</p>
                 </div>}
            </div>
            <MobileMenu />
            <Footer />
        </div>
    )
}

export default page