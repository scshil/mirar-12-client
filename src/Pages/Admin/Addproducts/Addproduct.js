import React from "react";
import { useForm } from "react-hook-form";
import { Card, Col, Row, Button } from "react-bootstrap";
import "./Addproduct.css";
const Addproduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (watch) => {
    fetch("https://fathomless-springs-74672.herokuapp.com/addproduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(watch),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Added SucessFully");
          reset();
        }
      });
  };
  return (
    <div className="addproduct-page  ">
      <Row>
        <Col sm={8} md={8} lg={8}>
          <h3 className="my-5">Add a Product</h3>
          <div className="d-flex justify-content-center align-items-center mt-5 ">
            <form className="productform" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("productname")}
                placeholder="Enter Product Name"
              />
              <textarea
                {...register("productdetails")}
                placeholder="Enter Product Discription"
              />
              <input {...register("image")} placeholder="image URl" />
              <input type="number" {...register("price")} placeholder="price" />
              <input type="submit" value="Add" />
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Addproduct;
