import React from "react";
import error from "../../../pic/error.png";
import "./Error.css";
const Error = () => {
  return (
    <div className="error">
      <img className="error" src={error} />
    </div>
  );
};

export default Error;
