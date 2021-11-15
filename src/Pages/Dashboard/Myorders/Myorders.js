import React, { useState } from "react";
import { Table } from "react-bootstrap";

const Myorders = () => {
  const [allOrders, setAllORders] = useState([]);
  fetch("https://fathomless-springs-74672.herokuapp.com/myallorders")
    .then((res) => res.json())
    .then((data) => setAllORders(data));
  console.log(allOrders);
  const deletebtn = (id) => {
    const url = ``;
    fetch(`https://fathomless-springs-74672.herokuapp.com/myallorders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deletedCount > 0) {
          alert("Click ok for confirmation");
          const remaining = allOrders.filter((order) => order?._id !== id);
          return remaining;
        }
      });
  };
  return (
    <div className="container min-vh-100 ">
      <h1>my orders</h1>
      <Table className="container " striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Status</th>
          </tr>
        </thead>
        {allOrders.map((order) => (
          <tbody>
            <tr>
              <td>#</td>
              <td>{order?.productName}</td>
              <td>{order?.price}$</td>
              <td>{order?.status}</td>
              <button
                onClick={() => {
                  deletebtn(order?._id);
                }}
              >
                cancel
              </button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default Myorders;
