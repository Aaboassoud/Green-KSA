import React from "react";
import { Col, Row } from "react-bootstrap";
import ImgHomr2 from "./images/imgHome3.jpeg";

export default function () {
  return (
    <div className="goalsComponent">
      <Row>
        <Col>
          <img style={{ width: "700px", height: "450px" }} src={ImgHomr2} />
        </Col>
        <Col>
          <div className="goalsContent">
            <h1>نطمح إلى</h1>
            <hr />
            <p>
              الفكرة بكل اختصار هي عبارة عن منصة تحفز المجتمع على المساعدة في
              تشجير المدن والمحافظات في المملكة. ويأتي دور هذا المشروع في
              المساهمة والمساعدة بأن يتيح لجميع فئات المجتمع زراعة النباتات
              المناسبة من أشجار وغيرها في الأماكن المناسبة وسيكون تحفيزهم في
              المبادرة بأن تحسب لهم نقاط على كل زرعة يزرعها المستخدم ويستطيع
              الاستفادة من هذه النقاط باستبدالها بمشتريات او كوبونات وغيرها.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
