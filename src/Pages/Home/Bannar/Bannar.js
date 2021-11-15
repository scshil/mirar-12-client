import React from "react";
import bannar from "../../../pic/bannar.png";
const Bannar = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <h1>Mirar a complete Watch Soluation</h1>
        </div>
        <div className="col">
          <img className="img-fluid" src={bannar} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Bannar;
