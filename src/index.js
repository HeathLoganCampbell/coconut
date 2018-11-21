//Entry point
const { getResource } = require("./resource-manager.js");
const configs = getResource("configs.json");

console.log(configs.message);