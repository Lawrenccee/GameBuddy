import * as StreamList from './list';

export const requestData = ({ gameId = "all", numResults = 20, clientId, authToken, graph1, graph2 }) => {
  let results = {};
  
  const streams = new XMLHttpRequest();

  if (gameId !== "all") {    
    streams.open('GET', 
    `https://api.twitch.tv/helix/streams?first=${numResults}&game_id=${gameId}`);
  } else {
    streams.open('GET', 
    `https://api.twitch.tv/helix/streams?first=${numResults}`);
  }

  streams.responseType = 'json';
  streams.setRequestHeader('Client-ID', clientId);
  streams.setRequestHeader('Authorization', `Bearer ${authToken}`);
  streams.send(null);

  streams.onreadystatechange = () => {
    const DONE = 4;
    const OK = 200;
    if (streams.readyState === DONE) {
      if (streams.status === OK) {
        results["streamData"] = streams.response.data; 

        results["games"] = {};
        results["gameIds"] = [];
        results["users"] = {};
        results["userIds"] = [];
        results["viewerCounts"] = [];
        results["titles"] = [];

        results.streamData.forEach((obj) => {
          if (results.games[obj.game_id]) {
            results.games[obj.game_id]["count"] += 1;
          } else {
            results.games[obj.game_id] = {};
            results.games[obj.game_id]["count"] = 1;
            if (obj.game_id === "") {
              results.games[obj.game_id]["name"] = "Untitled";
            }
          }
          if (!results.gameIds.includes(obj.game_id)) {
            results.gameIds.push(obj.game_id);
          }
          results.users[obj.user_id] = {};
          if (!results.userIds.includes(obj.user_id)) {
            results.userIds.push(obj.user_id);
          }
          if (!results.viewerCounts.includes(obj.viewer_count)) {
            results.viewerCounts.push(obj.viewer_count);
          }
          if (!results.titles.includes(obj.title)) {
            results.titles.push(obj.title);
          }
        });

        // GAME DATA
        let gameIds = Object.keys(results.games);

        const games = new XMLHttpRequest();
        games.open('GET', `https://api.twitch.tv/helix/games?id=${gameIds.join('&id=')}`);
        games.responseType = 'json';
        games.setRequestHeader('Client-ID', `${clientId}`);
        games.setRequestHeader('Authorization', `Bearer ${authToken}`);
        games.send(null);

        games.onreadystatechange = function () {
          if (games.readyState === DONE) {
            if (games.status === OK) {
              games.response.data.forEach((game) => {
                results.games[game.id]["boxArtUrl"] = game.box_art_url;
                results.games[game.id]["name"] = game.name;
              });

              // USER DATA

              const users = new XMLHttpRequest();
              users.open('GET', `https://api.twitch.tv/helix/users?id=${results.userIds.join('&id=')}`);
              users.responseType = 'json';
              users.setRequestHeader('Client-ID', `${clientId}`);
              users.setRequestHeader('Authorization', `Bearer ${authToken}`);
              users.send(null);

              users.onreadystatechange = function () {
                if (users.readyState === DONE) {
                  if (users.status === OK) {
                    users.response.data.forEach((user) => {
                      results.users[user.id]["displayName"] = user.display_name;
                      results.users[user.id]["login"] = user.login;
                      results.users[user.id]["totalViews"] = user.view_count;
                      results.users[user.id]["profileImageUrl"] = user.profile_image_url;
                    });

                    let graph1Container = document.getElementById("graph1-container");                    
                    let graph2Element = document.getElementById("graph2");      
                    let gameArt = document.getElementById("game-art");          

                    StreamList.makeStreamerList(results.users, results.userIds);
                    if (gameId === "all") {
                      let gameData = Object.values(results.games);
                      gameArt.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Twitch_logo_%28wordmark_only%29.svg/1200px-Twitch_logo_%28wordmark_only%29.svg.png";
                      graph1Container.style.display = "flex";                      
                      graph1(gameData);
                      StreamList.makeGameOptions(results.games, results.gameIds);                      
                    } else {
                      let artSrc = Object.values(results.games)[0].boxArtUrl.replace('-{width}x{height}', '');
                      gameArt.src = artSrc;                      
                      graph1Container.style.display = "none";
                    }

                    let viewerData = Object.values(results.streamData);
                    graph2(viewerData, results.users);
                  }
                }
              };
            }
          }
        };
      }
    }
  };
};