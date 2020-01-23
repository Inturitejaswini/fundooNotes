import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { InputBase, Button } from '@material-ui/core';
import BrushIcon from '@material-ui/icons/Brush';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import UndoIcon from '@material-ui/icons/Undo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
//import { notes } from '../controller/noteController';
import RedoIcon from '@material-ui/icons/Redo';
export class Notes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    handleNote = () => {
        this.setState({
            open: true
        })
    }
    render() {

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
                        <Button className="checkCircle" style={{  color: "silver",marginleft: "150px" }}>
                            <div className="checkCircleicon" title="newlist"><CheckCircleOutlineIcon /></div>
                        </Button>
                        <Button className="paint" style={{  color: "silver" }}>
                            <div className="painticon"title='newnote with drawing' ><BrushIcon /></div>
                        </Button>
                        <Button className="crop" style={{ color: "silver" }}>
                            <div className="cropicon"title="newnote with image" ><CropOriginalIcon /></div>
                        </Button>
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
                                <InputBase placeholder="Title" />

                            </div>
                            <div className="take_Note">
                                <InputBase placeholder="Take a note......." />
                            </div>
                            <div className="icons">

                                <Button className="alert" style={{ color: "gray"}}>
                                    <div className="alert" title="Remind me"><AddAlertIcon /></div>
                                </Button>
                                <Button className="personadd" style={{ color: "gray"}}>
                                    <div className="personAdd" title="collabarator"><PersonAddIcon /></div>
                                </Button>
                                <Button className="colorlens" style={{ color: "gray" }}>
                                    <div className="colorLens"title="change color" ><ColorLensIcon /></div>
                                </Button>


                                <Button className="originalicon" style={{ color: "gray" }}>
                                    <div className="originalIcon" title="add image"><CropOriginalIcon /></div>
                                </Button>
                                <Button className="archeive" style={{ color: "gray"}}>
                                    <div className="Archeive" title="Archive"><ArchiveOutlinedIcon /></div>
                                </Button>
                                <Button className="morevert" style={{ color: "gray"}}>
                                    <div className="moreverticon" title="more"><MoreVertIcon /></div>
                                </Button>
                                <Button className="undo" style={{ color: "gray" }}>
                                    <div className="undo" title="undo"><UndoIcon /></div>
                                </Button>

                                <Button className="redo" style={{ color: "gray" }}>
                                    <div className="redo"title="redo" ><RedoIcon /></div>
                                </Button>
                                <Button> <div className="trash">close</div></Button>

                            </div>
                        </div>
                    </card>
                </div>)
        )
    }
}
export default withRouter(Notes)
