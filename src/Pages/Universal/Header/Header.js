import React from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logout, admin } = useAuth();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <div>
            <Navbar.Brand>Mirar</Navbar.Brand>
            <Nav className="me-auto  ">
              <NavLink
                className="nav-text"
                activeStyle={{
                  color: "cyan",
                }}
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="nav-text"
                activeStyle={{
                  color: "cyan",
                }}
                to="/collection"
              >
                Collection
              </NavLink>
              <NavLink
                className="nav-text"
                activeStyle={{
                  color: "cyan",
                }}
                to="/about"
              >
                About
              </NavLink>
              {/* <NavLink></NavLink>
  <NavLink></NavLink> */}
            </Nav>
          </div>
          {user?.email ? (
            <div>
              <div className="d-flex">
                <div>
                  {admin === true && (
                    <div>
                      <NavLink to="/admindashboard">
                        {" "}
                        <button className="dashboard-btn">Admin</button>
                      </NavLink>
                    </div>
                  )}
                  {admin === false && (
                    <div>
                      <NavLink to="/userdashboard">
                        {" "}
                        <button className="dashboard-btn">User</button>
                      </NavLink>
                    </div>
                  )}
                </div>
                <div>
                  <button onClick={() => logout()} className="login-btn">
                    logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <NavLink to="/login">
                {" "}
                <button className="login-btn">login</button>
              </NavLink>
            </div>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
