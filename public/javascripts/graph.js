import * as d3 from "d3";

// pass in games as object.values
export const makeGameBarGraph = (data) => {
  let dims = d3.select("#graph1").node().getBoundingClientRect();
  console.log(dims);
  let height = dims.height;
  let width = dims.width;
  let barHeight = height * 0.7 / data.length;
  let barPadding = height * 0.3 / data.length;
  let labelWidth = 0;
  let margin = 20;

  let svg = d3.select("#graph1").append("svg")
    .attr("height", height + margin)
    .attr("width", width + margin);

  let bar = svg.selectAll("g")
    .data(data)
    .enter()
    .append("g");

  bar.attr("class", "bar")
    .attr("cx", 0)
    .attr("transform", function(d, i) {
      return `translate(0, ${i * (barHeight + barPadding) + barPadding})`;
    });

  bar.append("text")
    .attr("class", "game-name")
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) { 
      return d.name; 
    }).each(function() {
      labelWidth = Math.ceil(Math.max(labelWidth, this.getBBox().width));
    });

  let scale = d3.scaleLinear()
    .domain([0, d3.max(data, function (d) { return d.count; })])
    .range([0, width - labelWidth - margin * 2]);

  bar.append("rect")
    .attr("transform", `translate(${labelWidth + margin}, 0)`)
    .attr("height", barHeight)
    .attr("width", function (d) {
      return scale(d.count);
    });

  let xAxis = d3.axisBottom(scale)
    .tickSize(-height + margin / 2);

  svg.insert("g", ":first-child")
    .attr("transform", `translate(${labelWidth + margin}, ${height})`)
    .attr("class", "ticks")
    .call(xAxis);
};

export const makeGamePieChart = (data) => {
  let height = 500;
  let width = 700;
};