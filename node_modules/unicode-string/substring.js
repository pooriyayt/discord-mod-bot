var chars = require('./chars')
var max = Math.max

module.exports = substring

function substring (string, start, end) {
  end = isNaN(end) ? string.length - 1 : end
  var characters = chars(string).slice(
    max(0, end < start ? (start + (end - start)) : start),
    max(start, end)
  )
  return characters.join('')
}
