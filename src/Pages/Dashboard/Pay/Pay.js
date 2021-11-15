import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import payment from "../../../pic/payment.png";
import "./Pay.css";
const Pay = () => {
  return (
    <div className="payment-page d-flex justify-content-center  align-items-center">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Image className="img-fluid" src={payment} />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={6}
            className="d-flex justify-content-center  align-items-center"
          >
            <h3>Comming soon..</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pay;
