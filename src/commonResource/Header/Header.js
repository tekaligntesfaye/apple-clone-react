


import React,{useState} from 'react'

import logo from '../images/icons/logo-sm.png';
import search from '../images/icons/search-icon-sm.png'
import cart from '../images/icons/cart-sm.png'
// import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar,Container } from 'react-bootstrap'

const Header=()=> {
  const [expanded, setExpanded] = useState(false)
  const setToggle=()=>{console.log(!expanded)
    setExpanded(current => !current)}
  return (
    <div>
      <Navbar  bg='dark' variant='dark' 
      sticky='top' expand='md' onToggle={setToggle}>
      <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      {/* <span className='line line1'></span>
      <span className='line line2'></span> */}
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
       <div style={{display:!expanded ? 'block' : 'none'}}>
       <img src={cart} alt="" className="cart"/>
       </div>
      </Container>
      </Navbar>
    </div>
    
  )


}


export default Header








// import NavbarList from "./NavbarList";
// import logo from "../images/icons/logo-sm.png";
// import search from "../images/icons/search-icon-sm.png";
// import cart from "../images/icons/cart-sm.png";
// import { useEffect } from "react";
// import $ from "jquery";
// import { Navbar } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/styles.css'
// import '../css/my.css'

// function Header() {
// 	useEffect(() => {
// 		$(".search-link").click(function (event) {
// 			event.preventDefault();
// 			$(".navbar-collapse.collapse").removeClass("show");
// 			$(".searchbox").slideToggle();
// 		});
// 	}, []);

// 	return (
// 		<div>
// 			<div className="nav-tool fixed-top">
// 				<div className="container">
// 					<nav className="navbar navbar-toggleable-sm navbar-expand-md">
// 						<Navbar
// 							className="w-100"
// 							collapseOnSelect
// 							expand="lg"
// 							variant="dark">
// 							<Navbar.Toggle aria-controls="responsive-navbar-nav" />

// 							<a className="navbar-brand mx-auto apple-logo" href="/">
// 								<img src={logo} alt="Apple logo" />
// 							</a>

// 							<Navbar.Collapse id="responsive-navbar-nav">
// 								<ul className="navbar-nav nav-justified w-100 nav-fill">
// 									<NavbarList LinkUrl="/mac/" LinkName="Mac" />
// 									<NavbarList LinkUrl="/iphone/" LinkName="iphone" />
// 									<NavbarList LinkUrl="/ipad/" LinkName="ipad" />
// 									<NavbarList LinkUrl="/watch/" LinkName="watch" />
// 									<NavbarList LinkUrl="/tv/" LinkName="tv" />
// 									<NavbarList LinkUrl="/Music/" LinkName="Music" />
// 									<NavbarList LinkUrl="/Support/" LinkName="Support" />
// 									<li className="nav-item">
// 										<a
// 											className="search-link nav-link js-scroll-trigger"
// 											href="/search/">
// 											<img src={search} alt="Search logo" />
// 										</a>
// 									</li>
// 									<li className="nav-item">
// 										<a
// 											className="nav-link js-scroll-trigger logo-link"
// 											href="/cart/">
// 											<img src={cart} alt="Cart logo" />
// 										</a>
// 									</li>
// 								</ul>
// 							</Navbar.Collapse>
// 						</Navbar>
// 					</nav>
// 				</div>
// 			</div>

// 			<section className="searchbox">
// 				<form>
// 					<input type="text" name="searchbox" />
// 					<button id="submitButton" className="btn btn-primary" type="submit">
// 						Search
// 					</button>
// 				</form>
// 			</section>
// 		</div>
// 	);
// }

// export default Header;
