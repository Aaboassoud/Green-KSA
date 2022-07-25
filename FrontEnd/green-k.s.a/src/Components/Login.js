import React from 'react'
import { Form, Col, Button, Row } from "react-bootstrap";

export default function Login() {
  return (
    <div className='loginRegister'>
      <div className="formLogin">
        <Form>
          <h1>تسجيل الدخول</h1>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="text" placeholder="اسم المستخدم" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="password" placeholder="كلمة المرور" />
            </Form.Group>
          </Row>

      
            <Button id="button" variant="primary" type="submit" size="lg">
              دخول
            </Button>

            <Button id="button" variant="primary" type="submit" size="lg">
              سجل معنا
            </Button>
          
        </Form>
      </div>
    </div>
  );
}
