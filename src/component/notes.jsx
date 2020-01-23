import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { InputBase, Button } from '@material-ui/core';
import BrushIcon from '@material-ui/icons/Brush';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import IconButton from '@material-ui/core/IconButton'
import UndoIcon from '@material-ui/icons/Undo';
import Popper from '@material-ui/core/Popper'
import { Paper } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import { notes } from '../controller/noteController';
import RedoIcon from '@material-ui/icons/Redo';
export class Notes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
            open: false,
            alertOpen: false
        }
    }
    handleNote = () => {
        this.setState({
            open: true
        })
    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }
    handleNotes = () => {
        const newUser = {
            title: this.state.title,
            takeNote: this.state.takeNote
        }
        notes(newUser).then(response => {
            if (response) {
            }
        })
        this.setState({
            open: false
        })
    }
    handlechangeTitle = (event) => {
        this.setState({ title: event.target.value });
        console.log("taking title", this.state.title);
    }
    handlechangenote = (event) => {
        this.setState({ takeNote: event.target.value });
        console.log("taking notes", this.state.takeNote);
    }
    handlealertmenu = (event) => {
        this.setState({
            anchorEl: (this.state.anchorEl ? null : event.currentTarget)
        })
    }
    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popper' : undefined;
        return (!this.state.open ? (
            <div className="notecard" style={{
                marginLeft: "426px", width: "30em", height: "49px", borderRadius: "5px",
                marginTop: "70px", border: "1px solid", borderColor: "#e0e0e0"
            }}>
                <card onClick={this.handleNote}>
                    <div style={{ display: "flex" }}>
                        <div className="take_note">
                            <InputBase style={{ color: "black" }} placeholder="Take a note......" />
                        </div>
                        <IconButton className="checkCircle" style={{ color: "silver", marginleft: "150px" }}>
                            <div className="checkCircleicon" title="newlist"><CheckCircleOutlineIcon /></div>
                        </IconButton>
                        <IconButton className="paint" style={{ color: "silver" }}>
                            <div className="painticon" title='newnote with drawing' ><BrushIcon /></div>
                        </IconButton>
                        <IconButton className="crop" style={{ color: "silver" }}>
                            <div className="cropicon" title="newnote with image" ><CropOriginalIcon /></div>
                        </IconButton>
                    </div>
                </card>
            </div>)
            : (
                <div className="notescard2" style={{
                    marginLeft: "426px", width: "34em", height: "133px", borderRadius: "17px",
                    marginTop: "70px", border: "1px solid", borderColor: "#e0e0e0"
                }}>
                    <card>
                        <div className="notecard">
                            <div className="take_title">
                                <InputBase placeholder="Title" onChange={this.handlechangeTitle} />

                            </div>
                            <div className="take_Note">
                                <InputBase placeholder="Take a note......." onChange={this.handlechangenote} />
                            </div>
                            <div className="icons">
                                <div>
                                    <IconButton className="alert" style={{ color: "gray" }}
                                        aria-describedby={id} type="button" onClick={this.handlealertmenu}>
                                        <div className="alert" title="Remind me"><AddAlertIcon /></div>
                                    </IconButton>
                                    <Popper id={id} open={open} anchorEl={anchorEl}>
                                        <Paper className="alert-paper">
                                            <div className="alertpage">
                                                Reminder:
                                            <div clasName="timing">
                                      <Button className="button" defaultValue="hr:min">
                                       Later today
                                      </Button>
                                      
                                             </div>
                                            </div>
                                        </Paper>
                                    </Popper>
                                </div>
                                <IconButton className="personadd" style={{ color: "gray" }}>
                                    <div className="personAdd" title="collabarator"><PersonAddIcon /></div>
                                </IconButton>
                                <IconButton className="colorlens" style={{ color: "gray" }}>
                                    <div className="colorLens" title="change color" ><ColorLensIcon /></div>
                                </IconButton>


                                <IconButton className="originalicon" style={{ color: "gray" }}>
                                    <div className="originalIcon" title="add image"><CropOriginalIcon /></div>
                                </IconButton>
                                <IconButton className="archeive" style={{ color: "gray" }}>
                                    <div className="Archeive" title="Archive"><ArchiveOutlinedIcon /></div>
                                </IconButton>
                                <IconButton className="morevert" style={{ color: "gray" }}>
                                    <div className="moreverticon" title="more"><MoreVertIcon /></div>
                                </IconButton>
                                <IconButton className="undo" style={{ color: "gray" }}>
                                    <div className="undo" title="undo"><UndoIcon /></div>
                                </IconButton>

                                <IconButton className="redo" style={{ color: "gray" }}>
                                    <div className="redo" title="redo" ><RedoIcon /></div>
                                </IconButton>
                                <IconButton> <div className="trash" onClick={this.handleNotes}>close</div></IconButton>

                            </div>
                        </div>
                    </card>
                </div>)
        )
    }
}
export default withRouter(Notes)
