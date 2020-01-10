import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Card, TextField, Button } from '@material-ui/core'
export class ForgotPassword extends Component {
    constructor() {
        super();
        this.state = {
            newpassword: '',
            confirmpasword: '',
        }
    }
    render() {
        return (
            <div>
                <Card>
                    <div className="login_container">
                        <Card className="login_card" style={{
                            backgroundColor: 'pink',
                            width: '30em',
                            height: '80vh'
                        }}>
                            <center>
                                <div>
                                    <h3>fundooapp</h3>
                                </div>
                                <div>
                                    <TextField
                                        id="standard-password-input"
                                        label="create a password"
                                        variant="standard"
                                        type="password"
                                    //autoComplete="current-password"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="standard-password-input"
                                        label="confirm Password"
                                        variant="standard"
                                        type="password"
                                    //autoComplete="current-password"
                                    />
                                </div>
                            </center>
                            <div className="fundoonote">
                            </div>
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

