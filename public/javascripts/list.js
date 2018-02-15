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