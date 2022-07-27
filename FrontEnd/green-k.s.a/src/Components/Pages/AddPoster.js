
import React from 'react'
import { Form, Col, Button, Row } from "react-bootstrap";

export default function AddPoster() {
  return (
    <div className="loginRegister">
        <Form>
          <h1>بيانات الزرعة</h1>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="text" placeholder="أضف العنوان" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="text" placeholder="نوع الزرعة" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Select defaultValue="Choose...">
                <option>المدينة</option>
                <option>الرياض</option>
                <option>مكة المكرمة</option>
              </Form.Select>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>أضف صورة الزرعة</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Form.Group>
          </Row>
          <Button id="button" variant="primary" type="submit" size="lg">
            إضافة
          </Button>
        </Form>
      </div>
  );
}
