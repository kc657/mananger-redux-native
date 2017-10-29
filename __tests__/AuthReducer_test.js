import reducer from '../src/reducers/AuthReducer'
import * as types from '../src/actions/types'

describe('Auth Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        email: '',
        password: '',
        user: null,
        error: 'Login',
        loading: false
      }
    )
  })

  it('should handle EMAIL_CHANGED for email input', () => {
    expect(
      reducer([], {
        type: types.EMAIL_CHANGED,
        payload: 'test@test.com'
      })
    ).toEqual(
      {
        email: 'test@test.com',
        error: 'Login'
      }
    )
  })
})
