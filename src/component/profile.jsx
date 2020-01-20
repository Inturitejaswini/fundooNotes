import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton, Avatar, Grid, Card } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import { createMuiTheme } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core';
const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paperAnchorRight: {
                top: "64px",
                height: "420px"
             }
        }
    }
})
export class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="profile">
                <center>
                    <Card className="profile-card" style={{ width: "400px", height: "400px" }}>
                        <center>
                            <div className="acountIcon">
                                <Grid className="grid"
                                    title="googleAccount"
                                    justify-container="center"
                                    alignItems="right"
                                    style={{ marginLeft: "20PX" }}>
                                    <IconButton>
                                        <AccountCircleIcon/>
                                        <CameraAltIcon/>
                                    </IconButton>
                                </Grid>
                            </div>
                        </center>
                    </Card>
                </center>
            </div>
        )
    }
}

export default withRouter(Profile)
