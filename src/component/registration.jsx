import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Card, TextField, Link ,Button} from '@material-ui/core'
import Register from '../controller/userController'
export class Registration extends Component {
   constructor() {
      super();
      this.state = {
         fullName: '',
         email: '',
         password: '',
         fullNameError: '',
         emailError: '',
         passwordError: '',
      }
   }
   handleChangeFullName = (event) => {
      this.setState({ fullName: event.target.value });
      console.log("dxgfhgh", this.state.fullName);

   };
   handleChangeEmail = (event) => {
      this.setState({ email: event.target.value });
      console.log("dxgfhgh", this.state.email);
 
   };
   handleChangePassword = (event) => {
      this.setState({ password: event.target.value });
      console.log("dxgfhgh", this.state.password);

   };
   validate = () => {
      let fullNameError = "";
      let emailError = "";
      let passwordError = "";
      if (!this.state.password) {
         passwordError = "* password cannot be empty";
      }
      if (!this.state.fullName) {
         fullNameError = "* name cannot be empty";
      }
      if (!this.state.email.includes('@')) {
         emailError = '*inavlid emailid';
      }

      if (emailError || fullNameError || passwordError) {
         this.setState({ emailError, fullNameError, passwordError });
         return false;
      }
      return true;
   }
   
   handleRegister = () => {
      const newUser = {
         fullName: this.state.fullName,
         email: this.state.email,
         password: this.state.password
      }
      console.log("gfjhgkhj", newUser);
      Register(newUser)
      this.props.history.push('/login')
   }
   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <body bgcolor="#afafaf"></body>
            <div className="registartion_container">
               <center>
                  <Card style={{
                     justifyContent: 'center', width: '25em', height: '80vh',
                     marginTop: '60px', backgroundColor: '#FA8072'}}>
                     <center>
                        <div >
                           <h2><a href="/"><font color="	#800080">Registration</font>
                           </a></h2>
                        </div>
                     </center>
                     <div className="form-group" style={{ marginBottom: '10px' }}>
                        <TextField id="standard-basic"
                           type="text"
                           placeholder="fullName"
                           value={this.state.fullName}
                           onChange={this.handleChangeFullName}
                           name="fullName">
                              
                        </TextField>
                        <div style={{ fontSize: 12, color: 'red' }}>
                           {this.state.fullNameError}
                        </div>
                     </div>
                     <div className="form-group" style={{ marginBottom: '10px' }}>
                        <TextField id="standard-basic"
                           type="email"
                           placeholder="Email"
                           value={this.state.email}
                           onChange={this.handleChangeEmail}
                        />
                        <div style={{ fontSize: 12, color: 'red' }}>
                           {this.state.emailError}
                        </div>
                     </div>
                     <div className="form-group" style={{ marginBottom: '10px' }}>
                        <TextField
                           id="filled-password-input"
                           label="Password"
                           type="password"
                           autoComplete="current-password"
                           variant="filled"
                           value={this.state.Password}
                           onChange={this.handleChangePassword}
                        />
                       <div style={{ fontSize: 12, color: 'red' }}>
                           {this.state.passwordError}
                        </div>
                     </div>

                     <div className="submit_Btn">
                        <div onClick={this.handleForgotPassword} className="forgot_password"
                           variant="contained" color="primary" placeholder="bottem-left">
                           <h5>ForgotPassword?</h5>
                        </div>
                     </div>
                     <div className="form-group">
                        <Button onClick={this.handleRegister} type="submit" style={{ marginRight: '50px' }} color="primary">
                           Register
                           </Button>
                        <Button type="submit" >
                           Cancel<Link href="/login" ></Link>
                        </Button>
                     </div>
                  </Card>
               </center>
            </div>
         </form>
      )
   }
}
export default withRouter(Registration);
