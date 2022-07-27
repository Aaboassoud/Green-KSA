import React from "react";
import ImgHomr1 from "./images/imgHome2.jpeg";
import { Col, Row } from "react-bootstrap";



export default function About() {
  return (
    <div className="aboutComponent">
      <Row>
        <Col>
        <div className="aboutContent">
          <h1 id="about">من نحن</h1>
          <hr />
          <p>
            نبعت هذه الفكرة من مشروع الرياض الخضراء بحيث تساهم هذه الفكرة بتسريع
            المبادرة والمساعدة في تحقيق رؤية المملكة 2030 وبدلا من ان يكون هذا
            المشروع في الرياض فقط يكون في جميع انحاء المملكة
          </p>
        </div>
        </Col>
        <Col>
          <img style={{width:"740px" , height:"450px"}} src={ImgHomr1} />
        </Col>
      </Row>
    </div>
  );
}