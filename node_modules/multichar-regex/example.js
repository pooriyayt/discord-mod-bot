var multichars = require('./matches')
var zalgo = require('to-zalgo')
var banish = require('to-zalgo/banish')

var strings = [
  'oh hi, doggy 🐶 this is the sun: ☀️',
  'oh canada 🇨🇦',
  'weird boxed number bullshit: 0️⃣',
  'this is the sun: ☀️',
  zalgo('the end is near')
]

strings.forEach(function (string) {
  multichars(string).forEach(function (ch) {
    ch.value = banish(ch.value)
    console.log(ch)
  })
})
