import {
  PET_FORM_UPDATE,
  PET_FORM_CREATE
} from '../actions/types'

const initial_state = {
  name: '',
  phone: '',
  shift: ''
}

export default (state = initial_state, action) => {
  switch (action.type) {
    case PET_FORM_UPDATE:
    // action.payload === { prop: 'name', value: 'zeus'}
    // use key interpolation
      return { ...state, [action.payload.prop]: action.payload.value }
    case PET_FORM_CREATE:
      return initial_state
    default:
      return state
  }
}
