import React from "react";
import { VegaLite } from "react-vega";
import { Handler } from "vega-tooltip";
import stations from "./../../data/precios-en-surtidor.csv";

const spec = {
  data: { url: stations },
  width: 800,
  height: 600,
  mark: "bar",
  transform: [
    {
      aggregate: [{ op: "count", field: "provincia", as: "qty" }],
      groupby: ["provincia"],
    },
    {
      sort: [{ field: "qty", order: "descending" }],
    },
  ],
  encoding: {
    tooltip: [
      { field: "provincia", title: "Provincia", type: "ordinal" },
      { field: "qty", title: "Cantidad", type: "quantitative" },
    ],
    x: {
      field: "qty",
      type: "quantitative",
      title: "Cantidad de estaciones de servicio",
      axis: {
        grid: false,
        titleFontSize: 16,
        labelFontSize: 16,
      },
    },
    y: {
      sort: { field: "qty", order: "descending" },
      field: "provincia",
      type: "nominal",
      title: "Provincia",
      axis: {
        grid: false,
        titleFontSize: 16,
        labelFontSize: 16,
      },
    },
  },
};

const StateBar = () => {
  // Si quiero sacarle las acciones actions={false}
  return <VegaLite spec={spec} tooltip={new Handler().call} />;
};

export default StateBar;
