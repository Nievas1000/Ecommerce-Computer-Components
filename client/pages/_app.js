import '../styles/globals.css'
import '../styles/Cart.css'
import '../styles/News.css'
import '../styles/Modal.css'
import '../styles/ProdsByCat.css'
import '../styles/Product.css'
import '../styles/NavBar.css'
import '../styles/SignUp.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar'
import { SSRProvider } from 'react-bootstrap';
import {CartProvider} from "../context/CartContext"

function MyApp({ Component, pageProps }) {
  return ( 
    <div>
      <SSRProvider>
        <CartProvider>
          <NavBar />
          <Component {...pageProps} />
        </CartProvider>
      </SSRProvider>
    </div>
  )
}

export default MyApp
