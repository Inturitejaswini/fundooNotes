import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './component/login';
import { Registration } from './component/registration'
import {Forgotpassword} from './component/forgotPassword'
import DashBoard from './component/dashBoard'
import DrawerComponent from './component/drawerComponent'
import Searchbar from './component/sample'
export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Login}></Route>
          <Route path='/registration' component={Registration}></Route>
          <Route path='/forgotPassword' component={Forgotpassword}></Route>
          <Route path='/DashBoard' component={DashBoard}></Route>
          <Route path='/drawerComponent' component={DrawerComponent}></Route>
          <Route path='/sample' component={Searchbar}></Route>
        </Switch>
      </Router>
    )
  }
}
export default App
