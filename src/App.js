import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import login from './Component/login'
import { Registration } from './Component/registration';
export class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
        <Route path='/login' component={login}></Route>
        <Route path='/registration' component={Registration}></Route>
      </Switch>
    </Router>
    )
  }
}

export default App
