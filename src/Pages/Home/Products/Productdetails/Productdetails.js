import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import "./Productsdetails.css";
import useAuth from "../../../../Hook/useAuth";
import { Link } from "react-router-dom";
const Productdetails = () => {
  const { user } = useAuth();
  const [shoppingPage, setShoppingPage] = useState();
  const { id } = useParams();
  const [watchDetails, setWatchDetails] = useState({});
  useEffect(() => {
    const url = `https://fathomless-springs-74672.herokuapp.com/productdetails/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWatchDetails(data));
  }, [id]);
  //   console.log(watchDetails);
  //
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (order) => {
    order.status = "pending";
    console.log(order);
    fetch("https://fathomless-springs-74672.herokuapp.com/allorders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.insertedId) {
          alert("Added SucessFully");
          setShoppingPage(result);
        }
      });
  };
  return (
    <div className="mb-5 container">
      <h1 className="mt-3">{watchDetails?.productname}</h1>
      <p className="mt-2">
        <b>price:{watchDetails?.price}$</b>
      </p>
      <Container>
        <Row>
          <Col xs={12} sm={8} md={8} lg={8}>
            <Card>
              <Card.Img variant="top" src={watchDetails?.image} />
              <Card.Body>
                <Card.Text>{watchDetails?.productdetails}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={4} md={4} lg={4}>
            <h4 className="mt-2">Purchase</h4>
            <form className="mt-2 purches" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("clientName")}
                placeholder="enter your name"
              />
              <input
                {...register("productName")}
                defaultValue={watchDetails?.productname}
              />
              <input
                {...register("email")}
                defaultValue={user?.email}
                placeholder="enter your email"
              />

              <textarea
                {...register("address")}
                placeholder="enter your full address"
              />
              <input
                type="number"
                {...register("price")}
                defaultValue={watchDetails?.price}
              />

              <input type="submit" value="Purchase" />
              {shoppingPage?.insertedId && (
                <Link to="/collection">
                  <button>Back to Shopping</button>
                </Link>
              )}
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Productdetails;
