import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './component/login';
import { Registration } from './component/registration'
import { ForgotPassword } from './component/forgotPassword'
import DashBoard from './component/dashBoard'
import DrawerComponent from './component/drawer'
import { Notes } from './component/notes';
import GetNotes from './component/getNote'
import MoreComponent from './component/moreComponent'
import Reminder from './component/reminder'
import Archive from './component/archiveNote'
import Trash from './component/deleteNote'
import SetDateAndTime from './component/setDateAndTime'
import { AppBar1 } from './component/appBar';
import EditLabel from './component/drawerLable';
import EditLabels from './component/editLables';
import GetLabels from './component/getLables';
import ColorComponent from './component/color'
import RemainderComponent from './component/remainderComponent'
import LabelComponent from './component/label'
export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Login}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/registration' component={Registration}></Route>
          <Route path='/forgotPassword' component={ForgotPassword}></Route>
          <Route path='/DashBoard' component={DashBoard}></Route>
          <Route path='/drawer' component={DrawerComponent}></Route>
          <Route path='/notes' component={Notes}></Route>
          <Route path='/getNote' component={GetNotes}></Route>
          <Route path='/moreComponent' component={MoreComponent}></Route>
          <Route path='/reminder' component={Reminder}></Route>
          <Route path='/archiveNote' component={Archive}></Route>
          <Route path='/deleteNote' component={Trash}></Route>
          <Route path='/setDateAndTime' component={SetDateAndTime}></Route>
          <Route path='/appBar' component={AppBar1}></Route>
          <Route path='/drawerLable' component={EditLabel}></Route>
          <Route path='/editLables' component={EditLabels}></Route>
          <Route path='/getLables' component={GetLabels}></Route>
          <Route path='/color' component={ColorComponent}></Route>
          <Route path='/remainderComponent' component={RemainderComponent}></Route>
          <Route path='/label' component={LabelComponent}></Route>
        </Switch>
      </Router>
    )
  }
}
export default App
