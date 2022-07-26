import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Logo from "./images/Logo.png"
import {FaUserCircle} from 'react-icons/fa'
import "../App2.css";


export default function NavBar() {
  return (
    <div>

      <Navbar className='navbar ' bg="light" expand="lg">
      <Container>
        <img src={Logo} style={{ height: "50px", width: "50px", borderRadius: "50%" }}/>
        <Navbar.Brand href="#home"  dir='rtl'>المملكة الخضراء</Navbar.Brand>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to={"/"}/>الرئيسية</Nav.Link>
            <Nav.Link ><Link to={"login/"}/>التعليمات</Nav.Link>
          
            <NavDropdown title={"الصفحات"} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">نبذه عنا</NavDropdown.Item>
            
              <NavDropdown.Item href="#action/3.3">الأهداف</NavDropdown.Item>
             
              <NavDropdown.Item href="#action/3.4">
                الانجازات
              </NavDropdown.Item>
              <i class="bi bi-person-circle"></i>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
        <NavDropdown className='login-icon ' title={<FaUserCircle/>} id="basic-nav-dropdown">
              <NavDropdown.Item className='register'  ><Link to={"login/"}/>التسجيل</NavDropdown.Item>
            
              <NavDropdown.Item ><Link to={"login/"}/>تسجيل الدخول</NavDropdown.Item>
              </NavDropdown>
        
      </Container>
      {/* <Link to={"/login"}> <FaUserCircle/></Link > */}
      
    </Navbar>
    </div>
  )
}
