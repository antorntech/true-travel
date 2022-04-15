import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid" style={{ background: "#000" }}>
      <div className="container">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand as={Link} to="/home">
              <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Form className="d-flex w-50 ms-5">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button className="search-btn">Search</Button>
            </Form>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/destination">
                  Destination
                </Nav.Link>
                <NavDropdown title="Blog" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/blog">
                    Blog-1
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/blog">
                    Blog-2
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/blog">
                    Blog-3
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
