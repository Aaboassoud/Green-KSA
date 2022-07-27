import React, { useState } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Col,
  Row,
  Button,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./images/Logo.png";
import { FaUserCircle } from "react-icons/fa";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <Navbar.Brand href="/">المملكة الخضراء</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto LinkNavbar">
              <Nav.Link href="/">الرئسية</Nav.Link>
              <Nav.Link href="/posters">بصمات</Nav.Link>
              <Nav.Link href="/ticket">القسائم</Nav.Link>
              <Nav.Link href="/instuctioms">الارشارات</Nav.Link>
              <Nav.Link href="/explorer">استكشف#</Nav.Link>
              <NavDropdown title="" id="basic-nav-dropdown">
                <NavDropdown.Item href="/#about">نبذه عنا</NavDropdown.Item>
                <NavDropdown.Item href="/#goals">الأهداف</NavDropdown.Item>
                <NavDropdown.Item href="/#achievement">
                  الانجازات
                </NavDropdown.Item>
                <NavDropdown.Item href="/#footer">تواصل معنا</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <div>
              <Button id="button" variant="primary" onClick={handleShow}>
                <FaUserCircle />
              </Button>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header
                  style={{ color: "white", background: "#2b472ecf" }}
                  closeButton
                >
                  <Offcanvas.Title>
                    <h1>username</h1>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="text-center mt-5">
                  <h2>firstname</h2>
                  <h2>lasttname</h2>
                  <h2>email</h2>
                  <h2>phone</h2>
                  <h2>city</h2>
                  <hr />
                  <h2>points</h2>
                  <hr />
                  <div className="loginRegister">
                    <div className="formLogin">
                      <Form>
                        <h3>تسجيل الدخول</h3>
                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Control
                              type="text"
                              placeholder="اسم المستخدم"
                            />
                          </Form.Group>
                        </Row>

                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Control
                              type="password"
                              placeholder="كلمة المرور"
                            />
                          </Form.Group>
                        </Row>

                        <Button id="button" variant="primary" type="submit">
                          دخول
                        </Button>
                        <Link to="/register">
                          <Button id="button" variant="primary" type="submit">
                            سجل معنا
                          </Button>
                        </Link>
                      </Form>
                    </div>
                  </div>
                  <br />
                  <Button id="button" variant="primary">
                    الخروج
                  </Button>

                  <Button id="button" variant="primary">
                    تعديل الحساب
                  </Button>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
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
