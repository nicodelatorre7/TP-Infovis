import React from "react";
import { VegaLite } from "react-vega";
import { Handler } from "vega-tooltip";

const spec = {
  description: "A simple donut chart with embedded data.",
  mark: { type: "arc", innerRadius: 50 },
  padding: 20,
  encoding: {
    // Si quiero un tooltip agrego  esto:
    tooltip: [
      { field: "category", title: "category", type: "nominal" },
      { field: "value", title: "Total", type: "quantitative" },
    ],
    theta: { field: "value", type: "quantitative" },
    color: { field: "category", type: "nominal" },
  },
  data: { name: "values" }, // note: vega-lite data attribute is a plain object instead of an array
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

const Donut = () => {
  // Si quiero sacarle las acciones actions={false}
  return (
    <VegaLite
      spec={spec}
      data={donutData}
      actions={false}
      tooltip={new Handler().call}
    />
  );
};

export default Donut;
