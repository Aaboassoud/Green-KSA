import React from 'react'
import { Form, Col, Button, Row } from "react-bootstrap";


export default function LogInRegister() {
  return (
    <div>
      <div className="loginRegister">
        <div className="formRegister">
          <Form>
            <h1>بادر بالتسجيل وضع بصمتك في التشجير</h1>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="الاسم الأول" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="الاسم الأخير" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="اسم المستخدم" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="email" placeholder="الايميل" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="رقم الجوال" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="العنوان" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Select defaultValue="Choose...">
                  <option>الجنس</option>
                  <option>ذكر</option>
                  <option>أنثى</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="password" placeholder="كلمة المرور" />
              </Form.Group>
            </Row>
            <Button id="button" variant="primary" type="submit" size="lg">
              سجل
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
