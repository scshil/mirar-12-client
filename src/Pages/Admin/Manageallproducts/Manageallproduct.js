import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Manageallproduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fathomless-springs-74672.herokuapp.com/collection")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const deletebtn = (id) => {
    fetch(`https://fathomless-springs-74672.herokuapp.com/allproducts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("click ok for confirm");
          const remaining = products.filter((product) => product?._id !== id);
          return remaining;
        }
      });
  };

  return (
    <div className="container min-vh-100 ">
      <h1>Manage products</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product image</th>
            <th>Product Name</th>
            <th>Product Price</th>
          </tr>
        </thead>
        {products.map((product) => (
          <tbody>
            <tr>
              <td>
                {" "}
                <img height="50px" src={product?.image} />{" "}
              </td>
              <td>{product?.productname}</td>
              <td>{product?.price}$</td>
              <button
                onClick={() => {
                  deletebtn(product?._id);
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

export default Manageallproduct;
