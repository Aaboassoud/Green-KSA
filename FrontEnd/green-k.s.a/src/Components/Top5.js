import React from "react";
import { Col, Row } from "react-bootstrap";
import "../App2.css";

export default function Top5() {
  return (
    <div className="top5">
      <div style={{ margin: "10%" }} class="containerTop5">
        <div class="row">
    
          <div class="col-md-4">
            <div class="profile-card-4 text-center">
              <img
                src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg"
                class="img img-responsive"
              />
              <div class="profile-content">
                <h3>الاسم</h3>
                <div class="profile-description">
                  <Row>
                    <Col>المركز</Col>
                    <Col>المدينة</Col>
                  </Row>
                </div>
                <div class="row">
                  <div class="col-xs-4">
                    <div class="profile-overview">
                      <h3>النقاط</h3>
                      <h4>168</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
