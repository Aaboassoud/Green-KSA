import React from 'react'
import "../App2.css"
import { Card, Col, Container,Row,Button } from 'react-bootstrap'


export default function Tickets() {
  return (
    <div>
      <Container>
      <h1>كوبونات</h1>
          
            <Row  md={"3"} sm={"1"} className="g-4" >
  <div class='card1'  style={{ backgroundImage:`url("هنا صورة التكت")`}} >
    <div class='info'>
      <h1 class='title'>Title</h1>
      <p class='description'>Lorem ipsum .</p>
    </div>
  </div>

  <div class='card1'>
    <div class='info'>
      <h1 class='title'>Title</h1>
      <p class='description'>Lorem ipsum .</p>
    <Button id="button">شراء</Button>
    </div>
  </div>
  </Row>
  </Container>


  </div>
  );
}
