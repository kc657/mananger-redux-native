import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import PetFormReducer from './PetFormReducer'

export default combineReducers({
  auth: AuthReducer,
  petForm: PetFormReducer

})
// auth state is controlled by our AuthReducer
