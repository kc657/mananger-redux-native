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

  it('should handle PET_FORM_UPDATE for weight input', () => {
    expect(
      reducer([], {
        type: types.PET_FORM_UPDATE,
        payload: { prop: 'weight', value: '800'}
      })
    ).toEqual(
      {
        weight: '800'
      }
    )
  })

  it('should handle PET_FORM_CREATE', () => {
    expect(
      reducer([], {
        type: types.PET_FORM_CREATE
      })
    ).toEqual(
      {
        name: '',
        phone: '',
        checkupDate: '',
        weight: ''
      }
    )
  })

  it('should handle PET_UPDATE_SAVE', () => {
    expect(
      reducer([], {
        type: types.PET_UPDATE_SAVE
      })
    ).toEqual(
      {
        name: '',
        phone: '',
        checkupDate: '',
        weight: ''
      }
    )
  })
})
