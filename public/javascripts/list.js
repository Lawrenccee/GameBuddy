export const makeStreamerList =  (users, userOrder) => {
  const streamList = document.getElementById("stream-list");

  while (streamList.firstChild) {
    streamList.removeChild(streamList.firstChild);
  }

  userOrder.forEach((userId) => {
    if (users[userId].login) {
      let li = document.createElement("li");
      let anchor = document.createElement("a");

      anchor.href = `https://twitch.tv/${users[userId].login}`;      
      anchor.target = `_blank`;
      anchor.innerHTML = `${users[userId].displayName}`;

      li.appendChild(anchor);
      streamList.appendChild(li);
    }
  });
};

export const makeGameOptions = (games, gameOrder) => {
  const gameOptions = document.getElementById("game-options");

  while (gameOptions.firstChild) {
    gameOptions.removeChild(gameOptions.firstChild);
  }

  let allStreams = document.createElement("option");

  allStreams.value = "all";
  allStreams.innerHTML = `--All Streams--`;
  allStreams.selected = "selected";

  gameOptions.appendChild(allStreams);

  gameOrder.forEach((gameId) => {
    let option = document.createElement("option");
    
    option.value = gameId;
    option.innerHTML = `${games[gameId].name}`;

    gameOptions.appendChild(option);
  });
};