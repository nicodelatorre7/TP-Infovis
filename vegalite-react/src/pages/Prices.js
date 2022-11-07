import React, { useState } from "react";
import { Container } from "reactstrap";
import { Button } from "react-bootstrap";
import StateBar from "../components/Mode2Charts/StateBar.js";
import CompanyBar from "../components/Mode2Charts/CompanyBar.js";

const Prices = () => {
  const [chart, setChart] = useState("");

  return (
    <React.Fragment>
      <div>
        <Container fluid>
          <h1>Precios en surtidores</h1>
          <br />
          <>
            <Button variant="primary" size="lg" active onClick={() => setChart("StateStationsBar")}>
              Estaciones por prov
            </Button>{" "}
            <Button variant="primary" size="lg" active onClick={() => setChart("CompanyBar")}>
              Empresa bandera
            </Button>{" "}
          </>
        </Container>
        <br />
        <br />
        {chart === "StateStationsBar" ? <StateBar /> : <></>}
        {chart === "CompanyBar" ? <CompanyBar /> : <></>}
      </div>
    </React.Fragment>
  );
};

export default Prices;
