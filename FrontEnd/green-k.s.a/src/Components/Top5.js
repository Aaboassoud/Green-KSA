import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Img from "./images/imgHome1.jpg";
import "../App2.css";
import axios from "axios";

export default function Top5() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/posts/top5")
    .then((res) => {
      console.log("HELLOOOOOOOOOO",res.data['Users Profile'])
      setData(res.data['Users Profile'])
    })
    .catch(err => console.log("WTF",err));
  }, []);
  return (
    // <div className="top5">
    //   <div style={{ margin: "10%" }} class="containerTop5">
    //     <div class="row">
    //       <div class="col-md-4">
    //         <div class="profile-card-4 text-center">
    //           <img
    //             src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg"
    //             class="img img-responsive"
    //           />
    //           <div class="profile-content">
    //             <h3>الاسم</h3>
    //             <div class="profile-description">
    //               <Row>
    //                 <Col>المركز</Col>
    //                 <Col>المدينة</Col>
    //               </Row>
    //             </div>
    //             <div class="row">
    //               <div class="col-xs-4">
    //                 <div class="profile-overview">
    //                   <h3>النقاط</h3>
    //                   <h4>168</h4>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div class="col-md-4">
    //         <div class="profile-card-4 text-center">
    //           <img
    //             src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg"
    //             class="img img-responsive"
    //           />
    //           <div class="profile-content">
    //             <h3>الاسم</h3>
    //             <div class="profile-description">
    //               <Row>
    //                 <Col>المركز</Col>
    //                 <Col>المدينة</Col>
    //               </Row>
    //             </div>
    //             <div class="row">
    //               <div class="col-xs-4">
    //                 <div class="profile-overview">
    //                   <h3>النقاط</h3>
    //                   <h4>168</h4>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div class="col-md-4">
    //         <div class="profile-card-4 text-center">
    //           <img
    //             src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg"
    //             class="img img-responsive"
    //           />
    //           <div class="profile-content">
    //             <h3>الاسم</h3>
    //             <div class="profile-description">
    //               <Row>
    //                 <Col>المركز</Col>
    //                 <Col>المدينة</Col>
    //               </Row>
    //             </div>
    //             <div class="row">
    //               <div class="col-xs-4">
    //                 <div class="profile-overview">
    //                   <h3>النقاط</h3>
    //                   <h4>168</h4>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // </div>
    <div>
      <h1 style={{ textAlign: "center" }}>افضل 5</h1>
      <hr />
      <div className="container_two">
        {data.map((e) =>  <div class="col-md-4">
          <div class="profile-card-4 text-center">
            <img
              src={e.avtar?`${e.avtar}`:"https://viewgital.com/img/chat/default-user-image.jpg"}
              class="img img-responsive"
            />
            <div class="profile-content">
              <h3>{`${e.user.first_name} ${e.user.last_name}`}</h3>
              <div class="profile-description">
                <Row>
                  <Col>المركز</Col>
                  <Col>{e.city}</Col>
                </Row>
              </div>
              <div class="row">
                <div class="col-xs-4">
                  <div class="profile-overview">
                    <h3>النقاط</h3>
                    <h4>{e.scorePoints}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)}

        {/* <div class="col-md-4">
          <div class="profile-card-4 text-center">
            <img
              src="https://viewgital.com/img/chat/default-user-image.jpg"
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

        <div class="col-md-4">
          <div class="profile-card-4 text-center">
            <img
              src="https://viewgital.com/img/chat/default-user-image.jpg"
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

        <div class="col-md-4">
          <div class="profile-card-4 text-center">
            <img
              src="https://viewgital.com/img/chat/default-user-image.jpg"
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

        <div class="col-md-4">
          <div class="profile-card-4 text-center">
            <img
              src="https://viewgital.com/img/chat/default-user-image.jpg"
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

        <div class="col-md-4">
          <div class="profile-card-4 text-center">
            <img
              src="https://viewgital.com/img/chat/default-user-image.jpg"
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

        <div class="col-md-4"> */}
          {/* <div class="profile-card-4 text-center">
            <img
              src="https://viewgital.com/img/chat/default-user-image.jpg"
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
        </div> */}
      </div>
    </div>
  );
}
