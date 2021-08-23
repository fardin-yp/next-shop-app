import { useContext, useEffect, useState } from "react"
import context from '../../../context/context'
import { useRouter } from 'next/router'

function Slide( {posts ,category} ){
  const {AddToCart} = useContext(context)
  const [size, setSize] = useState(0);
  const router = useRouter()

  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  },[])

let slice = 4
if(size < 550) {
  slice = 2
}
if( size <850  && size >550 ){
  slice = 3
}

    return (
      <div className="Slider-holder">
        {posts && posts.filter(op => op.category === category).slice(0,slice).map((post) => {
    return<div className="slider-card" key={post.id}>
              <img onClick={() => router.push(`/product/${post.id}`)} src={`/uploads/${post.image}`}/>
               <p>{post.name}</p>
              <h1>{post.price} <b style={{fontSize:"10px",opacity:"0.7"}}> تومان</b></h1>
              <button onClick={() => AddToCart(post)}>افزودن به سبد خرید</button>
           </div>
        })}
      </div>
    );
  }

export default Slide