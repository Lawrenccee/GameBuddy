import * as d3 from "d3";

let svg = d3.select("body").append("svg")
  .attr("height", 500)
  .attr("width", 500);

let xScale = d3.scale.linear()
  .range([0, 500]);
let yScale = d3.scale.linear()
  .range([500, 0]);

// get data for x here

// xScale.domain(data.map(function(d) {  }))