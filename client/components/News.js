import CardProducts from "./CardProducts"

const News = ({products}) =>{
    return(
        <div>
            <h1>News</h1>
            <div className="news-container" style={{marginTop:30}}>
                <CardProducts className="card-new" product={products[0]} />
                <CardProducts className="card-new" product={products[1]} />
                <CardProducts className="card-new" product={products[2]} />
                <CardProducts className="card-new" product={products[3]} />
            </div>
        </div>
    )
}

export default News