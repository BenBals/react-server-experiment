jest.dontMock('../redux/counter.jsx');

describe('counter', function() {
 it('returns the expected result for \'INCREMENT\', \'DECREMENT\' and a wrong value', function() {
   var counter = require('../redux/counter.jsx')
   expect(counter(1, {type: 'INCREMENT'})).toBe(2)
   expect(counter(1, {type: 'DECREMENT'})).toBe(0)
   expect(counter(1, {type: 'TEHTNSOEI'})).toBe(1)
 })
})
