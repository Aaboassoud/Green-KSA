import React from 'react'
import{ Card, Button, Col, Row, Form} from 'react-bootstrap';

export default function PosterUser() {
  return (
    <div>
      
      <Row md={"2"} >
        <Col>
  
    
            <div style={{ textAlign: "center", margin: "10%" }}>
            
                  <div class="b-box">
                    <div class="img2-container">
                      <div class="img-inner">
                        <div class="inner1-skew">
                          <img src="https://viewgital.com/img/chat/default-user-image.jpg" />
                        </div>
                      </div>
                    </div>
                    <div class="text-container">
                      <h2>اليوزر</h2>
                      <h4>المدينة</h4>
                      <h4>نخلة</h4>
                      <p>الوصف</p>
                      
                      
                
                      <Button id="button" variant="primary" type="submit" size="lg">
                تعديل الحساب 
            </Button>
            
                      <Button id="button" variant="primary" type="submit" size="lg">
                حذف الحساب
            </Button>
                    </div>
                  
                  </div>
                  </div>

                  
                 
      </Col>
   
      </Row>
             

    </div>
  )
}
