var multichars = require('./matches')
var emoji = require('unicode-tr51/symbols')

emoji.forEach(function (emoj) {
  var ok = emoj.length === 1 || !!multichars(emoj).length
  if (!ok) console.error('failed on', emoj)
})
