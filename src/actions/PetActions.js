import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
  PET_FORM_UPDATE,
  PET_FORM_CREATE
} from './types'

export const petFormUpdate = ({ prop, value }) => {
  return {
    type: PET_FORM_UPDATE,
    payload: { prop, value }
  }
}

export const petFormSave = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/pets`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({
          type: PET_FORM_CREATE
        })
        Actions.main({ type: 'reset' })
      })
  }
}
