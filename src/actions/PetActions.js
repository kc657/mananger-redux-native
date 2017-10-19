export const petCreate = ({ prop, value }) => {
  return {
    type: PET_CREAT,
    payload: { prop, value }
  }
}
