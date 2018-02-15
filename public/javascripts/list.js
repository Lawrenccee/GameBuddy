export const makeStreamerList =  (users) => {
  const streamList = document.getElementById("stream-list");

  while (streamList.firstChild) {
    streamList.removeChild(streamList.firstChild);
  }

  users.forEach((user) => {
    if (user.login) {
      let li = document.createElement("li");
      let anchor = document.createElement("a");
      
      anchor.href = `https://twitch.tv/${user.login}`;      
      anchor.target = `_blank`;
      anchor.innerHTML = `${user.displayName}`;

      li.appendChild(anchor);
      streamList.appendChild(li);
    }
  });
};