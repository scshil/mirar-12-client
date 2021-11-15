import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Addproducts from "../../Admin/Addproducts/Addproduct";
import Makeadmin from "../Makeadmin/Makeadmin";
import Manageallproduct from "../Manageallproducts/Manageallproduct";
const Admindashboard = () => {
  const [data, setData] = useState("");
  return (
    <div className=" container min-vh-100">
      <Container>
        <Row>
          <Col className="container" xs={2} sm={3} md={4} lg={2}>
            <ul>
              <li
                onClick={() => {
                  setData("addprodect");
                }}
              >
                Addproduct
              </li>
              <li
                onClick={() => {
                  setData("manageallproduct");
                }}
              >
                Manage product
              </li>
              <li
                onClick={() => {
                  setData("makeadmin");
                }}
              >
                Make Admin
              </li>
            </ul>
          </Col>
          <Col className="border-start" xs={7} sm={7} md={7} lg={10}>
            {data === "addprodect" && <Addproducts></Addproducts>}
            {data === "manageallproduct" && (
              <Manageallproduct></Manageallproduct>
            )}
            {data === "makeadmin" && <Makeadmin></Makeadmin>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Admindashboard;
