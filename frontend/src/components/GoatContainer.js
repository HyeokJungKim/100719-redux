import React from 'react';
import Goat from './Goat';
import GoatForm from './GoatForm'

import { connect } from 'react-redux';
import {removeAll} from '../redux/actions'

const GoatContainer = (props) => (
  <div>
    <h1>All Goats</h1>
    <button onClick={props.removeAll}>Release the Goats</button>
    <ol>
      {props.goats.map(goat => <Goat goat={goat} key={goat.id}/>)}
    </ol>
    <GoatForm/>

  </div>
);

// MSTP needs to return an object {}
// that object will be merged into the props
const mapStateToProps = (state) => {
  return {
    goats: state.allInformationAboutGoats.goats
  }
}


let funcName = connect(mapStateToProps, { removeAll })
let newComponent = funcName(GoatContainer)
export default newComponent













//
