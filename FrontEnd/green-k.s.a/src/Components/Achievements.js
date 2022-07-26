import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function () {
  return (
    <div style={{textAlign: "center", margin: "10%"}}>
      <Row md={"3"} sm={"1"} className="g-4">
        <Col>
          <div class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <div class="inner-skew">
                  <img src="https://viewgital.com/img/chat/default-user-image.jpg" />
                </div>
              </div>
            </div>
            <div class="text-container">
              <h3>عدد المناطق</h3>
              <h2>13</h2>
            </div>
          </div>
        </Col>
        <Col>
          <div class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <div class="inner-skew">
                  <img src="https://viewgital.com/img/chat/default-user-image.jpg" />
                </div>
              </div>
            </div>
            <div class="text-container">
              <h3>عدد المناطق</h3>
              <h2>13</h2>
            </div>
          </div>
        </Col>
        <Col>
          <div class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <div class="inner-skew">
                  <img src="https://viewgital.com/img/chat/default-user-image.jpg" />
                </div>
              </div>
            </div>
            <div class="text-container">
              <h3>عدد المناطق</h3>
              <h2>13</h2>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
