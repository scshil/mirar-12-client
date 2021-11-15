import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import useAuth from "../../../Hook/useAuth";

const Review = () => {
  const [reviews, setReview] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch("https://fathomless-springs-74672.herokuapp.com/showreview")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  // console.log(user);
  // console.log(reviews);
  return (
    <div className="container my-5">
      <h5>Our Happy Clients</h5>
      <Row xs={2} md={3} lg={5} className="g-4">
        {reviews.map((review) => (
          <Col>
            <Card>
              <Card.Img className=" p-2" variant="top" src={review?.image} />
              <Card.Body>
                <Card.Title>
                  <h6>{review?.name}</h6>
                </Card.Title>
                <Card.Text>{review?.reviewText}</Card.Text>
              </Card.Body>

              <b>
                Reating:{review?.reating}
                <FontAwesomeIcon icon={faStar} />
              </b>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Review;
