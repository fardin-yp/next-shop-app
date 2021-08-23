import Navbar from '../Navbar/Navbar'
import Footer from '../Layout/footer/footer'
import MobileMenu from '../Mobile/menu'

const page = ( {posts ,category} ) => {
    const filter =  posts.filter(op => op.category === category)
    return (
        <div className="body">
            <Navbar />
            <div className="page-container">
              {posts && category && filter.map(res => {
         return <a key={res.id} href={`/product/${res.id}`}>
                    <div key={res.id} className="item-box" >
                       <img src={`/uploads/${res.image}`} />
                       <p>{res.name}</p>
                       <h3>{res.price} <b style={{fontSize:"10px",opacity:"0.7"}}> تومان</b></h3>                
                    </div>
                </a>
              }) || posts.map(res => {
                return <a key={res.id} href={`/product/${res.id}`}>
                           <div key={res.id} className="item-box" >
                            <img src={`/uploads/${res.image}`} />
                            <p>{res.name}</p>
                            <h3>{res.price} <b style={{fontSize:"10px",opacity:"0.7"}}> تومان</b></h3>                
                        </div>
                    </a>}) 
                }  
             </div>
             <MobileMenu />
        <Footer />
     </div>
    )
}

export default page
