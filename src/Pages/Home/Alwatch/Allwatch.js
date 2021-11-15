import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Allwatch = () => {
  const [watchs, setWatchs] = useState([]);
  useEffect(() => {
    fetch("https://fathomless-springs-74672.herokuapp.com/collection")
      .then((res) => res.json())
      .then((data) => setWatchs(data));
  }, []);
  console.log(watchs);
  return (
    <div className="container mb-5">
      <h1 className="mt-3">Our Collection's</h1>
      <div className="mt-3">
        <Row xs={1} md={2} lg={3} className="g-4">
          {watchs.map((watch) => (
            <Col>
              <Card>
                <Card.Img height="220px" variant="top" src={watch?.image} />
                <Card.Body>
                  <Card.Title>{watch?.productname}</Card.Title>
                  <b>price:{watch?.price}$</b>
                </Card.Body>
                <NavLink to={`/productdetails/${watch?._id}`}>
                  <Button variant="info">View</Button>
                </NavLink>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Allwatch;
