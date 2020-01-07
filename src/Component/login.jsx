

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
             <Card className="login_card"  style={{backgroundColor: 'pink', width: '30em',height: '60vh' }}>  
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
                    <div className="forgot_password" variant="contained" color="primary" placeholder="bottem-left">
                    <h5>ForgotPassword</h5>
                 </div>
                    </div>
                    <div>
                    <center>
                     <Button className="login_Btn" variant="contained" color="primary">
                        login
                    </Button>
                    </center>
                    </div>
             </Card>
            </div>
        )
    }
}
export default withRouter(login)
