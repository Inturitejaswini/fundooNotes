import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import {TextField, Card,Button} from '@material-ui/core'
export class login extends Component {
    constructor(){
        super();
        this.state={
        email:'',
        password:''
        }
       }
    render() {
        return (
           
            <div className="login_container">
             <Card className="login_card">
              <center>
               <div>
                   <h2>FundooApp_Login</h2>
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
                    <div>
                        <Button className="login_Btn" variant="contained" color="default">
                        login
                        </Button>
                    </div>
                    <div>
                     <Button  className="register_Btn" variant="contained" color="default">
                        Register
                        </Button>
                    </div>
                 </div>
                 <div>
                     <center>
                     <Button className="forgot_password" variant="contained" color="secondary">
                     ForgotPassword
                     </Button>
                     </center>
                 </div>
             </Card>
            </div>
        )
    }
}
export default withRouter(login)
