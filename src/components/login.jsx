/******************************************************************************
 *  Execution       :   1. default node         cmd> node login.jsx 
 *                      2. if nodemon installed cmd> nodemodule login.jsx
 * 
 *  Purpose         : creating login form.
 *  @description    
 * 
 *  @file           :login.jsx
 *  @overview       :login form problem.
 *  @module         :login - This is optional if expeclictly its an npm or local package
 *  @author         :Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        :1.0
 *  @since          :7-1-2019
 ******************************************************************************/
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { TextField, Card, Button, Avatar } from '@material-ui/core'
import { Log } from '../controller/userController'
import image2 from '../assets/maxresdefault.jpg'
let  imgUrl = 'assets/maxresdefault.jpg';
export class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',

        }
    }
    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    };
    handleChangePassword = event => {
        this.setState({ password: event.target.value });
    };
    handleRegister = () => {
        this.props.history.push('/registration')
    }
    handleForgot = () => {
        this.props.history.push('/forgotPassword')
    }
    handleLogin = () => {
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        Log(user).then(response => {
            if (response) {
                this.props.history.push('/dashBoard')
            }
        }
        )
    }
    render() {
        return (
            <div className="login_container">
                <Card className="login_card-div" style={{ backgroundColor: "lightpink", backgroundImage: "../assets/maxresdefault.jpg" }} >
                    <div id="acnt-icon">
                        <Avatar className="account">
                        </Avatar>
                    </div>
                    <div>
                        <h2><font color="#800080">FundooLogin</font></h2>
                    </div>
                    <div className="card-inner-div">
                        <TextField
                            id="outlined-basic"
                            label="email"
                            variant="outlined"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChangeEmail}>
                        </TextField>
                        <br />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            variant="outlined"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChangePassword}>
                        </TextField>
                        <br />
                        <div >
                            <Button type="submit" onClick={this.handleLogin} Id="btn" variant="contained" >
                                <div className="login">
                                    Login
                                </div>
                            </Button>
                        </div>
                        <div>
                            <Button onClick={this.handleRegister} id="register_Btn" variant="contained">
                                <div className="register">
                                    Register
                                </div>
                            </Button>
                        </div>
                        <div>
                            <div className="forgot-div" onClick={this.handleForgot} style={{ cursor: "pointer" }}>
                                forgotpassword?
                            </div>
                        </div>
                    </div>
                </Card>
            </div>


        )
    }
}
export default withRouter(Login)