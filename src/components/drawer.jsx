/******************************************************************************
 *  Execution       :   1. default node         cmd> node drawerComponent.jsx 
 *                      2. if nodemon installed cmd> nodemodule drawerComponent.jsx
 * 
 *  Purpose         : creating drawercomponent menu.
 *  @description    
 * 
 *  @file           :drawercomponent.jsx
 *  @overview       : creating drawercomponent.
 *  @module         :draweComponent - This is optional if expeclictly its an npm or local package
 *  @author         :Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        :1.0
 *  @since          :16-1-2019
 ******************************************************************************/
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { EmojiObjectsOutlinedIcon, NotificationsNoneOutlinedIcon, ArchiveOutlinedIcon, DeleteOutlineOutlinedIcon, } from '@material-ui/icons';
import { Drawer, createMuiTheme, MuiThemeProvider, Button, Divider } from '@material-ui/core';
import Editlabels from '../component/editLables'
import Getlabels from '../component/getLables'
const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paperAnchorLeft: {
                top: "64px",
                height: "590px",
                width: "201px",
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
    handleNote = () => {
        this.props.history.push('/dashboard')
    }
    handleArchive = () => {
        this.props.history.push('/archiveNote')
    }
    handleDelete = () => {
        this.props.history.push('/deleteNote')
    }
    handleRemainder = () => {
        this.props.history.push('/remainder')
    }
    render() {
        return (
            <div className="drawercomponentbar-div">
                <MuiThemeProvider theme={theme}>
                    <Drawer className="drawer"
                        variant="persistent"
                        open={this.props.open}
                        overflow="auto" >
                        <div className="navigationbar" >
                            <div className="list" >
                                <div className="note" >
                                    <Button id="noteicon-btn" onClick={this.handleNote}>
                                        <div className="noteicon" ><EmojiObjectsOutlinedIcon /></div>
                                        <div className="notetext" title="notes">Notes</div>
                                    </Button>
                                </div>
                                <div className="remainder" >
                                    <Button id="remindericon-btn" onClick={this.handleRemainder}>
                                        <div className="remaindericon" ><NotificationsNoneOutlinedIcon /></div>
                                        <div className="remaindertext" title="remainder">Remainder</div>
                                    </Button>
                                </div><Divider type='horizontal' /></div>
                            <div className="label bar" >
                                <div id="name"><h5>LABELS</h5></div>
                                <div className="edit lables" >
                                    <Getlabels />
                                    <Editlabels ></Editlabels>
                                </div>
                                <div><Divider type='horizontal' /></div>
                            </div>
                            <div className="archeive and trash" >
                                <div className="archeive" >
                                    <Button id="archivicon-btn" onClick={this.handleArchive}>
                                        <div className="archeiveicon" ><ArchiveOutlinedIcon /></div>
                                        <div className="archeivetext" title="archive" >Archeive</div>
                                    </Button>
                                </div>
                                <div className="trash" >
                                    <Button id="trashicon-btn" onClick={this.handleDelete}>
                                        <div className="trashicon"  ><DeleteOutlineOutlinedIcon /></div>
                                        <div className="trashtext" title="trash">Trash</div>
                                    </Button>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>

                    </Drawer>
                </MuiThemeProvider>
            </div>
        )
    }


}
export default withRouter(DrawerComponent)