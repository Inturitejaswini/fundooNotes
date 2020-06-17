import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './pages/login';
import { Registration } from './pages/registration'
import { ForgotPassword } from './pages/forgotPassword'
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
          <Route path='/' exact pages={Login}></Route>
          <Route path='/login' pages={Login}></Route>
          <Route path='/registration' pages={Registration}></Route>
          <Route path='/forgotPassword' pages={ForgotPassword}></Route>
          <Route path='/DashBoard' components={DashBoard}></Route>
          <Route path='/drawer' components={DrawerComponent}></Route>
          <Route path='/notes' components={Notes}></Route>
          <Route path='/getNote' components={GetNotes}></Route>
          <Route path='/moreComponent' components={MoreComponent}></Route>
          <Route path='/reminder' components={Reminder}></Route>
          <Route path='/archiveNote' components={Archive}></Route>
          <Route path='/deleteNote' components={Trash}></Route>
          <Route path='/setDateAndTime' components={SetDateAndTime}></Route>
          <Route path='/appBar' components={AppBar1}></Route>
          <Route path='/drawerLable' components={EditLabel}></Route>
          <Route path='/editLables' components={EditLabels}></Route>
          <Route path='/getLables' components={GetLabels}></Route>
          <Route path='/color' components={ColorComponent}></Route>
          <Route path='/remainderComponent' components={RemainderComponent}></Route>
          <Route path='/label' components={LabelComponent}></Route>
        </Switch>
      </Router>
    )
  }
}
export default App
