import React from "react";
import ProfileCmp from "../ProfileCmp";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <Row>
        <Col xs={9}>
          <div className="boxPosters">
            <div style={{ textAlign: "center", margin: "10%" }}>
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
          </div>
          <Link to="/editprofile">
            <Button id="button" variant="primary" type="submit" size="lg">
             أضف زرعتك
            </Button>
          </Link>
        </Col>
        <Col>
          <div className="boxProfile">
            <img src="https://viewgital.com/img/chat/default-user-image.jpg" />
            <hr />
            <div className="profileItem">
              <h3>mohammed33</h3>
              <h4>محمد سليمان</h4>
              <Row>
                <Col>
                  <h5>0500303116</h5>
                </Col>
                <Col>
                  <h5>الرياض</h5>
                </Col>
              </Row>
              <p>تاريخ التسجيل - 2022/07/11</p>
              <hr />
              <Row>
                <Col>
                  <h3>الزرعات</h3>
                  <h1>50</h1>
                </Col>
                <Col>
                  <h3>النقاط</h3>
                  <h1>50</h1>
                </Col>
              </Row>
              <hr />
              <Link to="/editprofile">
                <Button id="button" variant="primary" type="submit" size="lg">
                  تعديل الحساب
                </Button>
              </Link>
              <Button
                id="button-danger"
                variant="primary"
                type="submit"
                size="lg"
              >
                حذف الحساب
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
