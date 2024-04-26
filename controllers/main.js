const path = require("path");
const staticFile = require("../appModules/http-utils/static-file");
const mimeTypes = require("../appModules/http-utils/mime-types");
const { getData, endpoints } = require("../appModules/api");
const { config, makeRatingFile } = require("../appModules/rating");

async function mainRouteController(res, publicUrl, extname) {
  const data = await getData(endpoints.games);
  await makeRatingFile(config.PATH_TO_RATING_FILE, data);
  res.statusCode = 200;
  staticFile(res, publicUrl, extname);
}

module.exports = mainRouteController;
