import {useState} from 'react'
const Menu = () => {
    const [search , setSearch] =useState(true)

    return (
        <div className="mobile-menu">
            <a href="/"><img src="/uploads/home.png" alt="Home-icon" /></a>
            <a onClick={() => setSearch(true) }><img src="/uploads/search.png" alt="search icon" /></a>
            <a href="/shop"><img src ="/uploads/shop.png" /></a>
            <a href="/cart"><img src="/uploads/shopping-cart.png" alt="shopping cart" /></a>
        </div>
    )
}

export default Menu
