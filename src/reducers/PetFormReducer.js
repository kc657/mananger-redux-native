import {
  PET_CREATE
} from '../actions/types'

const initial_state = {
  name: '',
  phone: '',
  shift: ''
}

export default (state = initial_state, action) => {
  switch (action.type) {
    case PET_CREATE:
    // action.payload === { prop: 'name', value: 'zeus'}
    // use key interpolation
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state
  }
}
