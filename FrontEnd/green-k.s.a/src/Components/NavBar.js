import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Logo from "./images/Logo.png"
import {FaUserCircle} from 'react-icons/fa'


export default function NavBar() {
  return (
    <div>

      <Navbar className='px-3 navbar ' bg="light" expand="lg">
      <Container>
        <img src={Logo} style={{ height: "50px", width: "50px", borderRadius: "50%" }}/>
        <Navbar.Brand href="#home"  dir='rtl'>السعودية الخضراء</Navbar.Brand>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to={"/"}/>الرئيسية</Nav.Link>
            <Nav.Link ><Link to={"login/"}/>التعليمات</Nav.Link>
            <Nav.Link  className='login' ><Link to={"login/"}/>الدخول</Nav.Link>
            <NavDropdown title={<FaUserCircle/>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">نبذه عنا</NavDropdown.Item>
            
              <NavDropdown.Item href="#action/3.3">الأهداف</NavDropdown.Item>
             
              <NavDropdown.Item href="#action/3.4">
                الانجازات
              </NavDropdown.Item>
              <i class="bi bi-person-circle"></i>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Link to={"/login"}> <FaUserCircle/></Link >
    </Navbar>
    </div>
  )
}
