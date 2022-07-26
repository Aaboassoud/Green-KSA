import React from "react";
import { Row } from "react-bootstrap";
import "../App2.css";

export default function Tickets() {
  return (
    <div>
      <Row sm={2} md={3} className="g-1">
        <div class="card1">
          <div class="info">
            <h1 class="title">Title</h1>
            <p class="description">Lorem ipsum .</p>
          </div>
        </div>
        <div class="card1">
          <div class="info">
            <h1 class="title">Title</h1>
            <p class="description">Lorem ipsum .</p>
          </div>
        </div>
        <div class="card1">
          <div class="info">
            <h1 class="title">Title</h1>
            <p class="description">Lorem ipsum .</p>
          </div>
        </div>
        <div class="card1">
          <div class="info">
            <h1 class="title">Title</h1>
            <p class="description">Lorem ipsum .</p>
          </div>
        </div>
      </Row>
    </div>
  );
}
