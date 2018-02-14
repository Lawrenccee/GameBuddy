import * as TwitchApi from './twitch_api_util';
import * as Graph from './graph';

let results = TwitchApi.requestData({ 
  clientId: 'xs37hj3ec9i8585sig0axgc7u60t74', 
  authToken: '55e4vzxtb1gy43imdu9n3t9nwlir01',
  graph1: Graph.makeGamePieChart,
  graph2: Graph.makeViewerBubbleGraph,
  numResults: 20
});

// console.log(results);

// let gameData = Object.values(results.games);

// Graph.makeGameBarGraph(gameData);