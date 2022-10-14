import React from "react";
import { VegaLite } from "react-vega";
import { Handler } from "vega-tooltip";
import graduados from "./../../data/graduados-ITBA.csv";

const spec = {
  description: "A simple bar chart with embedded data.",
  data: { url: graduados },
  width: 800,
  height: 600,
  mark: "bar",
  transform: [
    {
      aggregate: [{ op: "count", field: "titulo", as: "qty" }],
      groupby: ["titulo"],
    },
    {
      sort: [{ field: "qty", order: "descending" }],
    },
  ],
  encoding: {
    tooltip: [
      { field: "titulo", title: "Carrera", type: "ordinal" },
      { field: "qty", title: "Cantidad", type: "quantitative" },
    ],
    x: {
      field: "qty",
      type: "quantitative",
      title: null,
      axis: {
        grid: false,
        titleFontSize: 16,
        labelFontSize: 16,
      },
    },
    y: {
      sort: { field: "qty", order: "descending" },
      field: "titulo",
      type: "nominal",
      title: null,
      axis: {
        grid: false,
        titleFontSize: 16,
        labelFontSize: 16,
      },
    },
  },
};

const ITBABar = () => {
  // Si quiero sacarle las acciones actions={false}
  return <VegaLite spec={spec} tooltip={new Handler().call} />;
};

export default ITBABar;
