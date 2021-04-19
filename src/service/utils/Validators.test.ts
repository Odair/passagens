import { validateBody } from './Validators'

describe('Suite tests of Validators', () => {
  it('Should return false if body is invalid', () => {
    const result = validateBody({ from: '', to: '', price: 0 })
    expect(result).toBeFalsy()
  })

  it('Should return true if body is valid', () => {
    const result = validateBody({ from: 'GRU', to: 'SCL', price: 15 })
    expect(result).toBeTruthy()
  })
})
