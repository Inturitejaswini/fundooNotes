

import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import {TextField, Card,Button,Checkbox} from '@material-ui/core'
export class login extends Component {
    constructor(){
        super();
        this.state={
        email:'',
        password:''
        }

       }
       handleRegister=()=>{
           this.props.history.push('/registration')
       }
       handleForgot=()=>{
        this.props.history.push('/forgot')
    }
    render() {
        return (
            <div className="login_container">
             <Card className="login_card"  style={{backgroundColor: 'pink',
             }}>  
              <center>
               <div>
                   <h2>FundooApp Login</h2>
               </div>
               
                 <TextField
                     id="outlined-basic"
                     label="email"
                     variant="standard"
                     type="email">
                </TextField>
                 <br/>
                 <TextField
                 
                    id="standard-password-input"
                    label="Password"
                    variant="standard"
                    type="password">
                 </TextField>
                 <br/>
                 </center>
                <div className="submit_Btn">
                    <div  onClick={this.handleForgotPassword} className="forgot_password" variant="contained" color="primary" placeholder="bottem-left">
                    <h5>ForgotPassword?</h5>
                 </div>
                    </div>
                    <div>
                        <center>
                    <Button  onClick={this.handleRegister}  className="register_Btn" variant="contained"
                     color="primary" style={{marginRight:"40px"}} style={{marginTop:"3px"}}>
                       <span>Register</span>
                    </Button>
                     <Button    className="login_Btn" variant="contained" color="primary" 
                     style={{marginTop:"40px"}} style={{marginLeft:"20px"}}>
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
export default withRouter(login)
