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

  it('should handle PASSWORD_CHANGED for password input', () => {
    expect(
      reducer([], {
        type: types.PASSWORD_CHANGED,
        payload: 'password123'
      })
    ).toEqual(
      {
        password: 'password123',
        error: 'Login'
      }
    )
  })

  it('should handle LOGIN_USER', () => {
    expect(
      reducer([], {
        type: types.LOGIN_USER
      })
    ).toEqual(
      {
        loading: true,
        error: 'Login'
      }
    )
  })

  it('should handle LOGIN_USER_SUCCESS', () => {
    expect(
      reducer([], {
        type: types.LOGIN_USER_SUCCESS,
        payload: {'user': 'user object from google firebase'}
      })
    ).toEqual(
      {
        email: '',
        password: '',
        user: {'user': 'user object from google firebase'},
        error: 'Successfully Login!',
        loading: false
      }
    )
  })
})
