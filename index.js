const reeta = require("reeta");
const chalk = require("chalk");

function existInArray(array, value) {
  var len = array.length;

  for (var i = 0; i < len; i++) {
    if (array[i] === value) {
      console.log(chalk.green("It exists"));
      return true;
    } else {
      console.log(chalk.red("It doesn't exists"));
      return false;
    }
  }
}

function unique(array) {
  reeta.uniqueValues(array);
}

module.exports = {
  existInArray,
  unique,
};
