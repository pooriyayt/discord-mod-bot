var multichars = require('multichar-regex')
var sub = '•'

module.exports = chars

function chars (string) {
  var characters = string
    .replace(multichars, sub)
    .split('')

  var m
  var ri = 0
  while (m = multichars.exec(string)) {
    m.index -= ri
    ri += m[0].length - 1
    characters.splice(m.index, 1, m[0])
  }

  return characters
}
