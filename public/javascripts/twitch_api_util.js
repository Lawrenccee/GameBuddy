import * as StreamList from './list';

export const requestData = ({ gameName = null, numResults = 20, clientId, authToken, graph1, graph2 }) => {
  let results = {};
  
  const streams = new XMLHttpRequest();

  if (gameName) {    
    // make name into a gameId
    let gameId = null;
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
        results["users"] = {};
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
          results.users[obj.user_id] = {};
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
              let userIds = Object.keys(results.users);

              const users = new XMLHttpRequest();
              users.open('GET', `https://api.twitch.tv/helix/users?id=${userIds.join('&id=')}`);
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

                    let gameData = Object.values(results.games);
                    graph1(gameData);

                    let viewerData = Object.values(results.streamData);
                    graph2(viewerData);

                    StreamList.makeStreamerList(Object.values(results.users));

                    console.log(results);
                    console.log(Object.values(results.users));
                  }
                } else {
                  console.log('Error: ' + users.status); // An error occurred during the request.
                }
              };
            }
          } else {
            console.log('Error: ' + games.status); // An error occurred during the request.
          }
        };
      }
    } else {
      console.log(`Error ${streams.status}`);
    }
  };
};