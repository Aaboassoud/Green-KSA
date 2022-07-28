import React, { useEffect, useState } from "react";
import ProfileCmp from "../ProfileCmp";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import PosterUser from "../PosterUser";
import axios from "axios";
export default function Profile() {
  const [data, setData] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const id = localStorage.getItem("id")
  const token = localStorage.getItem("token")
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/accounts/user/info/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.Information)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Row>
        <Col xs={9}>
          <div className="boxPosters">
            <div style={{ textAlign: "center", margin: "10%" }}>
              <Row md={"3"} sm={"1"} className="g-4">
                <Col>
                <PosterUser />
                </Col>
              </Row>
            </div>
          </div>
          {data.id==id?<Link to="/addposter">
            <Button id="button" variant="primary" type="submit" size="lg">
              أضف زرعتك
            </Button>
          </Link>:null}
        </Col>
        <Col>
          <div className="boxProfile">
            <img src={"https://viewgital.com/img/chat/default-user-image.jpg"} />
            <hr />
            <div className="profileItem">
              <h3>{data.username}</h3>
              <h4>{`${data.first_name} ${data.last_name}`}</h4>
              <Row>
                <Col>
                  {data.id==id?<h5>{data.email}</h5>:null}
                </Col>
                <Col>
                  <h5>{data.city}</h5>
                </Col>
              </Row>
              <p>تاريخ التسجيل - {data.date_joined}</p>
              <hr />
              <Row>
                <Col>
                  <h3>الزرعات</h3>
                  <h1>3</h1>
                </Col>
                <Col>
                  <h3>النقاط</h3>
                  <h1>50</h1>
                </Col>
              </Row>
              {data.id==id?<><hr />
              <Link to={`/editprofile`}>
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
              </Button></>:null}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
