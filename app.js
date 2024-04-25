const staticFile = require("./appModules/http-utils/static-file.js");
const http = require("http");
const fs = require("fs");
const path = require("path");
const mimeTypes = require("./appModules/http-utils/mime-types.js");

const {
  defaultRouteController,
  voteRouteController,
  mainRouteController,
  gameRouteController,
} = require("./controllers");

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
      break;
    case "/game":
      gameRouteController(res);
      break;
    case "/vote":
      voteRouteController(req, res);
      break;
    default:
      defaultRouteController(res, url);
      break;
  }
});
server.listen(3005);
