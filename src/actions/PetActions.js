import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
  PET_FORM_UPDATE,
  PET_FORM_CREATE,
  PET_FETCH_SUCCESS,
  PET_UPDATE_SAVE
} from './types'

export const petFormSave = ({ name, phone, checkupDate }) => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/pets`)
      .push({ name, phone, checkupDate })
      .then(() => {
        dispatch({
          type: PET_FORM_CREATE
        })
        Actions.main({ type: 'reset' })
      })
  }
}

export const petFormUpdate = ({ prop, value }) => {
  return {
    type: PET_FORM_UPDATE,
    payload: { prop, value }
  }
}

export const petUpdateSave = ({ name, phone, checkupDate, uid }) => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/pets/${uid}`)
      .set({ name, phone, checkupDate })
      .then(() => {
        dispatch({
          type: PET_UPDATE_SAVE
        })
        Actions.main({ type: 'reset' })
      })
  }
}

export const petFetch = () => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/pets`)
      .on('value', snapshot => {
        dispatch({
          type: PET_FETCH_SUCCESS,
          payload: snapshot.val()
        })
      })
  }
}

export const petDelete = ({ uid }) => {
  const { currentUser } = firebase.auth()
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/pets/${uid}`)
      .remove()
      .then(() => {
        Actions.main({ type: 'reset' })
      })
  }
}
