import { Carousel, Container } from "react-bootstrap"
import Image from "next/image"

const Carousel2 = () =>{
      
    return(
        <div>
                <Carousel style={{marginTop:10}}>
                    <Carousel.Item interval={2000}>
                        <Image
                        className="d-block w-100"
                        src="/img/publi1.jpg"
                        alt="First slide"
                        height="600"
                        width="2000"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <Image
                        className="d-block w-100"
                        src="/img/publi2.jpg"
                        alt="Second slide"
                        height="600"
                        width="2000"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <Image
                        className="d-block w-100"
                        src="/img/publi3.jpg"
                        alt="Third slide"
                        height="600"
                        width="2000"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </div>  
    )
}

export default Carousel2