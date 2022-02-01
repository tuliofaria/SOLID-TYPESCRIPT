const Receive = require('./solid')

test('test some command about typescript', () =>{
  expect(Receive.Soma(42)).toBe(32)
})