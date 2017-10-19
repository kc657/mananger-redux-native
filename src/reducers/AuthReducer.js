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
  error: 'Login',
  loading: false
}

export default (state = initial_state, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.pa yload, error: 'Login'}
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, error: 'Login'}
    case LOGIN_USER:
      return { ...state, loading: true, error: 'Login'}
    case LOGIN_USER_SUCCESS:
      return { ...state, ...initial_state, user: action.payload, error:'Successfully Login!'}
    case LOGIN_USER_FAIL:
      return { ...state, loading: false, error: action.payload, password: ''}
    default:
      return state
  }
}
