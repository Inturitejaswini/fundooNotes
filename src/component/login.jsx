import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import {TextField, Card,Button,Checkbox} from '@material-ui/core'
import Log from '../controller/userController'
export class Login extends Component {
    constructor(){
        super();
        this.state={
        email:'',
        password:'',
      //   emailError: '',
      //   passwordError:'',
        
        }
      //  this.handleChangeEmail = this.handleChangeEmail.bind(this);
      //  this.handleChangePassword = this.handleChangePassword.bind(this);
      //  this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
        console.log("email",this.state.email);
     };
     handleChangePassword = event => {
        this.setState({password: event.target.value});
        console.log("password", this.state.password);
     };
   //   validate = () => {
   //      let emailError = "";
   //      let passwordError = "";
   //      if (!this.state.password) {
   //         passwordError = "* password cannot be empty";
   //      }
   //      if (!this.state.email.includes('@')) {
   //         emailError = '*inavlid emailid';
   //      }
   //      if (emailError || passwordError) {
   //         this.setState({ emailError, passwordError});
   //         return false;
   //      }
   //      return true;
   //   }
   //   handleSubmit(event){
   //      event.preventDefault();
   //      let isValid = this.validate();
   //      if (isValid) {
   //         console.log(this.state)
   //      }
   //   };
  
       handleRegister=()=>{
           this.props.history.push('/registration')
       }
       handleForgot=()=>{
        this.props.history.push('/forgotPassword')
    }
    handleLogin = () => {
      const user = {
         email: this.state.email,
         password: this.state.password,
      }
      console.log("new user dateils", user);
      Log(user).then(()=>{
      //console.log(response.data);
      })
      // this.props.history.push('/login')
     }
    render() {
        return (
            <div className="login_container">
             <Card className="login_card"  style={{backgroundColor: 'pink' }}>  
              <center>
               <div>
               <h2><a href="/"><font color="#800080">FundooLogin</font></a></h2>
               </div>
               
                 <TextField
                     id="outlined-basic"
                     label="email"
                     variant="standard"
                     type="email"
                     value={this.state.email}
                    onChange={this.handleChangeEmail}>
                </TextField>
                 <br/>
                 <TextField
                 
                    id="standard-password-input"
                    label="Password"
                    variant="standard"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChangePassword}>
                 </TextField>
                 <br/>
                 </center>
                <div className="submit_Btn">
                <div>
                <Button onClick={this.handleForgot} className="forgotpassword" variant="contained" color="inherit">
                forgotpassword
                </Button>
                 </div>
                    </div>
                    <div>
                        <center>
                    <Button  onClick={this.handleRegister}  className="register_Btn" variant="contained"
                     color="primary" style={{marginRight:"40px", marginTop:"3px"}}>
                       <span>Register</span>
                    </Button>
                     <Button   onClick={this.handleLogin} className="login_Btn" variant="contained" color="primary" 
                     style={{marginTop:"3px",marginLeft:"20px"}}>
                       <span> login</span>
                    </Button>
                    </center>
                    </div>
                    <div style={{marginLeft:"160px"}}>
                      <Checkbox value="remeber"/>Remember Me
                    </div>
                    <div style={{marginTop:"70px"}}>
                        <center>
                            <h5>Not a member?signUp New</h5>
                        </center>
                     </div>   
             </Card>
            </div>
        )
    }
}
export default withRouter(Login)
