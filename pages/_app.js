import { CartProvider } from '../context/context'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import '../styles/globals.css'
import '../styles/layout.css'
import '../styles/navbar.css'
import '../styles/items.css'
import '../styles/page.css'
import '../styles/footer.css';
import '../styles/fullPost.css';
import '../styles/responsive.css'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
        <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
