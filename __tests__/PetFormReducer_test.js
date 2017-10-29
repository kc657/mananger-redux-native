import reducer from '../src/reducers/PetFormReducer'
import * as types from '../src/actions/types'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        name: '',
        phone: '',
        checkupDate: '',
        weight: ''
      }
    )
  })
})
