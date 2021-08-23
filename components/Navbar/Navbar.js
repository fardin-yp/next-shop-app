import { useContext ,useState } from "react";
import context from '../../context/context'
import { useRouter } from 'next/router'

export default function Navbar() {

const {Cart} = useContext(context)
const [search ,setSearch] = useState('')
const router = useRouter()

const searchRouter = (e) => {
    e.preventDefault()
   if(search){
    router.push(`/search/${search}`)
   }
}
    return (
    <>
        <nav className="navbar" >
            <div className="nav-top">
               <div className="nav-left">
               <div className="log">
               <div className="cart-image">
                  <a href="/cart" alt="cart"><img src="/uploads/cart.png" alt="shopping cart" /><p>{Cart && Cart.length || 0}</p></a>
                </div>
               </div>
                <form onSubmit={searchRouter}><input onChange={(e) => setSearch(e.target.value)}  placeholder="جستجو..." /></form>
               </div>            
               <div className="nav-right">
                   <h1><a href="/">IRANkala</a></h1>   
               </div>
            </div>  
            <hr style={{width:"100%" , backgroundColor:"silver", position:"absolute",top:"86px" , opacity:"0.6"}} />
            <div className="bottom">
                <h1>دسته بندی کالاها</h1>
                <form onSubmit={searchRouter}><input onChange={(e) => setSearch(e.target.value)}  placeholder="جستجو..." /></form>
                <ul>
                    <li><a href="/console" alt={"کنسول بازی"}>کنسول بازی</a></li>
                    <li><a href="/pc" alt={"کامپیوتر اسمبل شده"}>کامپیوتر اسمبل شده</a></li>
                    <li><a href="/laptop" alt={"لپتاپ"}> لپ تاپ</a></li>
                    <li><a href="game" alt={"بازی"} > بازی</a></li>
                    <li><a href="/accessories" alt={"لوازم جانبی"}> لوازم جانبی</a></li>      
                </ul>
            </div>
        </nav>
    </>
    )
}

