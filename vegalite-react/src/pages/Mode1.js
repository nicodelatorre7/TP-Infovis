import React, { useState } from "react";
import { Container } from "reactstrap";
import { Button } from "react-bootstrap";
import Bar from "../components/Mode1Charts/Bar";
import Donut from "../components/Mode1Charts/Donut";

const Mode1 = () => {
  const [chart, setChart] = useState("");

  return (
    <React.Fragment>
      <div>
        <Container fluid>
          <h1>Mode 1</h1>
          <br />
          <>
            <Button
              variant="primary"
              size="lg"
              active
              onClick={() => setChart("Bar")}
            >
              Bar
            </Button>{" "}
            <Button
              variant="primary"
              size="lg"
              active
              onClick={() => setChart("Donut")}
            >
              Donut
            </Button>
          </>
        </Container>
        <br />
        <br />
        {chart === "Bar" ? <Bar /> : <></>}
        {chart === "Donut" ? <Donut /> : <></>}
      </div>
    </React.Fragment>
  );
};

export default Mode1;
