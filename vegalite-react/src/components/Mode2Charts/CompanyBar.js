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
      aggregate: [{ op: "count", field: "empresabandera", as: "qty" }],
      groupby: ["empresabandera"],
    },
    {
      sort: [{ field: "qty", order: "descending" }],
    },
  ],
  encoding: {
    tooltip: [
      { field: "empresabandera", title: "Empresa", type: "ordinal" },
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
      field: "empresabandera",
      type: "nominal",
      title: "empresabandera",
      axis: {
        grid: false,
        titleFontSize: 16,
        labelFontSize: 16,
      },
    },
  },
};

const CompanyBar = () => {
  // Si quiero sacarle las acciones actions={false}
  return <VegaLite spec={spec} tooltip={new Handler().call} />;
};

export default CompanyBar;
