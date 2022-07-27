import React, { useState } from "react";
import { Button, Col, Collapse, Form, Row } from "react-bootstrap";
import { BsList } from "react-icons/bs";

export default function ShowPosters() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Row md={"3"} sm={"1"} className="g-4">
        <Col>
          <div className="cardShowPoster">
            <div className="containerShowPoster">
              <Row>
                <Col>
                  <div className="contentCardShowPoster">
                    <h4>Mohammed33</h4>
                    <hr />
                    <h5>الرياض</h5>
                    <hr />
                    <h5>شجرة</h5>
                    <hr />
                    <p>
                      زرعت الشجرة عندي في البيت وانتظر النقاط والكوبونات منكم
                      وحركاتكم الحلوه
                    </p>
                  </div>
                </Col>
                <Col>
                  <img
                    src="https://viewgital.com/img/chat/default-user-image.jpg"
                    alt="Avatar"
                  />
                </Col>
              </Row>
              <Button
                id="button"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                {<BsList />}
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  {/* <p>comment here</p> */}
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>التعليق</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </div>
              </Collapse>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
