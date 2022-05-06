"mode strict";

let axios = null;
let constants = null;

if (require("axios")) {
  axios = require("axios");
  constants = require("@/script/constants");

} else {
  constants = require("../script/constants");
}
