module.exports = { };

module.exports.luminosity = function () {
  var r = arguments[0];
  var g = arguments[1];
  var b = arguments[2];

  var luminosity = 0.2126*r + 0.7152*g + 0.0722*b;
  return luminosity;
};

module.exports.darken = function () {
  var darker = .8
  var r = (arguments[0]*darker).toFixed(1);
  var g = (arguments[1]*darker).toFixed(1);
  var b = (arguments[2]*darker).toFixed(1);

  var luminosity = [r,g,b];
  return luminosity;
};
