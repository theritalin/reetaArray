const reeta = require("reeta");



function existInArray(array, value) {
  var len = array.length;

  for (var i = 0; i < len; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

function unique(array) {
  reeta.uniqueValues(array);
}



module.exports = {
  existInArray,
  unique,
};
