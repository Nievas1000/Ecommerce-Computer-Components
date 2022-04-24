import { useEffect, useState } from "react"
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"
import Cart from "./Cart"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"

const NavBar = () =>{
    const [categories, setCategories] = useState([])
    const [search, setSearch] = useState({search:''})
    const router = useRouter()

    const changeSearch = (e) => {
        setSearch({
          ...search,
          [e.target.name]: e.target.value,
        });
      };

      const getSearch = async () =>{
          try {
            const response = await axios.get(`http://localhost:3001/searchprod/${search.search}`)
            const products = response.data
            router.push(`/bycategory/${products[0].category}`)
          } catch (error) {
              console.log(error)
          }
      }

    useEffect( ()=>{
        const getCategories = async () =>{
            try {
                const response = await axios.get('http://localhost:3001/categories')
                const categories = response.data
                setCategories(categories)
            } catch (error) {
                console.log(error)
            }
        }
        getCategories()
    },[])
    return(
        <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link href="/" >
            <Navbar.Brand>
                <img
                alt=""
                src="/img/logoKC.ico"
                width="35"
                height="35"
                className="d-inline-block align-top"
                />
            &nbsp; KingComponents
            </Navbar.Brand>
            </Link>
            <div className="nav-form">
                <Form className="d-flex" onSubmit={getSearch} >
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{backgroundColor:'transparent', width:'100%',color:'beige'}}
                    name="search"
                    onChange={changeSearch}
                    />
                    <Button onClick={getSearch} variant="outline-primary">Search</Button>
                </Form>
            </div>
            </Container>
        </Navbar>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{marginRight:47}} />
            <Navbar.Brand><Cart/></Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Link href="/" passHref><Nav.Link >Home</Nav.Link></Link>
                <Nav.Link href="/">About</Nav.Link>
                <NavDropdown title="Catalogue" id="collasible-nav-dropdown">
                {categories.map(x =>
                        <Link href={`/bycategory/${x.name}`} key={x.name} passHref><NavDropdown.Item href={`/bycategory/${x.name}`}>{x.name}</NavDropdown.Item></Link>
                    )}
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="/signup">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}
export default NavBar