import React, { Component } from 'react';
// import { AppBar, Toolbar, IconButton, Typography, MenuItem, Menu, InputBase, Grid, Avatar, List, ListItemIcon, Divider } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Drawer from '@material-ui/core/Drawer';
import { createMuiTheme } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { withRouter } from 'react-router-dom';

const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paperAnchorLeft: {
                top: "64px",
                height:"350px"
            }
        }
    }
})

class DrawerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Drawer className="drawer"
                    variant="persistent"
                    open={this.props.open}
                    overflow="auto" >
                    <div className="navigationbar" style={{ marginLeft: "10px", marginRight: "70px" }}>
                        <div className="list" style={{ marginLeft: "15px", marginTop: "30px" }}>
                            <div className="note" style={{ display: "flex", marginBottom: "10px" }}>
                                <div className="noteicon" style={{ marginRight: "10px" }}><EmojiObjectsOutlinedIcon /></div>
                                <div className="notetext">Notes</div>
                            </div>
                            <div className="remainder" style={{ display: "flex" }}>
                                <div className="remaindericon" style={{ marginRight: "10px" }}><NotificationsNoneOutlinedIcon /></div>
                                <div className="remaindertext">Remainder</div>
                            </div><h6>.....................................</h6></div>
                        <div className="label bar" style={{ marginLeft: "15px", marginRight: "70px" }}>
                            <h6>LABELS</h6>
                            <div className="edit lables" style={{ display: "flex", marginBottom: "10px" }}>
                                <div className="editlabelicon" style={{ marginRight: "10px" }}><EditOutlinedIcon /></div>
                                <div className="editlabel">Edit Lables</div>
                            </div><h6>.....................................</h6></div>
                        <div className="archeive and trash" style={{ marginLeft: "15px", marginRight: "70px" }}>
                            <div className="archeive" style={{ display: "flex", marginBottom: "10px" }}>
                                <div className="archeiveicon" style={{ marginRight: "10px" }}><ArchiveOutlinedIcon /></div>
                                <div className="archeive">Archeive</div>
                            </div>
                            <div className="trash" style={{ display: "flex", marginBottom: "10px" }}>
                                <div className="trashicon" style={{ marginRight: "10px" }}><DeleteOutlineOutlinedIcon /></div>
                                <div className="trash">Trash</div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </Drawer>
            </MuiThemeProvider>
        )
    }


}
export default withRouter(DrawerComponent)
