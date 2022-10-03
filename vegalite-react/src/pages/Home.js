import React from "react";
import { Container } from "reactstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./../logo.svg";

const Home = () => {
  return (
    <React.Fragment>
      <div className="App">
        <Container fluid>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>ReactJs - Vega / VegaLite Demo</h1>
          <>
            <Button variant="primary" size="lg" active href="/mode1">
              MODE 1
            </Button>{" "}
            <Button variant="primary" size="lg" active href="/mode2">
              MODE 2
            </Button>
          </>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Home;
