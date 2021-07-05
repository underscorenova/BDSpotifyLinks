//META{"name":"SpotifyLinks"}*//

const { shell } = require("electron");

module.exports = class SpotifyLinks {
  getName() {
    return "SpotifyLinks";
  }
  getShortName() {
    return "SpotifyLinks";
  }
  getDescription() {
    return "Opens spotify links in spotify instead of webbrowser";
  }
  getVersion() {
    return "0.0.1";
  }
  getAuthor() {
    return "_nova#1337";
  }

  handleClick(e) {
    if (
      e.target.localName == "a" &&
      e.target.href.includes("open.spotify.com")
    ) {
      e.preventDefault();
      let url = e.target.href.split("/");
      shell.openExternal(`spotify://${url[3]}/${url[url.length - 1]}`, {
        activate: true,
      });
    } else if (
      e.target.parentElement &&
      e.target.parentElement.localName == "a" &&
      e.target.parentElement.href.includes("open.spotify.com")
    ) {
      e.preventDefault();
      let url = e.target.parentElement.href.split("/");
      shell.openExternal(`spotify://${url[3]}/${url[url.length - 1]}`, {
        activate: true,
      });
    }
  }

  start() {
    document.addEventListener("click", this.handleClick);
  }

  stop() {
    document.removeEventListener("click", this.handleClick);
  }
};
