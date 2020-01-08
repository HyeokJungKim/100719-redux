const initialState = {
  cakes: [{this: "is a cake"}]
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_ALL":
      return {
        ...state,
        cakes: []
      }

    default:
      return state
  }
}

export default cakeReducer
