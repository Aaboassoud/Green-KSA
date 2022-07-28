import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function PosterUser() {
  const [data, setData] = useState([]);
  const [score_points, setScore_points] = useState();
  const params = useParams();
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const [postID, setPostID] = useState();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/posts/user/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.Posts);
        localStorage.setItem("Posts", Object.keys(res.data.Posts).length);
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
  }, []);
  const postData = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://127.0.0.1:8000/ratings/add/${postID}`,
        {
          score_points,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log(res);
        navigate(`/profile/${params.id}`);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.msg);
      });
  };
  return (
    <div>
      <Row md={"2"}>
        {data.map((e) => (
          <Col>
            <div style={{ textAlign: "center", margin: "10%" }}>
              <div class="b-box">
                <div class="img2-container">
                  <div class="img-inner">
                    <div class="inner1-skew">
                      <img src={`${e.image}`} />
                    </div>
                  </div>
                </div>
                <div class="text-container">
                  <h2>{e.user.username}</h2>
                  <h4>{e.city}</h4>
                  <h4>{e.type}</h4>
                  <p>{e.description}</p>
                  {id == e.user.id ? (
                    <>
                      <Link to={`/editposter/${e.id}`}>
                        <Button
                          id="button"
                          variant="primary"
                          type="submit"
                          size="lg"
                        >
                          تعديل البوست
                        </Button>
                      </Link>
                      <Link to={`/delete/${e.id}`}>
                        <Button
                          id="button"
                          variant="primary"
                          type="submit"
                          size="lg"
                        >
                          حذف البوست
                        </Button>
                      </Link>
                    </>
                  ) : e.user.groups[0] == 1 ? (
                    <>
                      <Form.Group
                        onSubmit={() => setPostID(e.id)}
                        as={Col}
                        controlId="formGridPassword"
                      >
                        <Form.Control
                          type="text"
                          placeholder="قيم هنا"
                          onFocus={() => setPostID(e.id)}
                          onChange={(e) => setScore_points(e.target.value)}
                        />
                      </Form.Group>
                      <Button
                        id="button"
                        variant="primary"
                        type="submit"
                        size="lg"
                      >
                        قيّم
                      </Button>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
