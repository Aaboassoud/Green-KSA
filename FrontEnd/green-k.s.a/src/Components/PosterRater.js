import React from "react";
import {
  Button,
  Card,
  Col,
  Row,
  CardGroup,
  Container,
  Form,
} from "react-bootstrap";

export default function PosterRater() {
  return (
    <div>
      <Row xs={1} md={2} className="g-3">
        <Col>
          <Container className="cardsUserRater">
            <Card.Img
              className="cardsUserRateImg"
              variant="top"
              src="https://viewgital.com/img/chat/default-user-image.jpg"
            />
            <div>

                <h5>Card title</h5>
              <p>

                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              
              <Form>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Control type="password" placeholder="كلمة المرور" />
                </Form.Group>
              </Form>
            </div>
          </Container>
        </Col>
        <Col>
          <Container className="cardsUserRater">
            <Card.Img
              className="cardsUserRateImg"
              variant="top"
              src="https://viewgital.com/img/chat/default-user-image.jpg"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Container>
        </Col>
        <Col>
          <Container className="cardsUserRater">
            <Card.Img
              className="cardsUserRateImg"
              variant="top"
              src="https://viewgital.com/img/chat/default-user-image.jpg"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Container>
        </Col>
      </Row>
    </div>
  );
}
