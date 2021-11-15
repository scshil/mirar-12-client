import React from "react";
import { useForm } from "react-hook-form";
const Makeadmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const email = data?.email;
    const user = { email };
    console.log(user);
    fetch(
      "https://fathomless-springs-74672.herokuapp.com/usercollection/admin",
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((admin) => {
        console.log(admin);
        if (admin.modifiedCount > 0) {
          alert("sucessfull");
          reset();
        }
        // console.log(admin);
      });
  };
  return (
    <div>
      <h6 className="my-5">Make Admin</h6>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} placeholder="enter email id" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Makeadmin;
