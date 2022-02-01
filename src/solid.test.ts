const Receive = require('./solid')

test('class' , () =>{
  expect(Receive.Libraries(String)).toBe(String)
})