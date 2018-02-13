import * as d3 from "d3";

// pass in games as object.values
export const makeGameBarGraph = (data) => {
  let dims = d3.select("#graph1").node().getBoundingClientRect();
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
    .tickSize(-height);

  svg.insert("g", ":first-child")
    .attr("transform", `translate(${labelWidth + margin}, ${height})`)
    .attr("class", "ticks")
    .call(xAxis);
};

export const makeViewerPieChart = (data) => {
  let dims = d3.select("#graph2").node().getBoundingClientRect();
  let height = dims.height;
  let width = dims.width;
  let radius = Math.min(height, width) / 2;
  let innerRadius = 0;
  let color = d3.scaleOrdinal(d3.schemeCategory20b);

  let svg = d3.select("#graph2")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  let arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(radius);

  let pie = d3.pie()
    .value(function(d) { return d.viewer_count; })
    .sort(null);

  let path = svg.selectAll("path")
    .data(pie(data))
    .enter()
    .append("path")
    .attr("d", arc)
    .attr("fill", function(d, i) {
      return color(d.title);
    });
};