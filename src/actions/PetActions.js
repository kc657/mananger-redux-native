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
  console.log(name, phone, shift);
}
