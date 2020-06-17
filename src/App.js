import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './component/login';
import { Registration } from './component/registration'
import {Forgotpassword} from './component/forgotPassword'
import DashBoard from './component/dashBoard'
import DrawerComponent from './component/drawer'
import { Notes } from './component/notes';
import Getnotes from './component/getNote'
import MoreComponent from './component/moreComponent'
import Reminder from './component/reminder'
import Archive from './component/archiveNote'
import Trash from './component/deleteNote'
import Setdateandtime from './component/setDateAndTime'
import { AppBar1 } from './component/appBar';
import Editlabel from './component/drawerLable';
import Editlabels from './component/editLables';
import Getlabels from './component/getLables';
import ColorComponent from './component/color'
import remainderComponent from './component/remainder'
import Labelcomponent from './component/label'
export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Login}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/registration' component={Registration}></Route>
          <Route path='/forgotPassword' component={Forgotpassword}></Route>
          <Route path='/DashBoard' component={DashBoard}></Route>
          <Route path='/drawer' component={DrawerComponent}></Route>
          <Route path='/notes' component={Notes}></Route>
          <Route path='/getNote' component={Getnotes}></Route>
          <Route path='/moreComponent' component={MoreComponent}></Route>
          <Route path='/reminder' component={Reminder}></Route>
          <Route path='/archiveNote' component={Archive}></Route>
          <Route path='/deleteNote' component={Trash}></Route>
          <Route path='/setDateAndTime'component={Setdateandtime}></Route>
          <Route path='/appBar' component={AppBar1}></Route>
          <Route path='/drawerLable' component={Editlabel}></Route>
          <Route path='/editLables' component={Editlabels}></Route>
          <Route path='/getLables' component={Getlabels}></Route>
          <Route path='/color' component={ColorComponent}></Route>
          <Route path='/remainder' component={remainderComponent}></Route>
          <Route path='/label' component={Labelcomponent}></Route>
        </Switch>
      </Router>
    )
  }
}
export default App
