import axios from "axios"
import { useState } from "react"
import { Button } from "react-bootstrap"
import {useGame} from "../../context/CartContext"
import Recommended from "../../components/Recommended"

const Product = ({product,similar}) =>{
    const {agregarAlCarro, amountProd, setAmountProd} = useGame()

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
                    <div className="zone-addcart">
                        <div className="amount-prod">
                            <p onClick={() => amountProd > 1 ? setAmountProd(amountProd - 1) : null}>-</p>
                            <p>{amountProd}</p>
                            <p onClick={() => amountProd < product.stock ? setAmountProd(amountProd + 1) : null}>+</p>
                        </div>
                    <Button  variant="primary" onClick={() => agregarAlCarro(product,amountProd)}>Add to cart</Button>
                    </div>
                </div>
            </div>
                <h3 style={{backgroundColor:'rgb(235, 233, 233)', width:'150px', marginTop:'50px', borderRadius:'5px', height:'50px'}}>Description</h3>
                <div className="description-prod">
                    <p>{product.description}</p>
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