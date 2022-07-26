import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {render} from 'react-dom';



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
        <Offcanvas.Header closeButton>
          <Offcanvas.Title ><h1>username</h1></Offcanvas.Title>

        </Offcanvas.Header>
        <Offcanvas.Body className='text-center mt-5'>
          <h2>firstname</h2>
          <h2>lasttname</h2>
          <h2>email</h2>
          <h2>phone</h2>
          <h2>city</h2>
        </Offcanvas.Body>
        
      </Offcanvas>

    </div>
  )
}
