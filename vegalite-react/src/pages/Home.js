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
            <Button variant="primary" size="lg" active href="/itba">
              Graduados ITBA
            </Button>{" "}
            <Button variant="primary" size="lg" active href="/prices">
              Precios en surtidores
            </Button>
          </>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Home;
