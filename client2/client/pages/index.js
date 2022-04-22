import  Carousel2  from "../components/Carousel"
import News from "../components/News"
import axios from "axios"
import { Container } from "react-bootstrap"

const Home = ({products}) => {
  return (
    <div>
        <Carousel2 />
        <Container>
          <News products={products} />
        </Container>
    </div>
  )
}

export const getStaticProps = async () =>{
  const response = await axios.get('http://localhost:3001/newproducts')
  const products = response.data


  return{
      props: {products}
  }
}

export default Home


