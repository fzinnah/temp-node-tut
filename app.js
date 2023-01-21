// npm - global command, comes with node
// npm --version

// local dependency - use it only in this partiuclar project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

//package.json - manifest file (stores importnt infor about project/package)
// manual approach (create package.json in the root, create properties etc.)
// npm initi (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
