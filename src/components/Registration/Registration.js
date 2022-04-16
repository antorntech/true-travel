import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Registration.css";

const Registration = () => {
  return (
    <div className="container">
      <div className="total-form mx-auto bg-white mt-4">
        <div className="just-form p-4">
          <header className="mb-4 text-start fw-bold">
            <h3>Create an account</h3>
          </header>
          <div className="form-details text-start">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicName1">
                <Form.Control type="text" placeholder="First name" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicName2">
                <Form.Control type="text" placeholder="Last name" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Username or Email" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
              <Button className="registration-btn" type="submit">
                Create an account
              </Button>
            </Form>
            <div className="text-center mt-2">
              <span className="me-2">Already have an account?</span>
              <span>
                <Link style={{ color: "#e47657" }} to="/login">
                  Login
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

export default Registration;
