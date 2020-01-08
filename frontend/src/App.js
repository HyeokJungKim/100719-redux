import React from 'react';

// Start Routing
import { Route, Switch } from 'react-router'
import NavBar from './components/NavBar'
// End Routing

import GoatContainer from './components/GoatContainer'
import CakeContainer from './components/CakeContainer'

import {connect} from 'react-redux'
import {getAllGoats} from './redux/actions'




class App extends React.Component {

  componentDidMount() {
    this.props.getAllGoats()
  }

  render(){
    return (
      <div className="App">
        <h1>React Application</h1>

        <NavBar />

        <Switch>
          <Route path="/cakes" render={() => <CakeContainer/>}/>
          <Route path="/goats" render={() => <GoatContainer/>}/>
        </Switch>

      </div>
    )
  }

}


export default connect(null, { getAllGoats })(App);



















//
