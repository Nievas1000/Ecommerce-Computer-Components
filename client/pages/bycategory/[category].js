import axios from "axios"
import CardProducts from "../../components/CardProducts"
import { ListGroup } from "react-bootstrap"
import Link from "next/link"
import { useState } from "react"
import { FloatingLabel, Form } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useRouter } from "next/router";

const ProdsByCat = ({products, categories}) =>{
    const [prices, setPrices] = useState({price1:'',price2:''})
    const [productsByPrice, setProductsByPrice] = useState([])
    const [amountProds, setAmountProds] = useState(products.length)
    const category = products[0].category
    const router = useRouter()

    const getPrices = async() =>{
        try {
            const result = await axios.get(`http://localhost:3001/searchbyprice/${prices.price1}/${prices.price2}/${category}`)
            const products = result.data
            setProductsByPrice(products)
            setAmountProds(products.length)
        } catch (error) {
            console.log(error)
        }
    }

    const changeUser = (e) => {
        setPrices({
          ...prices,
          [e.target.name]: e.target.value,
        });
    };
    return(
        <div className="prods-bycat">
            <div className="searched">
                <ListGroup style={{textDecorationLine:'none'}}>
                    <ListGroup.Item><h5>Product categories</h5></ListGroup.Item>
                    {categories.map(x => <ListGroup.Item key={x.name}><a href={`/bycategory/${x.name}`}>{x.name}</a></ListGroup.Item>)}
                </ListGroup>
                <div className="filter-price">
                    <FloatingLabel
                    controlId="floatingInput"
                    label="Minimal price"
                    className="mb-3"
                    >
                        <Form.Control type='number'  style={{border:'none'}} onChange={changeUser} name="price1"/>
                    </FloatingLabel>
                    <FloatingLabel 
                    controlId="floatingInput"
                    label="Maximum price"
                    className="mb-3">
                        <Form.Control type="number" style={{border:'none'}} onChange={changeUser} name="price2"/>
                        <Button variant="outline-primary" style={{marginLeft:'2%', width:'30%'}} onClick={getPrices}>Filter</Button>
                    </FloatingLabel>
                </div>
            </div>
            <div className="prodsbycat-container">
                <div className="titles-bycategory">
                    <h1>{products[0].category}</h1>
                </div>
                <div className="prodsbycat-group">
                <h6 style={{marginTop:50, marginLeft:'20px'}}>Number of search results: {amountProds}</h6>
                    <div className="tajet">
                        {productsByPrice.length > 0 ? productsByPrice.map(x => <CardProducts key={x.id} product={x} />) : products.map(x => <CardProducts key={x.id} product={x} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProdsByCat

export const getStaticProps = async ({params}) =>{
    const result = await axios.get(`http://localhost:3001/categories`)
    const categories = result.data

    const response = await axios.get(`http://localhost:3001/prodbycat/${params.category}`)
    const products = response.data


    return {props: {products, categories}}
}

export const getStaticPaths = async () =>{
    const paths = []
    return{
        paths,
        fallback:'blocking'
    }
}