module.exports = function() {
  var helpers = {};

  helpers.someFunction = function() {
    console.log('this is user helper');
  }

  return helpers;
}