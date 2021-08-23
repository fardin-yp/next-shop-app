import { useEffect ,useState ,createContext  } from "react"


const CartContext = createContext()

const CartProvider = ({children}) => {

  const [ Cart , setCart ] = useState([])
  const [ TotalCart , setTotalCart ] = useState(0)

 ///// Add Items To our Shopping Cart //////
  async function AddToCart (item) {
    let newCart = [...Cart];
    let itemInCart = newCart.find(od => item.name === od.name);
    if(itemInCart){
      itemInCart.quantity++;
    } else{
      itemInCart= {
      ...item,
      quantity:1
      }
      newCart.push(itemInCart);
      setCart(newCart);
    }
    localStorage.setItem("cart" , JSON.stringify(newCart))
  };

 ///// Increment Items quantity //////
 const IncrementQuantity = (id) => {
  let newCart = [...Cart];
  let itemInCart = newCart.find(od => od.id === id);
  if(itemInCart){
    itemInCart.quantity++;
    setCart(newCart);
    localStorage.setItem("cart" , JSON.stringify(newCart))
  } 
 };

 ///// Decrement Items quantity //////
 const DecrementQuantity = (id) => {
  let newCart = [...Cart];
  let itemInCart = newCart.find(od => od.id === id);
  if(itemInCart){
    itemInCart.quantity--;
    setCart(newCart);
    localStorage.setItem("cart" , JSON.stringify(newCart))
  } 
 };

 ///// delete Items //////
   function DeleteFromCart(item) {
    let newCart = [...Cart];
    const filter = newCart.filter(res => res !== item)
    setCart(
      filter
      )
      localStorage.setItem("cart" , JSON.stringify(filter))
  };

 ///// get Items TotalPrice //////
  const TotalPrice = () => {
  const total = Cart.reduce((sum, {price ,quantity} ) => sum + price*quantity  ,0)
  setTotalCart(total)

}
  useEffect(() => {
  const getCart = localStorage.getItem("cart")

  if(getCart){
    setCart(JSON.parse(getCart))
  }
  },[]);

  useEffect(() => {
    TotalPrice()
  });


  return (
      <CartContext.Provider value={{AddToCart  ,IncrementQuantity ,DecrementQuantity ,DeleteFromCart , Cart ,TotalCart}}>
          {children}
      </CartContext.Provider>
    )
}
export default CartContext;
export {CartProvider};


