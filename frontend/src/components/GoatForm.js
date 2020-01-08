import React, { Component } from 'react';
import { connect } from 'react-redux';

// ACTION CREATOR
import { addGoat } from '../redux/actions'


class GoatForm extends Component {

  state={
    name: "",
    tail_length: 0
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(this.state);
    this.props.addGoat(this.state)
  }


  render() {
    let {name, tail_length} = this.state
    console.log(this.props);
    return (
      <>
        <h1>Goat Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="goatName">Goat Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={name}
            autoComplete="off"
            id="goatName"
          />

          <label htmlFor="goatTail">Tail Length</label>
          <input
            onChange={this.handleChange}
            type="number"
            name="tail_length"
            value={tail_length}
            autoComplete="off"
            id="goatTail"
          />

        <input type="submit" value="Submit"/>
        </form>
      </>
    );
  }


}

// MDTP needs to return an object {}
// that object will be merged into the props
// The values of the object should be function definitions

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addGoat: (newGoat) => { dispatch({type: "ADD_GOAT", payload: newGoat}) }
//   }
// }

export default connect(null, { addGoat })(GoatForm);

























//
