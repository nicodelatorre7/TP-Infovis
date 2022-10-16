import React, { useState } from "react";
import { Container } from "reactstrap";
import { Button } from "react-bootstrap";
import ITBABar from "../components/Mode1Charts/ITBABar";
import ITBABoxPlot from "../components/Mode1Charts/ITBABoxPlot";
import MultiLine from "../components/Mode1Charts/MultiLine";

const Mode1 = () => {
  const [chart, setChart] = useState("");

  return (
    <React.Fragment>
      <div>
        <Container fluid>
          <h1>Graduados ITBA</h1>
          <br />
          <>
            <Button variant="primary" size="lg" active onClick={() => setChart("BarITBA")}>
              Bar
            </Button>{" "}
            <Button variant="primary" size="lg" active onClick={() => setChart("BoxPlotITBA")}>
              BoxPlot
            </Button>{" "}
            <Button variant="primary" size="lg" active onClick={() => setChart("MultiLineITBA")}>
              MultiLine
            </Button>{" "}
          </>
        </Container>
        <br />
        <br />
        {chart === "BarITBA" ? <ITBABar /> : <></>}
        {chart === "BoxPlotITBA" ? <ITBABoxPlot /> : <></>}
        {chart === "MultiLineITBA" ? <MultiLine /> : <></>}
      </div>
    </React.Fragment>
  );
};

export default Mode1;
