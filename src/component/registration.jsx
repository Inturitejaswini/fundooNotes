import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Card, TextField, Link } from '@material-ui/core'
export class Registration extends Component {
   constructor() {
      super();
      this.state = {
         fullName: '',
         email: '',
         password: '',
         mobileNo: '',
         password_confirm: '',
         fullNameError: '',
         emailError: '',
         passwordError: '',
         mobileNoError: '',
      }

      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleChangeFullName = this.handleChangeFullName.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
     // this.handleChangeMobileNo = this.handleChangeMobileNo.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }


   handleChangeFullName = event => {
      this.setState({ fullName: event.target.value });
   };

   handleChangemobileNo = event => {
      this.setState({ mobileNo: event.target.value });
   };
   handleChangeEmail = event => {
      this.setState({ email: event.target.value });
   };

   handleChangePassword = event => {
      this.setState({password: event.target.value});
   };

   validate = () => {
      let fullNameError = "";
      let emailError = "";
      let passwordError = "";
      let mobileNoError = "";
      if (!this.state.password) {
         passwordError = "* password cannot be empty";
      }
      if (!this.state.fullName) {
         fullNameError = "* name cannot be empty";
      }
      if (!this.state.email.includes('@')) {
         emailError = '*inavlid emailid';
      }
      if (!this.state.mobileNo.includes('@')) {
         mobileNoError = '*inavlid mobileNo enter 10 digitnumber';
      }
      if (emailError || fullNameError || passwordError || mobileNoError) {
         this.setState({ emailError, fullNameError, passwordError, mobileNoError });
         return false;
      }
      return true;
   }
   handleSubmit(event){
      event.preventDefault();
      const isValid = this.validate();
      if (isValid) {
         console.log(this.state)
      }
   };
   handleRegister = () => {
      this.props.history.push('/login')
   }
   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <body bgcolor="#afafaf"></body>
            <div className="registartion_container">
            <center>
                  <Card  style={{ justifyContent: 'center', width: '25em', height: '80vh', 
                  marginTop: '60px', backgroundColor: '#FA8072' }}>
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
                           <TextField id="standard-basic"
                              type="mobileNo"
                              placeholder="mobileNo"
                              value={this.state.mobileNo}
                              onChange={this.handleChangemobileNo} />
                           <div style={{ fontSize: 12, color: 'red' }}>
                              {this.state.mobileNoError}
                           </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '10px' }}>
                           <TextField id="standard-basic"
                              type="create password"
                              placeholder="create Password"
                              value={this.state.createPassword}
                              onChange={this.handleChangecreatePassword}/>
                           <div style={{ fontSize: 12, color: 'red' }}>
                              {this.state.passwordError}
                           </div>
                        </div>
                        <div className="form-group" style={{ marginBottom: '60px' }}>
                           <TextField id="standard-basic"
                              type="password"
                              placeholder="Confirm Password"
                              className="form-control"
                              value={this.state.ConfirmPassword}
                              onChange={this.handleChangeConformPassword}
                           />
                        </div>
                        <div className="submit_Btn">
                    <div  onClick={this.handleForgotPassword} className="forgot_password" 
                    variant="contained" color="primary" placeholder="bottem-left">
                    <h5>ForgotPassword?</h5>
                 </div>
                    </div>
                        <div className="form-group">
                           <button type="submit" style={{ marginRight: '50px' }} color="primary">
                              Register
                           </button>
                           <button type="submit" >
                              Cancel<Link href="/login" ></Link>
                           </button>
                        </div>
                       </Card>
                       </center>
                     </div>
                     </form>
      )
   }
}
   export default withRouter(Registration);
