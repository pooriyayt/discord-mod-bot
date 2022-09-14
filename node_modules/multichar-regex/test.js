var test = require('tape')
var symbols = require('unicode-tr51/symbols')
var zalgo = require('to-zalgo')
var multichar = require('./index')
var match = require('./matches')

test('it matches combining marks', function (assert) {
  assert.ok(zalgo('it matches').match(multichar), 'it does')
  assert.end()
})

test('it matches all multi-character emoji', function (assert) {
  var emoji = symbols.filter(function (e) {
    return e.length > 1
  })

  assert.plan(emoji.length)
  emoji.forEach(function (e) {
    assert.ok(e.match(multichar), e)
  })
})

test('the matches function works', function (assert) {
  var matches = match('oh hi doggy 🐶, are you from 🇨🇦?')
  assert.deepEqual(matches, {
    12: '🐶',
    29: '🇨🇦'
  }, 'it does')
  assert.end()
})
