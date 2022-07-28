import React from "react";
import { Col, Row } from "react-bootstrap";
import ImgHomr5 from "./images/imgHome5.jpeg";

export default function () {
  return (
    <div id="goals" className="goalsComponent">
      <Row>
        <Col>
          <img style={{ width: "695px", height: "450px" }} src={ImgHomr5} />
        </Col>
        <Col>
          <div className="goalsContent">
            <h1>نطمح إلى</h1>
            <hr />
            <h5>
              لدينا طوح عالي يعانق السماء بالوصل إلي كافتك عناصر المجتمع و
              تحفيزهم على المساهمه بـ :
            </h5>
            <ul>
              <li>تشجير المملكة</li>
              <li>تقيليل الانبعاثات الكربونية</li>
              <li>حماية المناطق البرية والبحرية</li>
              <li>المساهمه في الحد من التصحر</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}
