
import logo from '../images/icons/logo-sm.png';
import search from '../images/icons/search-icon-sm.png'
import cart from '../images/icons/cart-sm.png'
// import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar,Container } from 'react-bootstrap'
const Header=()=> {
  return (
    <div>
      <Navbar  bg='dark' variant='dark' 
      sticky='top' expand='md' >
      <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Brand>
        <img src={logo} className="logo"></img>
       </Navbar.Brand>
       <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="justify-content-between"  style={{ width: "100%" }}>
       <Nav.Link  href='#Store'> Store </Nav.Link >
      <Nav.Link  href='#Mac'> Mac </Nav.Link >
      <Nav.Link href='#iphone'> iphone  </Nav.Link>
      <Nav.Link  href='#ipad'> ipad </Nav.Link>
      <Nav.Link href='#watch'> watch </Nav.Link>
      <Nav.Link  href='#AirPods'> AirPods </Nav.Link >
      <Nav.Link  href='#tv'> Tv & Home </Nav.Link>
      <Nav.Link  href='#Music'> Music </Nav.Link>
      <Nav.Link  href='#Support'> Support </Nav.Link>
       <Nav.Link><img src={search}  alt="" width="20px" height="20px"/></Nav.Link>
      </Nav>
       </Navbar.Collapse>
       <div>
       <img src={cart} alt="" className="cart"/>
       </div>
      </Container>
      </Navbar>
    </div>
    
  )
}
export default Header
