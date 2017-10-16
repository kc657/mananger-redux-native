import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types'

const initial_state = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
}

export default (state = initial_state, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload}
    case LOGIN_USER:
      return { ...state, loading: true, error: ''}
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: ''}
    case LOGIN_USER_FAIL:
      return { ...state, loading: false, error: 'Authentication Failed.', password: ''}
    default:
      return state
  }
}
