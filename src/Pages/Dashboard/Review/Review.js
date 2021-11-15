import React from "react";
import useAuth from "../../../Hook/useAuth";
import { useForm } from "react-hook-form";

import "./Review.css";
const Review = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.image = user?.photoURL;
    fetch("https://fathomless-springs-74672.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((userReview) => {
        if (userReview?.insertedId) {
          alert("review Addeded");
          reset();
        }
      });
    // console.log(user);
    // console.log(data);
  };

  return (
    <div className="container mt-3 ">
      <h6>Write Something About Mirar</h6>
      <div className="d-flex justify-content-center align-items-center">
        <form className=" mt-3 reviewform " onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} Placeholder="Enter your Name" />
          <input {...register("email")} defaultValue={user?.email} />
          <textarea
            {...register("reviewText")}
            Placeholder="Write about Mirar"
          />
          <input
            type="number"
            {...register("reating", { min: 0, max: 5 })}
            Placeholder="rate us out of 5"
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Review;
