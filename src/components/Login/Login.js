import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="total-form mx-auto bg-white mt-4">
        <div className="just-form p-3">
          <header className="mb-4 text-start fw-bold">
            <h3>Please Login</h3>
          </header>
          <div className="form-details text-start">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Username or Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <span>
                  <Link style={{ color: "#e47657" }} to="/">
                    Forget Password
                  </Link>
                </span>
              </div>
              <Button className="login-btn" type="submit">
                Login
              </Button>
            </Form>
            <div className="text-center mt-2">
              <span className="me-2">Don't have an account?</span>
              <span>
                <Link style={{ color: "#e47657" }} to="/registration">
                  Create an account
                </Link>
              </span>
            </div>
          </div>
        </div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
