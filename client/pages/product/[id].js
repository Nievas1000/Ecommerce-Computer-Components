import axios from "axios"
import { Button } from "react-bootstrap"
import {useGame} from "../../context/CartContext"

const Product = ({product}) =>{
    const {agregarAlCarro} = useGame()
    return(
        <div className="product">
            <div className="container-prod">
                <div className="image-prod">
                    <img src={product.image} />
                </div>
                <div className="data-prod">
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <p>{product.name}</p>
                    <p>Stock: {product.stock}</p>
                    <Button  variant="primary" onClick={() => agregarAlCarro(product)}>Add to cart</Button>
                </div>
            </div>
                <h3 style={{backgroundColor:'rgb(190, 189, 189)', width:'150px', marginTop:'50px', borderRadius:'5px', height:'30px'}}>Description</h3>
                <div className="description-prod">
                    <p>{product.description}</p>
                </div>
        </div>
    )
}

export default Product

export const getStaticProps = async ({params}) =>{

    const response = await axios.get(`http://localhost:3001/product/${params.id}`)
    const product = response.data[0]


    return {props: {product}}
}

export const getStaticPaths = async () =>{
    const paths = []
    return{
        paths,
        fallback:'blocking'
    }
}