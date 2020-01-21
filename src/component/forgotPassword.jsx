
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
import { Card, TextField, Button } from '@material-ui/core'
import forgot from '../controller/userController'
export class Forgotpassword extends Component {
    constructor() {
        super()
        this.state = {
        email: this.email
        }
    }
    handlechangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }
    handleClick=()=>{
        const user={
            email:this.state.email
        }
        forgot(user).then(()=>{

        })
    }
    
    render() {
        return (
                    <div className="login_container">
                        <Card className="login_card" style={{backgroundColor: '#ffe5c9'}}>
                            <center>
                                <div>
                                    <h3>fundooapp</h3>
                                </div>
                                <div> <TextField
                                    name="email"
                                    value={this.state.email}
                                    id="outlined-basic"
                                    label="email"
                                    variant="standard"
                                    onChange={this.handlechangeemail}
                                />
                                </div>
                            </center>
                            <div className="submit_btn">

                                <center>
                                    <div>
                                        <Button className="forget" onClick={this.handleClick} style={{ margin: "10px" }}>
                                            submit
                                        </Button>

                                    </div>
                                </center> </div>

                        </Card>
                    </div>
        )
    }
}

export default withRouter(Forgotpassword)
