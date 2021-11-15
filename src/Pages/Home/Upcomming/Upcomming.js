import React from "react";
import { Carousel } from "react-bootstrap";
import upcomming1 from "../../../pic/upcommimg1.jpg";
import upcomming2 from "../../../pic/upcommimg2.jpg";
import upcomming3 from "../../../pic/upcommimg3.jpg";
const Upcomming = () => {
  return (
    <div className="container my-5">
      <h5>Upcomming watch</h5>
      <Carousel fade>
        <Carousel.Item className="h-50">
          <img
            className="d-block w-100 img-fluid"
            src={upcomming3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Rolex Explorer Men's Watch 214270-0001 </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={upcomming2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Oris Men's Big Crown Pointer</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={upcomming1}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>American Waltham 1879</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Upcomming;
