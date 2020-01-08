// THUNKY STUFF

export const getAllGoats = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/goats")
    .then(r => r.json())
    .then(arrayOfGoats => {
      dispatch( {type: "SET_GOATS", payload:arrayOfGoats} )
    })
  }
}



// THUNKY STUFF
export const addGoat = (newGoat) => {
  return {
    type: "ADD_GOAT",
    payload: newGoat
  }
}

export const setGoats = (arrayOfGoats) => {
  return {
    type: "SET_GOATS",
    payload: arrayOfGoats
  }
}

export const removeAll = () => {
  return {
    type: "REMOVE_ALL"
  }
}
