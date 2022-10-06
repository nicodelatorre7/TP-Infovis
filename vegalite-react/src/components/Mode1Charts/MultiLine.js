import React from "react";
import { VegaLite } from "react-vega";
import { Handler } from "vega-tooltip";
import graduados from "./../../data/graduados_data.csv";

const spec = {
  padding: 20,
  width: 800,
  height: 600,
  data: { url: graduados },
  encoding: {
    x: {
      field: "año",
      type: "temporal",
      title: "Año",
      axis: {
        grid: false,
        titleFontSize: 16,
        labelFontSize: 16,
      },
    },
    y: {
      field: "cantidad",
      type: "quantitative",
      title: "Cantidad",
      axis: {
        grid: false,
        titleFontSize: 16,
        labelFontSize: 16,
      },
    },
    color: {
      condition: {
        param: "hover",
        field: "carrera",
        type: "nominal",
        legend: null,
      },
      value: "grey",
    },
    opacity: {
      condition: {
        param: "hover",
        value: 1,
      },
      value: 0.2,
    },
  },
  layer: [
    {
      description: "transparent layer to make it easier to trigger selection",
      params: [
        {
          name: "hover",
          value: [{ carrera: "Ingeniero en Informática" }],
          select: {
            type: "point",
            fields: ["carrera"],
            on: "mouseover",
          },
        },
      ],
      mark: { type: "line", strokeWidth: 8, stroke: "transparent" },
    },
    {
      mark: "line",
    },
    {
      encoding: {
        x: { aggregate: "max", field: "año" },
        y: { aggregate: { argmax: "año" }, field: "cantidad" },
      },
      layer: [
        {
          mark: { type: "circle" },
        },
        {
          mark: { type: "text", align: "left", dx: 4 },
          encoding: { text: { field: "carrera", type: "nominal" } },
        },
      ],
    },
  ],
  config: { view: { stroke: null } },
};

const MultiLine = () => {
  // Si quiero sacarle las acciones actions={false}
  return <VegaLite spec={spec} tooltip={new Handler().call} />;
};

export default MultiLine;
