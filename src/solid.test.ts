import { Libraries } from './solid'

test('Libraries class' , () =>{
  const libraries = new Libraries('Spell book')
  expect(libraries.nomebook).toBe('Spell book')
})