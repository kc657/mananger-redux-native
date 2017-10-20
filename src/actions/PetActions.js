import firebase from 'firebase'
import {
  PET_FORM_UPDATE
} from './types'

export const petFormUpdate = ({ prop, value }) => {
  return {
    type: PET_FORM_UPDATE,
    payload: { prop, value }
  }
}

export const petFormSave = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth()
  firebase.database().ref(`/users/${currentUser.uid}/pets`)
    .push({ name, phone, shift })
}
