
/******************************************************************************
 *  Execution       :   1. default node         cmd> node forgotPassword.jsx 
 *                      2. if nodemon installed cmd> nodemodule forgotPassword.jsx
 * 
 *  Purpose         : creating forgotPassword form.
 *  @description    
 * 
 *  @file           :forgotPassword.jsx
 *  @overview       :forgotPassword form problem.
 *  @module         :forgotPassword - This is optional if expeclictly its an npm or local package
 *  @author         :Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        :1.0
 *  @since          :9-1-2019
 ******************************************************************************/
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Card, TextField, Button, Snackbar } from '@material-ui/core'
import forgot from '../controller/userController'
export class ForgotPassword extends Component {
    constructor() {
        super();
        this.state = {
            newpassword: '',
            confirmpasword: '',
            snackbarOpen: false,
            snackbarMessage: '',
        }
    }
    snackbarClose = (e) => {
        this.setState({ snackbarOpen: false })
        }
    handlechangeNewPassword = (event) => {
        if (event.target.value.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/) != null) {
           this.setState({ newPassword: event.target.value });
           console.log("enter newpassword",this.state.newPassword)
        }
        else {
           this.setState({ snackbarOpen: true, snackbarMessage: " *password should minimum 6 character" })
        }
     }
     handlechangeConformPassword = (event) => {
        if (event.target.value.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/) != null) {
           this.setState({ conformPassword: event.target.value });
           console.log("enter conformpassword",this.state.conformPassword)
        }
        else {
           this.setState({ snackbarOpen: true, snackbarMessage: " *password should minimum 6 character" })
        }
     }
    handleregister = () => {
        const user = {
            newpassword: this.state.newpassword,
            confirmpasword: this.state.confirmpasword,
        }
        console.log("new user dateils", user);
        forgot(user).then(() => {
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
                                <Snackbar
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                    open={this.state.snackbarOpen}
                                    autoHideDuration={6000}
                                    onClose={this.snackbarOpen}
                                    message={<span id="messege-id"> {this.state.snackbarMessage}</span>}>
                                </Snackbar>
                                <div>
                                    <TextField
                                        id="standard-password-input"
                                        label="newPassword"
                                        variant="standard"
                                        type="newPassword"
                                        onChange={this.handlechangeNewPassword}
                                    //autoComplete="current-password"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="standard-password-input"
                                        label="confirmPassword"
                                        variant="standard"
                                        type="conformPassword"
                                        onChange={this.handlechangeConformPassword}
                                    />
                                </div>
                            </center>
                            <div className="submit_btn">

                                <center>
                                    <div>
                                        <Button    onClick={this.handleforgot} className="submit">
                                            submit
                                       </Button>
                                    </div>
                                </center>
                            </div>
                        </Card>
                    </div>
                </Card>
            </div >
        )
    }
}

export default withRouter(ForgotPassword)

