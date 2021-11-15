import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

import Myorders from "../Myorders/Myorders";
import Pay from "../Pay/Pay";
import Review from "../Review/Review";

const Dashboard = () => {
  const [data, setData] = useState("");

  return (
    <div className=" container min-vh-100">
      <Container>
        <Row>
          <Col className="container" xs={3} sm={3} md={4} lg={2}>
            <ul>
              <li
                onClick={() => {
                  setData("payment");
                }}
              >
                payment
              </li>
              <li
                onClick={() => {
                  setData("orders");
                }}
              >
                orders
              </li>
              <li
                onClick={() => {
                  setData("review");
                }}
              >
                review
              </li>
            </ul>
          </Col>
          <Col className="border-start" xs={7} sm={7} md={6} lg={10}>
            {data === "payment" && <Pay></Pay>}
            {data === "orders" && <Myorders> </Myorders>}
            {data === "review" && <Review></Review>}
            {/*  */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
