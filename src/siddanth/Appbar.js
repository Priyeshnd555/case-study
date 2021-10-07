import React from "react";
// import logo from "./logo.png";
// import { SearchIcon } from "@mui/icons-material/Search";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import "./Appbar.css";
// import Date1 from '@mui/icons-material'

function Appbars() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Link to="/" className="homeLink">
            {/* <img src={logo} id="image" alt="logo" /> */}TESTYANTRA
          </Link>

          {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link> */}

              <div id="droptech">
                <DropdownButton id="dropdown-basic-button" title="Technology">
                  <Dropdown.Item href="#/action-1">React JS</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Vue JS</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Angular</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Java</Dropdown.Item>
                  <Dropdown.Item href="#/action-3"> Mongo DB</Dropdown.Item>
                </DropdownButton>
              </div>

              <div id="droplevel">
                <DropdownButton id="dropdown-basic-button" title="Level">
                  <Dropdown.Item href="#/action-1">Easy</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Intermediate</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Expert</Dropdown.Item>
                </DropdownButton>
              </div>

              <div>
                <input type="date" placeholder="from date" class="cal" />
              </div>

              <div>
                <input type="date" placeholder="to date" class="cal" />
              </div>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <i className="fas fa-search" id="srchicon"></i>
              {/* <Button variant="outline-success">Search</Button> */}
              {/* <Button variant="warning">Search</Button> */}
              {/* <Button variant="secondary" size=" sm">Search</Button>{' '} */}
              <Button variant="primary" size="sm" id="button" onCli>
                <Link
                  to="/searchView"
                  className="aboutLink"
                  
                >
                  search
                </Link>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Appbars;
