import { Card, Button } from "react-bootstrap"
import {useGame} from "../context/CartContext"
import Link from "next/link"

const CardProducts = ({product}) => {
  const {agregarAlCarro} = useGame()
    return (
      <div className="card-new">
        {<Card style={{ width: '18rem', border: 'none' }}>
            <Link href={`/product/${product.id}`}><Card.Img variant="top" className="img-news" src={product.image} height="154" width="194"/></Link>
            <Card.Body>
              <h6>{product.name}</h6>
              <Card.Text>
              Price: ${product.price}
              </Card.Text>
              <Button style={{width:'100%'}} variant="primary" onClick={() => agregarAlCarro(product)}>Add to cart</Button>
            </Card.Body>
          </Card>}
      </div>
    )
}
  
  export default CardProducts
  