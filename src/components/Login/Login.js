import React from "react";
import { Button, Form } from "react-bootstrap";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="w-50 mx-auto bg-white p-3">
        <header>
          <h3>Please Login</h3>
        </header>
        <div className="form-details text-start">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button className="login-btn" type="submit">
              Login
            </Button>
          </Form>
        </div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
