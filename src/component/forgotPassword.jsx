import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Card, TextField, Button } from '@material-ui/core'
import Forgot from '../controller/userController'
export class ForgotPassword extends Component {
    constructor() {
        super();
        this.state = {
            newpassword: '',
            confirmpasword: '',
        }
    }
    handleChangeNewPassword= (event) => {
        this.setState({newpassword: event.target.value });
        console.log("newPassword", this.state.newpassword);
  
     };
     handleChangeConformPassword = (event) => {
        this.setState({conformPassword: event.target.value });
        console.log("conformPassword", this.state.conformPassword);
  
     };
     handleRegister = () => {
        const user = {
            newpassword: this.state.newpassword,
            confirmpasword: this.state.confirmpasword,
        }
        console.log("new user dateils", user);
        Forgot(user).then(()=>{
        //console.log(response.data);
        })
     }
    
    render() {
        return (
            <div>
                <Card>
                    <div className="login_container">
                        <Card className="login_card" style={{
                            backgroundColor: 'pink',
                            width: '30em',
                            height: '50vh'
                        }}>
                            <center>
                                <div>
                                    <h3>fundooapp</h3>
                                </div>
                                <div>
                                    <TextField
                                        id="standard-password-input"
                                        label="newPassword"
                                        variant="standard"
                                        type="newPassword"
                                        onChange= {this.handleChangeNewPassword}
                                    //autoComplete="current-password"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="standard-password-input"
                                        label="confirmPassword"
                                        variant="standard"
                                        type="conformPassword"
                                        onChange= {this.handleChangeConformPassword}
                                    />
                                </div>
                            </center>
                            <div className="submit_btn">

                                <center>
                                    <div>
                                        <Button className="submit">
                                            submit
                                       </Button>
                                    </div>
                                </center> </div>

                        </Card>
                    </div>
                </Card>
            </div>
        )
    }
}

export default withRouter(ForgotPassword)

