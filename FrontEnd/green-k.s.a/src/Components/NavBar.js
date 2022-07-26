import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Logo from "./images/Logo.png";
import { FaUserCircle } from "react-icons/fa";

export default function NavBar() {
  return (
    //   <div>
    //     <Navbar className="px-3  Navbarr sticky-top" bg="light" expand="lg">
    //       <Container>
    //         <img
    //           src={Logo}
    //           style={{ height: "50px", width: "50px", borderRadius: "50%" }}
    //         />
    //         <Navbar.Brand href="#home" dir="rtl">
    //           المملكة الخضراء
    //         </Navbar.Brand>


      // <Navbar className='navbar ' bg="light" expand="lg">
      // <Container>
      //   <img src={Logo} style={{ height: "50px", width: "50px", borderRadius: "50%" }}/>
      //   <Navbar.Brand href="#home"  dir='rtl'>المملكة الخضراء</Navbar.Brand>
      
      //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //   <Navbar.Collapse id="basic-navbar-nav">
      //     <Nav className="me-auto">
      //       <Nav.Link href="#home"><Link to={"/"}/>الرئيسية</Nav.Link>
      //       <Nav.Link ><Link to={"login/"}/>التعليمات</Nav.Link>
          
      //       <NavDropdown title={"الصفحات"} id="basic-nav-dropdown">
      //         <NavDropdown.Item href="#action/3.1">نبذه عنا</NavDropdown.Item>
            
      //         <NavDropdown.Item href="#action/3.3">الأهداف</NavDropdown.Item>
             
      //         <NavDropdown.Item href="#action/3.4">
      //           الانجازات
      //         </NavDropdown.Item>
      //         <i class="bi bi-person-circle"></i>
      //       </NavDropdown>
            
      //     </Nav>
      //   </Navbar.Collapse>
      //   <NavDropdown className='login-icon ' title={<FaUserCircle/>} id="basic-nav-dropdown">
      //         <NavDropdown.Item className='register'  ><Link to={"login/"}/>التسجيل</NavDropdown.Item>
            
      //         <NavDropdown.Item ><Link to={"login/"}/>تسجيل الدخول</NavDropdown.Item>

    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav">
    //           <Nav className="me-auto">
    //             <Nav.Link href="#home">
    //               <Link to={"/"} />
    //               الرئيسية
    //             </Nav.Link>
    //             <Nav.Link>
    //               <Link to={"login/"} />
    //               التعليمات
    //             </Nav.Link>

    //             <NavDropdown title={"الصفحات"} id="basic-nav-dropdown">
    //               <NavDropdown.Item href="#action/3.1">نبذه عنا</NavDropdown.Item>

    //               <NavDropdown.Item href="#action/3.3">الأهداف</NavDropdown.Item>

    //               <NavDropdown.Item href="#action/3.4">
    //                 الانجازات
    //               </NavDropdown.Item>
    //               <i class="bi bi-person-circle"></i>
    //             </NavDropdown>
    //           </Nav>
    //         </Navbar.Collapse>
    //         <NavDropdown
    //           className="login-icon "
    //           title={<FaUserCircle />}
    //           id="basic-nav-dropdown"
    //         >
    //           <NavDropdown.Item>
    //             <Link to={"login/"} />
    //             التسجيل
    //           </NavDropdown.Item>

    //           <NavDropdown.Item>
    //             <Link to={"login/"} />
    //             تسجيل الدخول
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Container>
    //       {/* <Link to={"/login"}> <FaUserCircle/></Link > */}
    //     </Navbar>
    //   </div>
    <div>
      <div>
        <Navbar className="px-3  Navbar sticky-top" variant="light">
          <img
            src={Logo}
            style={{ height: "85px", width: "85px", borderRadius: "50%" }}
          />
          <Navbar.Brand href="#home">المملكة الخضراء</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto LinkNavbar">
              <Nav.Link href="/">الرئسية</Nav.Link>
              <Nav.Link href="/register">التعليمات</Nav.Link>
              <NavDropdown title={"الصفحات"} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">نبذه عنا</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">الأهداف</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  الانجازات
                </NavDropdown.Item>
                <i class="bi bi-person-circle"></i>
              </NavDropdown>

              <NavDropdown
                className="login-icon "
                title={<FaUserCircle />}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to={"login/"} />
                  التسجيل
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to={"login/"} />
                  تسجيل الدخول
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="wrapper">
        <ul>
          <li className="whatsapp">
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
            <div className="slider">
              <a
                href="https://wa.me/+966500303116"
                target="_blank"
                className="linkTag"
              >
                <p>whatsapp</p>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <a href="#" class="top">
          &#8593;
        </a>
      </div>
    </div>
  );
}
