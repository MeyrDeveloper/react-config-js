export const createReducer = (
  initialState,
  reducers,
) => (state = initialState, action) => {
  const handler = reducers[action.type]
  const newState = handler ? handler(state, action) : state

  return newState
}
