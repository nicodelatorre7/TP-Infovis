import React, { useState } from "react";
import { Container } from "reactstrap";
import { Button } from "react-bootstrap";
import Bar from "../components/Mode2Charts/Bar.js";
import Donut from "../components/Mode2Charts/Donut.js";

const barData = {
  values: [
    { a: "A", b: 20 },
    { a: "B", b: 34 },
    { a: "C", b: 55 },
    { a: "D", b: 19 },
    { a: "E", b: 40 },
    { a: "F", b: 34 },
    { a: "G", b: 91 },
    { a: "H", b: 78 },
    { a: "I", b: 25 },
  ],
};

const donutData = {
  values: [
    { category: 1, value: 4 },
    { category: 2, value: 6 },
    { category: 3, value: 10 },
    { category: 4, value: 3 },
    { category: 5, value: 7 },
    { category: 6, value: 8 },
  ],
};

const Mode2 = () => {
  const [chart, setChart] = useState("");

  return (
    <React.Fragment>
      <div>
        <Container fluid>
          <h1>Mode2</h1>
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
        {chart === "Bar" ? <Bar data={barData} /> : <></>}
        {chart === "Donut" ? <Donut data={donutData} /> : <></>}
      </div>
    </React.Fragment>
  );
};

export default Mode2;
