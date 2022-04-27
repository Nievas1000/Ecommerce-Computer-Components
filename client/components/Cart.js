import BubbleAlert from './BubbleAlert'
import CartList from './CartList'
import {useGame} from "../context/CartContext"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useState } from "react"

const Cart = () =>{
    const {carro, cantidad, carroVisible, mostrarCarro, removeFromCart} = useGame()
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => carro.length > 0 ? setShow(true): setShow(false);

    return(
        <div className='container_carro'>
            <span className='bubble'>
                <BubbleAlert value={cantidad}/>
            </span>
            <button data-testid="cart" onClick={handleShow} className='carro'>
                    <AiOutlineShoppingCart style={{fontSize:25}}/>
            </button>
                <CartList handleClose={handleClose} show={show} />
        </div>
    )
}
export default Cart;