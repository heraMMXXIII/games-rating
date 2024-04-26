const config = require("./config");
const makeRatingFile = require("./rating-file");
const {createRating, updateRating} = require("./calculatons")
module.exports = {
  config,
  makeRatingFile,
  updateRating, 
  createRating
};
