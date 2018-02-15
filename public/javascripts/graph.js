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
  let color = d3.scaleOrdinal(d3.schemeCategory20b);

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
    })
    .attr("fill", function(d, i) { return color(i); });

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

  let tooltip = d3.select("#graph1")
    .append("div")
    .attr("class", "tooltip");

  tooltip.append("div")
    .attr("class", "name");

  tooltip.append("div")
    .attr("class", "count");

  tooltip.append("div")
    .attr("class", "percent");

  bar.on("mouseover", function (d) {
    let totalCounts = d3.sum(data.map(function (dataObj) {
      return dataObj.count;
    }));

    let percent = Math.round(1000 * d.count / totalCounts) / 10;
    tooltip.select(".name").html(d.name);
    tooltip.select(".count").html(d.count);
    tooltip.select(".percent").html(`${percent}%`);
    tooltip.style("display", "block");
  });

  bar.on("mouseout", function (d) {
    tooltip.style("display", "none");
  });

  bar.on("mousemove", function (d) {
    tooltip.style("top", (d3.event.layerY + 10) + "px")
      .style("left", (d3.event.layerX + 10) + "px");
  });
};

export const makeGamePieChart = (data) => {
  let dims = d3.select("#graph2").node().getBoundingClientRect();
  let height = dims.height;
  let width = dims.width;
  let radius = Math.min(height, width) / 2;
  let innerRadius = radius / 2;
  let color = d3.scaleOrdinal(d3.schemeCategory20b);

  let svg = d3.select("#graph1")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  let arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(radius);

  let pie = d3.pie()
    .value(function (d) { return d.count; })
    .sort(null);

  let path = svg.selectAll("path")
    .data(pie(data))
    .enter()
    .append("path")
    .attr("d", arc)
    .attr("fill", function (d, i) {
      return color(i);
    });

  let tooltip = d3.select("#graph1")
    .append("div")
    .attr("class", "tooltip");

  tooltip.append("div")
    .attr("class", "name");

  tooltip.append("div")
    .attr("class", "count");

  tooltip.append("div")
    .attr("class", "percent");

  path.on("mouseover", function (d) {
    let totalCounts = d3.sum(data.map(function (dataObj) {
      return dataObj.count;
    }));

    let percent = Math.round(1000 * d.data.count / totalCounts) / 10;
    tooltip.select(".name").html(d.data.name);
    tooltip.select(".count").html(d.data.count);
    tooltip.select(".percent").html(`${percent}%`);
    tooltip.style("display", "block");
  });

  path.on("mouseout", function (d) {
    tooltip.style("display", "none");
  });

  path.on("mousemove", function (d) {
    tooltip.style("top", (d3.event.layerY + 10) + "px")
      .style("left", (d3.event.layerX + 10) + "px");
  });
};

export const makeGameBubbleGraph = (data) => {
  let dims = d3.select("#graph1").node().getBoundingClientRect();
  let height = dims.height;
  let width = dims.width;
  let labelWidth = 0;
  let margin = 20;
  let color = d3.scaleOrdinal(d3.schemeCategory20b);

  let svg = d3.select("#graph1").append("svg")
    .attr("height", height + margin)
    .attr("width", width + margin);

  let bubble = d3.pack({ children: data })
    .size([width, height])
    .padding(1.5);

  let nodes = d3.hierarchy({ children: data })
    .sum(function (d) { return d.count; });

  let bubbles = svg.selectAll(".bubble")
    .attr("transform", "translate(0,0)")
    .data(bubble(nodes).descendants())
    .enter()
    .filter(function (d) {
      return !d.children;
    })
    .append("g");

  bubbles.append("circle")
    .attr("class", "bubble")
    .attr("cx", function (d) { return d.x; })
    .attr("cy", function (d) { return d.y; })
    .attr("r", function (d) { return d.r; })
    .attr("fill", function (d, i) { return color(i); });

  let tooltip = d3.select("#graph1")
    .append("div")
    .attr("class", "tooltip");

  tooltip.append("div")
    .attr("class", "name");

  tooltip.append("div")
    .attr("class", "count");

  tooltip.append("div")
    .attr("class", "percent");

  bubbles.on("mouseover", function (d) {
    let totalCounts = d3.sum(data.map(function (dataObj) {
      return dataObj.count;
    }));

    let percent = Math.round(1000 * d.data.count / totalCounts) / 10;
    tooltip.select(".name").html(d.data.name);
    tooltip.select(".count").html(d.data.count);
    tooltip.select(".percent").html(`${percent}%`);
    tooltip.style("display", "block");
  });

  bubbles.on("mouseout", function (d) {
    tooltip.style("display", "none");
  });

  bubbles.on("mousemove", function (d) {
    tooltip.style("top", (d3.event.layerY + 10) + "px")
      .style("left", (d3.event.layerX + 10) + "px");
  });
};

export const makeViewerPieChart = (data) => {
  let dims = d3.select("#graph2").node().getBoundingClientRect();
  let height = dims.height;
  let width = dims.width;
  let radius = Math.min(height, width) / 2;
  let innerRadius = radius / 2;
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
      return color(i);
    });

  let tooltip = d3.select("#graph2")
    .append("div")
    .attr("class", "tooltip");

  tooltip.append("div")
    .attr("class", "title");

  tooltip.append("div")
    .attr("class", "viewer-count");

  tooltip.append("div")
    .attr("class", "percent");

  path.on("mouseover", function (d) {
    let totalViews = d3.sum(data.map(function (dataObj) {
      return dataObj.viewer_count;
    }));

    let percent = Math.round(1000 * d.data.viewer_count / totalViews) / 10;
    tooltip.select(".title").html(d.data.title);
    tooltip.select(".viewer-count").html(d.data.viewer_count);
    tooltip.select(".percent").html(`${percent}%`);
    tooltip.style("display", "block");
  });

  path.on("mouseout", function (d) {
    tooltip.style("display", "none");
  });

  path.on("mousemove", function (d) {
    tooltip.style("top", (d3.event.layerY + 10) + "px")
      .style("left", (d3.event.layerX + 10) + "px");
  });
};

export const makeViewerBarGraph = (data) => {
  let dims = d3.select("#graph2").node().getBoundingClientRect();
  let height = dims.height;
  let width = dims.width;
  let barHeight = height * 0.7 / data.length;
  let barPadding = height * 0.3 / data.length;
  let labelWidth = 0;
  let margin = 20;
  let color = d3.scaleOrdinal(d3.schemeCategory20b);  

  let svg = d3.select("#graph2").append("svg")
    .attr("height", height + margin)
    .attr("width", width + margin);

  let bar = svg.selectAll("g")
    .data(data)
    .enter()
    .append("g");

  bar.attr("class", "bar")
    .attr("cx", 0)
    .attr("transform", function (d, i) {
      return `translate(0, ${i * (barHeight + barPadding) + barPadding})`;
    })
    .attr("fill", function (d, i) { return color(i); });

  let scale = d3.scaleLinear()
    .domain([0, d3.max(data, function (d) { return d.viewer_count / 1000; })])
    .range([0, width - labelWidth - margin * 2]);

  bar.append("rect")
    .attr("transform", `translate(${labelWidth + margin}, 0)`)
    .attr("height", barHeight)
    .attr("width", function (d) {
      return scale(d.viewer_count / 1000);
    });

  let xAxis = d3.axisBottom(scale)
    .tickSize(-height);

  svg.insert("g", ":first-child")
    .attr("transform", `translate(${labelWidth + margin}, ${height})`)
    .attr("class", "ticks")
    .call(xAxis);

  let tooltip = d3.select("#graph2")
    .append("div")
    .attr("class", "tooltip");

  tooltip.append("div")
    .attr("class", "title");

  tooltip.append("div")
    .attr("class", "viewer-count");

  tooltip.append("div")
    .attr("class", "percent");

  bar.on("mouseover", function (d) {
    let totalViews = d3.sum(data.map(function (dataObj) {
      return dataObj.viewer_count;
    }));

    let percent = Math.round(1000 * d.viewer_count / totalViews) / 10;
    tooltip.select(".title").html(d.title);
    tooltip.select(".viewer-count").html(d.viewer_count);
    tooltip.select(".percent").html(`${percent}%`);
    tooltip.style("display", "block");
  });

  bar.on("mouseout", function (d) {
    tooltip.style("display", "none");
  });

  bar.on("mousemove", function (d) {
    tooltip.style("top", (d3.event.layerY + 10) + "px")
      .style("left", (d3.event.layerX + 10) + "px");
  });
};

export const makeViewerBubbleGraph = (data) => {
  let dims = d3.select("#graph2").node().getBoundingClientRect();
  let height = dims.height;
  let width = dims.width;
  let labelWidth = 0;
  let margin = 20;
  let color = d3.scaleOrdinal(d3.schemeCategory20b);

  let svg = d3.select("#graph2").append("svg")
    .attr("height", height + margin)
    .attr("width", width + margin);

  let bubble = d3.pack({ children: data })
    .size([width, height])
    .padding(1.5);

  let nodes = d3.hierarchy({children: data})
    .sum(function (d) { return d.viewer_count; });

  let bubbles = svg.selectAll(".bubble")
    .attr("transform", "translate(0,0)")
    .data(bubble(nodes).descendants())
    .enter()
    .filter(function (d) {
      return !d.children;
    })
    .append("g");

  bubbles.append("circle")
    .attr("class", "bubble")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", function(d) { return d.r; })
    .attr("fill", function(d, i) { return color(i); });

  let tooltip = d3.select("#graph2")
    .append("div")
    .attr("class", "tooltip");

  tooltip.append("div")
    .attr("class", "title");

  tooltip.append("div")
    .attr("class", "viewer-count");

  tooltip.append("div")
    .attr("class", "percent");

  bubbles.on("mouseover", function (d) {
    let totalViews = d3.sum(data.map(function (dataObj) {
      return dataObj.viewer_count;
    }));

    let percent = Math.round(1000 * d.data.viewer_count / totalViews) / 10;
    tooltip.select(".title").html(d.data.title);
    tooltip.select(".viewer-count").html(d.data.viewer_count);
    tooltip.select(".percent").html(`${percent}%`);
    tooltip.style("display", "block");
  });

  bubbles.on("mouseout", function (d) {
    tooltip.style("display", "none");
  });

  bubbles.on("mousemove", function (d) {
    tooltip.style("top", (d3.event.layerY + 10) + "px")
      .style("left", (d3.event.layerX + 10) + "px");
  });
};