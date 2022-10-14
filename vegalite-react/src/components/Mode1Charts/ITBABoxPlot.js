import React from "react";
import { VegaLite } from "react-vega";
import { Handler } from "vega-tooltip";
import graduados from "./../../data/graduados-ITBA.csv";

const spec = {
  data: { url: graduados },
  width: 800,
  height: 600,
  mark: "boxplot",
  // para sacarle los promedios == 0
  // transform: [{ filter: "datum.promedio > 0" }],
  encoding: {
    y: {
      field: "titulo",
      type: "nominal",
      title: null,
      axis: {
        grid: false,
        titleFontSize: 16,
        labelFontSize: 16,
      },
    },
    x: {
      field: "promedio",
      type: "quantitative",
      title: null,
      axis: {
        grid: false,
        titleFontSize: 16,
        labelFontSize: 16,
      },
    },
    // color: {
    // //   legend: null,
    //   field: "titulo",
    //   type: "nominal",
    //   scale: {
    //     range: [
    //       "#00263d",
    //       "#8db7ff",
    //       "#0000FF",
    //       "#006400",
    //       "#006B54",
    //       "#008080",
    //       "#008B45",
    //       "#0099CC",
    //       "#00B2EE",
    //       "#00C78C",
    //       "#00CD66",
    //       "#00E5EE",
    //       "#00FF7F",
    //       "#5C246E",
    //       "#5B59BA",
    //       "#5D7B93",
    //       "#6600FF",
    //       "#660198",
    //       "#6666FF",
    //     ],
    //   },
    // },
  },
};

const ITBABoxPlot = () => {
  // Si quiero sacarle las acciones actions={false}
  return <VegaLite spec={spec} tooltip={new Handler().call} />;
};

export default ITBABoxPlot;
