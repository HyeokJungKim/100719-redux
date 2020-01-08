const initialState = {
  goats: [{id: 1, name: "Billy", tail_length: 100}],
  displayedGoat: {}
}

// return value of reducer becomes the new Redux state
const goatReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "ADD_GOAT":
    // do some logic here to change state
      let theSpreadedGoats = [...state.goats, action.payload]
      return {
        ...state,
        goats: theSpreadedGoats
      }

    case "REMOVE_ALL":
      return {
        ...state,
        goats: []
      }

    case "SET_GOATS":
      return {
        ...state,
        goats: action.payload
      }



    default:
      return state
  }
}

export default goatReducer
