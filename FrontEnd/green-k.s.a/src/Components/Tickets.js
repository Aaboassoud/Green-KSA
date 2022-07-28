import React, { useEffect, useState } from 'react'
import "../App2.css"
import { Card, Col, Container,Row,Button } from 'react-bootstrap'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Tickets() {
  const [data, setData] = useState([])
  const token = localStorage.getItem("token")
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/coupons/all`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.Coupons)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <div>
      <Container>
      <h1>كوبونات</h1>
          
            <Row  md={"3"} sm={"1"} className="g-4" >
  {data.map((e) => (<div class='card1' style={{ backgroundImage:`url("${e?.image}")`}}>
    <div class='info'>
      <h1 class='title'>{e.title}</h1>
      <p class='description'>{e.description}</p>
      <p class='description'>{e.quantity}</p>
      <p class='description'>{e.start_at}</p>
      <p class='description'>{e.end_at}</p>
      <p class='description'>{e.points}</p>
    {token?<Link to={`/Buy/Coupons/${e.id}`}><Button id="button">شراء</Button></Link>:null}
    </div>
  </div>))}
  </Row>
  </Container>


  </div>
  );
}
