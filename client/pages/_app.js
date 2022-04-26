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
import { ContextAuthProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  return ( 
    <div>
      <SSRProvider>
        <ContextAuthProvider>
          <CartProvider>
            <NavBar />
            <Component {...pageProps} />
          </CartProvider>
        </ContextAuthProvider>
      </SSRProvider>
    </div>
  )
}

export default MyApp
