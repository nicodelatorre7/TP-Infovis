import { createClassFromLiteSpec } from "react-vega-lite";

export default createClassFromLiteSpec("DonutChart", {
  description: "A simple donut chart with embedded data.",
  padding: 20,
  mark: { type: "arc", innerRadius: 50 },
  encoding: {
    // Si quiero un tooltip agrego  esto:
    tooltip: [
      { field: "category", title: "category", type: "nominal" },
      { field: "value", title: "Total", type: "quantitative" },
    ],
    theta: { field: "value", type: "quantitative" },
    color: { field: "category", type: "nominal" },
  },
});
