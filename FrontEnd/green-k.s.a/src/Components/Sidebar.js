import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {render} from 'react-dom';
import "../App2.css"



export default function Sidebar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header style={{color:"white",background:"#2b472ecf"}} closeButton >
          <Offcanvas.Title  ><h1>username</h1></Offcanvas.Title>
        

        </Offcanvas.Header>
        <Offcanvas.Body className='text-center mt-5'>
          <h2>firstname</h2>
          <h2>lasttname</h2>
          <h2>email</h2>
          <h2>phone</h2>
          <h2>city</h2>
          <hr/>
          <h2>points</h2>
          <hr/>
          <Button id="button" variant="primary" >
        التسجيل
      </Button>
  
      <Button id="button" variant="primary" >
        تسجيل الدخول
      </Button>
      <br/>
      <Button id="button" variant="primary" >
        الخروج
      </Button>
      
      <Button id="button" variant="primary" >
        تعديل الحساب
      </Button>
        </Offcanvas.Body>
        
      </Offcanvas>

    </div>
  )
}
