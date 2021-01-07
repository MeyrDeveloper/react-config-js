import {createReducer} from 'utils'
import * as constants from '../contstants/main'

export const initialState = {
  some: null
}

export default createReducer(initialState, {
  [constants.TICK]: (state, {payload}) => {
    return {
      ...state,
      some: payload
    }
  }
})
