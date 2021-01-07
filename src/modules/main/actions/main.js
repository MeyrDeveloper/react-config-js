import * as constants from '../contstants/main'

export const tick = () => async (dispatch) => {
  dispatch({
    type: constants.TICK,
    payload: 22
  })
}
