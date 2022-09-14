var multichar = require('./index')

module.exports = function (string) {
  var matches = {}
  var match 
  while (match = multichar.exec(string)) {
    matches[match.index] = match[0]
  }
  return matches
}
