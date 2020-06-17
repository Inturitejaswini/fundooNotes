
/******************************************************************************
 *  Execution       :   1. default node         cmd> node Notes.jsx 
 *                      2. if nodemon installed cmd> nodemodule Notes.jsx
 * 
 *  Purpose         : creating notes card.
 *  @description    
 * 
 *  @file           :Notes.jsx
 *  @overview       : creating Notes problem.
 *  @module         :Notes - This is optional if expeclictly its an npm or local package
 *  @author         :Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        :1.0
 *  @since          :22-1-2019
 ******************************************************************************/
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { InputBase, Button, IconButton, Popper, Paper, ClickAwayListener } from '@material-ui/core';
import { BrushIcon, CropOriginalIcon, PersonAddIcon, ColorLensIcon, UndoIcon, MoreVertIcon, CheckCircleOutlineIcon, ArchiveOutlinedIcon, RedoIcon } from '@material-ui/icons';
import { notes } from '../controller/noteController';
import { Reminder } from './reminder'
export class Notes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
            open: false,
            alertOpen: false,
            title: "",
            takeNote: "",
            id: "",
            key: "",
            pin: false,
            archive: false,
            remainder: "",
            delete: false,
            note: false,
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
            takeNote: this.state.takeNote,
            archive: this.state.archive,
            delete: this.state.delete,
            pin: this.state.pin,
            key: this.state.key,
            remainder: this.state.remainder,
            note: this.state.note
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
    }
    handlechangenote = (event) => {
        this.setState({ takeNote: event.target.value });
    }
    handlemoremenu = (event) => {
        this.setState({
            anchorEl: (this.state.anchorEl ? null : event.currentTarget)
        })
    }
    handleClickAway = () => {
        this.setState({
            anchorEl: null
        })
    }

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popper' : undefined;
        return (!this.state.open ? (
            <div className="notecard" >
                <card onClick={this.handleNote}>
                    <div style={{ display: "flex" }}>
                        <div className="take_note">
                            <InputBase placeholder="Take a note......" value="" />
                        </div>
                        <div className="title_icons">
                            <IconButton className="checkCircle" >
                                <div className="checkCircleicon" title="newlist"><CheckCircleOutlineIcon /></div>
                            </IconButton>
                            <IconButton className="paint" >
                                <div className="painticon" title='newnote with drawing' ><BrushIcon /></div>
                            </IconButton>
                            <IconButton className="crop" >
                                <div className="cropicon" title="newnote with image" ><CropOriginalIcon /></div>
                            </IconButton>
                        </div>
                    </div>
                </card>
            </div>)
            : (
                <div className="notecard2" >
                    <card>
                        <div className="card">
                            <div className="take_title">
                                <InputBase placeholder="Title" onChange={this.handlechangeTitle} />

                            </div>
                            <div className="take_Note">
                                <InputBase placeholder="Take a note......." onChange={this.handlechangenote} />
                            </div>
                            <div className="icons">
                                <div>
                                    <Reminder></Reminder>
                                </div>
                                <IconButton className="personadd" >
                                    <div className="personAdd" title="collabarator"><PersonAddIcon /></div>
                                </IconButton>
                                <IconButton className="colorlens" >
                                    <div className="colorLens" title="change color" ><ColorLensIcon /></div>
                                </IconButton>
                                <IconButton className="originalicon" >
                                    <div className="originalIcon" title="add image"><CropOriginalIcon /></div>
                                </IconButton>
                                <IconButton className="archeive" >
                                    <div className="Archeive" title="Archive"><ArchiveOutlinedIcon /></div>
                                </IconButton>
                                <IconButton className="morevert"
                                    aria-describedby={id} type="button" onClick={this.handlemoremenu}>
                                    <div className="moreverticon" title="more"><MoreVertIcon /></div>
                                </IconButton>
                                <Popper id={id} open={open} anchorEl={anchorEl} >
                                    <ClickAwayListener onClickAway={this.handleClickAway}>
                                        <Paper className="more-paper1">
                                            <div className="notemore-div">
                                                <Button id="lablebutton-btn1">
                                                    <div className="labeladd">
                                                        Add lable</div>
                                                </Button>
                                                <Button id="lablebutton-btn2">
                                                    <div className="adddrawing">
                                                        Add drawing</div>
                                                </Button>
                                                <Button id="lablebutton-btn3">
                                                    <div className="showtick">
                                                        Show tick boxes</div>
                                                </Button>
                                            </div>
                                        </Paper>
                                    </ClickAwayListener>
                                </Popper>
                                <IconButton className="undo" >
                                    <div className="undo" title="undo"><UndoIcon /></div>
                                </IconButton>

                                <IconButton className="redo" >
                                    <div className="redo" title="redo" ><RedoIcon /></div>
                                </IconButton>
                                <IconButton className="trash-btn">
                                    <div className="trash" onClick={this.handleNotes}>close</div></IconButton>
                            </div>
                        </div>
                    </card>
                </div>
            )
        )
    }
}
export default withRouter(Notes)