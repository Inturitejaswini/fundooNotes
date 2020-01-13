/******************************************************************************
 *  Execution       :   1. default node         cmd> node registration.jsx 
 *                      2. if nodemon installed cmd> nodemodule registration.jsx
 * 
 *  Purpose         : creating registration form.
 *  @description    
 * 
 *  @file           :registration.jsx
 *  @overview       :registration form problem.
 *  @module         :registration - This is optional if expeclictly its an npm or local package
 *  @author         :Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        :1.0
 *  @since          :4-1-2019
 ******************************************************************************/
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Card, Button, Snackbar,Input } from '@material-ui/core';
import register from '../controller/userController'
export class Registration extends Component {
   constructor(props) {
      super(props);
      this.state = {
         firstName: this.firstName,
         lastName: this.lastName,
         fullName:this.fullName,
         email: this.email,
         password: this.password,
         phoneNumber: this.phoneNumber,
         snackbarOpen: false,
         snackbarMessage: '',
      }
   }


   snackbarClose = (e) => {
      this.setState({ snackbarOpen: false })
   }
   onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
      console.log(this.setState({ [e.target.name]: e.target.value }))
   }
   handlechangeFirstName = (event) => {
      if (event.target.value.match("^[a-zA-z ]*$") != null) {
         this.setState({ firstName: event.target.value });
         console.log("enter firstname",this.state.firstName)
      }
      else {
         this.setState({ snackbarOpen: true, snackbarMessage: " *first name should contain only characters" })
      }
   }
   handlechangeLastName = (event) => {
      if (event.target.value.match("^[a-zA-z ]*$") != null) {
         this.setState({ lastName: event.target.value });
         console.log("enterlastname",this.state.lastName)
      }
      else {
         this.setState({ snackbarOpen: true, snackbarMessage: " *last name should contain only characters" })
      }
   }
   handlechangeFullName = (event) => {
      if (event.target.value.match("^[a-zA-z ]*$") != null) {
         this.setState({ fullName: event.target.value });
         console.log("enter fullname",this.state.fullName)
      }
      else {
         this.setState({ snackbarOpen: true, snackbarMessage: "*full name should contain only characters" })
      }
   }
   handlechangeEmail = (event) => {
      if(event.target.value.match(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i) !=null){
      this.setState({ email: event.target.value });}
      else{
      this.setState({ snackbarOpen: true, snackbarMessage: " *enter valid email" })
      }
      }
   handlechangepassword = (event) => {
      if (event.target.value.match("^[a-z0-9 ]*$") != null) {
         this.setState({ password: event.target.value });
         console.log("enter password",this.state.password)
      }
      else {
         this.setState({ snackbarOpen: true, snackbarMessage: " *password should minimum 6 character" })
      }
   }
   handleregister = () => {
      const user = {
         firstName: this.state.firstName,
         lastName: this.state.lastName,
         fullName: this.state.fullName,
         email: this.state.email,
         password: this.state.password,
      }
      console.log("new user dateils", user);
      register(user).then(() => {
         console.log("iuyhgujbnukhbyuhbujk"+user.data);
      })
      //this.props.history.push('/login')
   }
   render() {
      return (
         <div className="registartion_container">
            <center>
               <Card style={{
                  justifyContent: 'center', width: '25em', height: '80vh',
                  marginTop: '60px', backgroundColor: '#FFFF99'
               }}>
                  <center>
                     <div >
                        <h2><a href="/"><font color="	#800080">Registration</font>
                        </a></h2>
                     </div>
                  </center>
                  <Snackbar
                     anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                     }}
                     open={this.state.snackbarOpen}
                     autoHideDuration={6000}
                     onClose={this.snackbarOpen}
                     message={<span id="messege-id" > {this.state.snackbarMessage}</span> }>
                  </Snackbar>
                  <div className="firstName-text">
                     <Input className="input-text"
                        type="firstName"
                        placeholder="firstName"
                        onChange={this.handlechangeFirstName} />
                  </div>
                  <div className="lastName-text">
                     <input className="input-text"
                        type="lastName"
                        placeholder="lastName"
                        onChange={this.handlechangeLastName}
                        style={{ width: "200px", backgroundColor: '#FFFF99' }} />
                  </div>
                  <div className="fullname-text">
                     <Input className="input-text"
                        type="fullName"
                        placeholder="fullName"
                        onChange={this.handlechangeFullName} />
                  </div>
                  <div className="email-text">
                     <Input className="input-text"
                        type="email"
                        placeholder="email"
                        onChange={this.handlechangeEmail} />
                  </div>
                  <div className="password-text">
                     <Input className="input-text"
                        type="password"
                        placeholder="password"
                        onChange={this.handlechangepassword} />
                  </div>
                  <div className="form-group">
                     <Button onClick={this.handleregister} type="submit" style={{ marginRight: '50px', marginTop: '40px' }} color="primary">
                        Register
                           </Button>
                     <Button type="submit" style={{ marginTop: '40px', marginLeft: '50px' }} >
                        Cancel
                        </Button>
                  </div>
               </Card>
            </center>
         </div>
      )
   }
}
export default withRouter(Registration);
