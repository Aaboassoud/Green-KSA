import React from 'react'
import{ Card, Button, Container} from 'react-bootstrap';
import "../App2.css"

export default function PosterRater() {
  return (
    <div>
        <Container>

         <Card className='h-100' style={{ width: '13rem' ,height:"13rem", margin:"5%"}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Container>
   
    </div>

  )
}
