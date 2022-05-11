//
// 1.take and input
// nodejs cli.js help -> print Help command executed
// nodejs cli.js tree -> print tree command executed
// nodejs cli.js organize -> print tree command executed
let helpObj = require("./commands/help.js");
let treeObj = require("./commands/tree");
let orgObj = require("./commands/organise");

let inputArr = process.argv.slice(2);
let command = inputArr[0];
let dirname = inputArr[1];

switch (command) {
  case "help":
    helpObj.helpFn();
    break;
  case "tree":
    treeObj.treeFn(dirname);
    break;
  case "organise":
    orgObj.organiseFn(dirname);
    break;
  case "default":
    console.log("wrong command type help commans to know more...");
    break;
}
