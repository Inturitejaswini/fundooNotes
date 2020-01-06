import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import login from './Component/login'
export class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
        <Route path='/login' component={login}></Route>
      </Switch>
    </Router>
    )
  }
}

export default App