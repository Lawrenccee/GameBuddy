import * as TwitchApi from './twitch_api_util';
import * as Graph from './graph';

document.addEventListener("DOMContentLoaded", () => {
  let results = TwitchApi.requestData({
    clientId: 'xs37hj3ec9i8585sig0axgc7u60t74',
    authToken: '55e4vzxtb1gy43imdu9n3t9nwlir01',
    graph1: Graph.makeGamePieChart,
    graph2: Graph.makeViewerBubbleGraph,
    numResults: 100 // put zero it breaks ahh
  });

  let queryForm = document.getElementById("query-form");
  queryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = {};

    let formData = new FormData(queryForm);
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    let graph1;
    let graph2;

    switch (data["graph1"]) {
      case "bar":
        graph1 = Graph.makeGameBarGraph;
        break;
      case "pie":
        graph1 = Graph.makeGamePieChart;
        break;
      case "bubble":
        graph1 = Graph.makeGameBubbleGraph;
        break;
    }

    switch (data["graph2"]) {
      case "bar":
        graph2 = Graph.makeViewerBarGraph;
        break;
      case "pie":
        graph2 = Graph.makeViewerPieChart;
        break;
      case "bubble":
        graph2 = Graph.makeViewerBubbleGraph;
        break;
    }

    const graph1Div = document.getElementById("graph1");
    const graph2Div = document.getElementById("graph2");

    while (graph1Div.firstChild) {
      graph1Div.removeChild(graph1Div.firstChild);
    }

    while (graph2Div.firstChild) {
      graph2Div.removeChild(graph2Div.firstChild);
    }

    TwitchApi.requestData({
      clientId: 'xs37hj3ec9i8585sig0axgc7u60t74',
      authToken: '55e4vzxtb1gy43imdu9n3t9nwlir01',
      graph1: graph1,
      graph2: graph2,
      gameId: data["gameId"],
      numResults: data["numResults"], // put zero it breaks ahh
    });
  });
});