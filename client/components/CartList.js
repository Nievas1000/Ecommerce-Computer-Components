import Image from "next/image";
import {useGame} from "../context/CartContext"
import { Modal, Button } from "react-bootstrap"

const CartList = ({...props}) =>{
    const {carro, cantidad, removeFromCart, totalPrice} = useGame()
    const handleClose = props.handleClose
    const show = props.show
    
        return(
            <div>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className="detalles" >
        <ul>
            {carro.length > 0 ? carro.map(x =>
                <li key={x.id} className="producto">
                    <img alt={x.title} src={x.image} className="img-lista" width={150} height={100}/>
                    {x.name}
                    <button className="button-delete" onClick={() => removeFromCart(x)}>Delete</button>
                </li>): null}
        </ul>
        </Modal.Body>
        <Modal.Footer style={{justifyContent:"left"}}>
            {cantidad === 0 ? <p className="cantidad-prod">There are no products assigned</p> :  <p className="cantidad-prod">Total price for {cantidad} products: ${totalPrice}</p> }
        </Modal.Footer>
      </Modal>
            </div>
        )
}

export default CartList;