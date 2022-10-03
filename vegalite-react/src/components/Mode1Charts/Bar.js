import React from "react";
import { VegaLite } from "react-vega";
import { Handler } from "vega-tooltip";

const spec = {
  description: "A simple bar chart with embedded data.",
  mark: "bar",
  padding: 20,
  encoding: {
    // Si quiero un tooltip agrego  esto:
    // tooltip: [{ field: "a", title: "TOOLTIP", type: "ordinal" }],
    x: { field: "a", type: "ordinal" },
    y: { field: "b", type: "quantitative" },
  },
  data: { name: "values" }, // note: vega-lite data attribute is a plain object instead of an array
};

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

const Bar = () => {
  // Si quiero sacarle las acciones actions={false}
  return <VegaLite spec={spec} data={barData} tooltip={new Handler().call} />;
};

export default Bar;
