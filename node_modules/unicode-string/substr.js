var chars = require('./chars')

module.exports = substr

function substr (string, start, length) {
  length = isNaN(length) ? string.length : length
  var characters = chars(string).slice(start, start + length)
  return length < 0 ? '' : characters.join('')
}
