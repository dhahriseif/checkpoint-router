import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ReactStars from "react-stars";

function Navbar1({setSearch,setRate,rate}) {
  function filter(e) {
    setSearch(e.target.value);
  }

  const ratingChanged = (newRating) => {
    setRate(newRating);
  };
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">TuniBesT</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Button variant="outline-warning" onClick={() => {setRate(0)}}>Reset</Button>
            <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              onChange={ratingChanged}
              half={false}
              value={rate}
            />
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={filter}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar1;
