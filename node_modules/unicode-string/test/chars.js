var test = require('tape')
var banish = require('to-zalgo/banish')
var chars = require('../chars')
var f = require('./fixtures')

test('chars works', function (assert) {
  assert.ok(
    chars(f.darkness).length === 9 &&
    f.darkness.split('').length > 9,
    'should be ok'
  )

  assert.ok(
    chars(f.beast).length === 28 &&
    f.beast.split('').length === 34,
    'should be ok'
  )

  assert.ok(
    chars(f.hell).length === 40 &&
    f.hell.split('').length === 43,
    'should be ok'
  )

  assert.end()
})
