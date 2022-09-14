var test = require('tape')
var length = require('../length')
var f = require('./fixtures')

test('length works', function (assert) {
  assert.ok(length(f.darkness) === 9 && f.darkness.length > 9, 'should be ok')
  assert.ok(length(f.beast) === 28 && f.beast.length === 34, 'should be ok')
  assert.ok(length(f.hell) === 40 && f.hell.length === 43, 'should be ok')
  assert.end()
})
