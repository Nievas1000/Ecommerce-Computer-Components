import axios from "axios"
import { Button } from "react-bootstrap"
import {useGame} from "../../context/CartContext"
import Recommended from "../../components/Recommended"
import AuthContext from "../../context/AuthContext"
import { useContext } from "react"

const Product = ({product,similar}) =>{
    const {agregarAlCarro, amountProd, setAmountProd, savedProd} = useGame()
    const {isLogged, user} = useContext(AuthContext)

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
                    {isLogged ? 
                    <div className="zone-addcart">
                        <div className="amount-prod">
                            <p onClick={() => amountProd > 1 ? setAmountProd(amountProd - 1) : null}>-</p>
                            <p>{amountProd}</p>
                            <p onClick={() => amountProd < product.stock ? setAmountProd(amountProd + 1) : null}>+</p>
                        </div>
                        <Button  variant="primary" onClick={() => agregarAlCarro(product,amountProd)}>Add to cart</Button>
                        <Button  variant="secondary" onClick={() => savedProd(product, user)} >Secondary</Button>
                    </div>: null}
                </div>
            </div>
                <h3 style={{backgroundColor:'rgb(235, 233, 233)', width:'150px', marginTop:'50px', borderRadius:'5px', height:'50px'}}>Description</h3>
                <div className="description-prod">
                    <p>Morbi tincidunt ligula a erat placerat vehicula. Aenean id diam efficitur, rhoncus purus finibus, efficitur diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus mattis est ut risus tincidunt ornare. Pellentesque quis cursus ipsum. Donec ut pretium enim. Nam porttitor justo vestibulum lobortis ornare. Quisque elit odio, tristique at diam viverra, semper consequat eros. Nunc tincidunt consequat ante, ut mattis orci egestas ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet luctus interdum. Quisque nec interdum mauris. Phasellus scelerisque nisl ut lorem sollicitudin maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ullamcorper diam ac mi rutrum tempus.</p>
                </div>
            <div className="similar-products">
                <h2>Similar Products</h2>
                <Recommended products={similar} />
            </div>
        </div>
    )
}

export default Product

export const getStaticProps = async ({params}) =>{

    const response = await axios.get(`http://localhost:3001/product/${params.id}`)
    const product = response.data[0]

    const result = await axios.get(`http://localhost:3001/prodbycat/${product.category}`)
    const similar = result.data

    return {props: {product,similar}}
}

export const getStaticPaths = async () =>{
    const paths = []
    return{
        paths,
        fallback:'blocking'
    }
}