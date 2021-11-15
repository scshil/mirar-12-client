import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import login from "../../pic/login.jpg";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { useHistory, useLocation } from "react-router";
const Login = () => {
  const { loginWithPassword, errorMessage, loginWithGmail } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const location = useLocation();
  const history = useHistory();
  // gmail
  const gLogin = () => {
    loginWithGmail(location, history);
  };
  const onSubmit = (data) => {
    loginWithPassword(data?.email, data?.password, location, history);
    // console.log(data);
    reset();
    console.log(errorMessage);
  };
  return (
    <div className="login-Page">
      <div class="row container mt-5">
        <div class="col-sm-7 col-md-6  d-flex justify-content-center align-items-center">
          {" "}
          <section className="login-form">
            <div className="mb-3">
              <strong>Please enter your email & password for login</strong>
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
                placeholder="Enter Your password"
                {...register("password")}
              />
              <br />
              <input type="submit" value="signin" />
              <button onClick={gLogin}>GMAIL</button>
              <p>
                don't have an account?
                <NavLink to="/registration"> Signup</NavLink>
              </p>
              {errorMessage && <p>{errorMessage}</p>}
              <p>{errorMessage}</p>
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

export default Login;
