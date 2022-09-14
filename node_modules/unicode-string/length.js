var multichars = require('multichar-regex')

module.exports = length

function length (string) {
  return string.replace(multichars, '•').length
}
