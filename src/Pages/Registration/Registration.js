import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import "./Registration.css";
import login from "../../pic/login.jpg";
import useAuth from "../../Hook/useAuth";
const Registration = () => {
  const { user, registration, errorMessage } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (data?.repassword === data?.password) {
      registration(data?.email, data?.password);
    } else {
      //
    }
    reset();
    // console.log(data);
  };
  return (
    <div className="signup-Page">
      <div class="row container mt-5">
        <div class="col-sm-7 col-md-6  d-flex justify-content-center align-items-center">
          {" "}
          <section className="signup-form">
            <div className="mb-3">
              <strong>Please register yourself</strong>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                placeholder="Enter Your Email"
                {...register("email")}
              />
              <br />
              <input
                type="password"
                placeholder="Enter password"
                {...register("password")}
              />
              <br />
              <input
                type="password"
                placeholder=" Re-enter password"
                {...register("repassword")}
              />
              <br />
              <input type="submit" value="signup" />
              <p>
                already registread ? <NavLink to="/login">Signin</NavLink>
              </p>
              {user?.email && <p>user created Sucessfully</p>}
              {errorMessage && <p> {errorMessage}</p>}
              {/* <p>{errorMessage}</p> */}
            </form>
          </section>
        </div>
        <div class="col-sm-5 col-md-6 ">
          <section>
            <img className="img-fluid" src={login} alt="" srcset="" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Registration;
