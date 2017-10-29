import reducer from '../src/reducers/PetFormReducer'
import * as types from '../src/actions/types'

describe('Pet Form Reducer', () => {
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

  it('should handle PET_FORM_UPDATE for name input', () => {
    expect(
      reducer([], {
        type: types.PET_FORM_UPDATE,
        payload: { prop: 'name', value: 'Kevin Chen'}
      })
    ).toEqual(
      {
        name: 'Kevin Chen'
      }
    )
  })

  it('should handle PET_FORM_UPDATE for date input', () => {
    expect(
      reducer([], {
        type: types.PET_FORM_UPDATE,
        payload: { prop: 'calendar', value: 'Saturday'}
      })
    ).toEqual(
      {
        calendar: 'Saturday'
      }
    )
  })
})
