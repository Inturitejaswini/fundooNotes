import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './component/login';
import { Registration } from './component/registration'
import {ForgotPassword} from './component/forgotPassword'
export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/registration' component={Registration}></Route>
          <Route path='/forgotPassword' component={ForgotPassword}></Route>
        </Switch>
      </Router>
    )
  }
}
export default App
