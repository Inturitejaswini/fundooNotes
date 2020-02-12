/******************************************************************************
 *  Execution       :   1. default node         cmd> node getNote.jsx 
 *                      2. if nodemon installed cmd> nodemodule getNote.jsx
 * 
 *  Purpose         : creating getnote card.
 *  @description    
 * 
 *  @file           :getNote.jsx
 *  @overview       : creating getNote problem.
 *  @module         :getNote - This is optional if expeclictly its an npm or local package
 *  @author         :Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        :1.0
 *  @since          :20-1-2019
 ******************************************************************************/

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getnotes } from '../controller/noteController'
import MoreComponent from '../component/moreComponent'
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import IconButton from '@material-ui/core/IconButton'
import UndoIcon from '@material-ui/icons/Undo';
import { ArchiveNotes } from '../controller/noteController'
import { updatePin } from '../controller/noteController'
import Dialog from '@material-ui/core/Dialog';
import { Reminder } from './reminder'
import { InputBase } from '@material-ui/core';
import { updateunPin } from '../controller/noteController'
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import { noteUpdate } from '../controller/noteController'
import { deleteNotes } from '../controller/noteController';
import ColorComponent from './colorComponent'
import RedoIcon from '@material-ui/icons/Redo';
import image1 from '../assets/pushpin.jpeg'
import { createMuiTheme } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core';
import { getlabelscard } from '../controller/noteController'
const theme = createMuiTheme({
    overrides: {
        MuiIconButton: {
            root: {
                padding: "4px",
                fontsize: "0.5rem",
            }
        },
        MuiDialog: {
            container: {
                background: "whitesmoke"
            }
        }
    }
})
class Getnotes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteArray: [],
            noteArray1: [],
            anchorEl: null,
            open: false,
            alertOpen: false,
            title: "",
            key: "",
            takeNote: "",
            id: "",
            pin: false,
            archive: false,
            delete: false
        }
    }
    handleNote = async (title, takeNote, id) => {
        await this.setState({
            title: title,
            open: true,
            takeNote: takeNote,
            key: id
        })
        console.log("taking title", this.state.title, this.state.takeNote, this.state.key);
    }
    handleClose = (value) => {
        console.log("gggggg--->", value);
        this.setState({
            // selectedValue: value, 
            open: false,
            title: this.state.title,
            takeNote: this.state.takeNote,
            key: this.state.key
        });
        console.log("response is coming to handle upade", this.state.title, this.state.takeNote, this.state.key)
        let update = {
            title: this.state.title,
            takeNote: this.state.takeNote,
            key: this.state.key
        }
        console.log("response is coming to handle upade", update)
        noteUpdate(update).then((res) => {
            console.log("data is updated came to in get note component", res)
        })
    }
    handlemoremenu = (event) => {
        this.setState({
            anchorEl: (this.state.anchorEl ? null : event.currentTarget)
        })
    }
    handlechangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        });
        // console.log("taking title", this.state.title);
    }
    handlechangetakeNote = (event) => {
        this.setState({ takeNote: event.target.value });
        // console.log("taking notes",this.state.takeNote);
    }
    handleDelete = () => {
        console.log("data come to delete function");
        this.setState({
            open: false,
            delete: this.state.delete,
            title: this.state.title,
            takeNote: this.state.takeNote,
            key: this.state.key
        });
        console.log("response is coming to handle delete", this.state.key, this.state.delete)
        let delete1 = {
            title: this.state.title,
            takeNote: this.state.takeNote,
            key: this.state.key,
            delete: this.state.delete
        }
        console.log("response is coming to handle delete", delete1)
        deleteNotes(delete1).then((res) => {
            console.log("data is deleted came to in get note component", res)
        })
    }
    handlePin = (title,takeNote,key) => {
        console.log("gggggg--->");
        this.setState({
            // selectedValue: value, 
            open: false,
            pin: this.state.pin,
            title: title,
            takeNote: takeNote,
            key: key
        });
        console.log("response is coming to handle pin", this.state.pin)
        let pin = {
            pin: this.state.pin,
            title: title,
            takeNote: takeNote,
            key: key
        }
        //console.log("response is coming to handle pin", pin.pin)
        updatePin(pin).then((res) => {
            console.log("data is updated came to in get note component", res)
        })
    }
    handleArchive = () => {
        console.log("data come to delete function");
        this.setState({
            open: false,
            delete: this.state.delete,
            title: this.state.title,
            takeNote: this.state.takeNote,
            key: this.state.key,
            archive: this.state.archive
        });
        console.log("response is coming to handle delete", this.state.key, this.state.delete)
        let archive1 = {
            title: this.state.title,
            takeNote: this.state.takeNote,
            key: this.state.key,
            delete: this.state.delete,
            archive: this.state.archive
        }
        console.log("response is coming to handle delete")
        ArchiveNotes(archive1).then((res) => {
            console.log("data is archived came to in get note component", res)
        })
    }
    changehandleunPin = (key, title, takeNote) => {
        console.log("gggggg--->changing");
        this.setState({
        // selectedValue: value, 
        open: false,
        pin: this.state.pin,
        title: title,
        takeNote: takeNote,
        key: key
        });
        console.log("response is coming to handle pin",this.state.pin,title,takeNote,key)
       
        let pin = {
        title: title,
        pin: !this.state.pin,
        takeNote: takeNote,
        key: key
        }
        console.log("response is coming to handle pin", pin.pin,pin.title,pin.takeNote)
        updateunPin(pin).then((res) => {
        console.log("data is updated came to in get note component", res)
        })
        }
    componentDidMount = () => {
        this.getAllNotes();
        this.getAllLables();
    }
    getAllNotes = () => {
        getnotes()
            .then(res => {
                this.setState({
                    noteArray: res
                })
                console.log("noteData", this.state.noteArray)
                this.state.noteArray.map((key) => {
                })
            })
        this.setState({
            open: false
        })
    }
    getAllLables = () => {
        getlabelscard()
            .then(res => {
                console.log("dataaaaaaa for labels", res);
                this.setState({
                    noteArray1: res
                })
                console.log("noteData", this.state.noteArray1)
            })

    }
    render() {
        var List = this.props.listId ? "listviewGrid" : null
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popper' : undefined;
        var pinData = this.state.noteArray.map(key => {
            console.log("dataaaaa-in key----->", key.id, key.data().archive, key.data().title);
            if ((key.data().delete == false) && (key.data().archive == false) && (key.data().pin == true)) {
                return (
                    <div className="getcard-div">
                        <div className="note-card-div" style={{ background: key.data().color }}>
                            <card>
                                <div className="take_note">
                                    <div>
                                        <InputBase style={{ color: "black" }}
                                            placeholder="Title"
                                            value={key.data().title}
                                            onClick={() => this.handleNote(key.data().title, key.data().takeNote, key.id)} />
                                    </div>
                                    <div>
                                        <InputBase placeholder="take a note....."
                                            value={key.data().takeNote}
                                            onClick={() => this.handleNote(key.data().title, key.data().takeNote, key.id)}>
                                        </InputBase>
                                         {(key.data().remainder) != null ? (
                                       
                                        <div className="date_and_time">
                                            <InputBase id="inner_date_and_time" value={key.data().remainder}></InputBase>
                                            </div>
                                            )
                                        :
                                        (
                                            <div>hai</div>
                                        )}
                                        <div className="date_and_time">
                                            <InputBase id="inner_date_and_time" value={key.data().remainder}></InputBase></div>
                                    </div>
                                    <div className="dailogue-icons-div">
                                        <Reminder
                                            noteId={key.id}></Reminder>
                                        <IconButton className="personadd2" >
                                            <div className="personAdd-div" title="collabarator"><PersonAddIcon />
                                            </div>
                                        </IconButton>
                                        <ColorComponent noteId={key.id}></ColorComponent>
                                        <IconButton className="originalicon2" >
                                            <div className="originalIcon-div" title="add image" ><CropOriginalIcon />
                                            </div>
                                        </IconButton>
                                        <IconButton className="archeive1" onClick={this.handleArchive} >
                                            <div className="Archeive1" title="Archive"><ArchiveOutlinedIcon />
                                            </div>
                                        </IconButton>
                                        <MoreComponent
                                            noteId={key.id}></MoreComponent>
                                        <IconButton  >
                                            <img className="pushpin" src={image1} onClick={() => this.changehandleunPin(key.id, key.data().title, key.data().takeNote)} />
                                        </IconButton>
                                    </div>

                                </div>
                            </card>
                        </div>
                        <MuiThemeProvider theme={theme}>
                        <Dialog aria-labelledby="simple-dialog-title" open={this.state.open} style={{ background: "whitesmoke" }}>
                            <div className="card_getNote">
                                <div id="getNotes-align">
                                    <InputBase placeholder="title" value={this.state.title} onChange={this.handlechangeTitle}>
                                    </InputBase>
                                    {/* <PinDropIcon onClick={this.handlePin}></PinDropIcon> */}
                                    <IconButton  >
                                        <img className="pindrop2" src={image1} onClick={() => this.changehandleunPin(this.state.title,this.state.takeNote, this.state.key)} />
                                    </IconButton>
                                </div>
                                <div className="takeNoteCard">
                                    <InputBase placeholder="take a note" value={this.state.takeNote} onChange={this.handlechangetakeNote}>
                                    </InputBase>

                                </div>
                                <div className="dailogue-icons">
                                    <Reminder
                                        noteId={key.id}></Reminder>
                                    <IconButton className="personadd1" >
                                        <div className="personAdd1" title="collabarator"><PersonAddIcon />
                                        </div>
                                    </IconButton>
                                    <ColorComponent noteId={key.id}></ColorComponent>
                                    <IconButton className="originalicon1" >
                                        <div className="originalIcon1" title="add image" ><CropOriginalIcon />
                                        </div>
                                    </IconButton>
                                    <IconButton className="archeive1" onClick={this.handleArchive} >
                                        <div className="Archeive1" title="Archive"><ArchiveOutlinedIcon />
                                        </div>
                                    </IconButton>
                                    <MoreComponent
                                        noteId={key.id}></MoreComponent>
                                    <IconButton className="undo1">
                                        <div className="undo1" title="redo"><UndoIcon />
                                        </div>
                                    </IconButton>

                                    <IconButton className="redo1" >
                                        <div className="redo1" ><RedoIcon />
                                        </div>
                                    </IconButton>
                                    <IconButton className="close1" onClick={this.handleClose} >
                                        close
                                   </IconButton>

                                </div>
                            </div>
                        </Dialog>
                        </MuiThemeProvider>
                    </div>
                )
            }
        })
        var noteData = this.state.noteArray.map(key => {
            console.log("dataaaaa--is generating key", key.id);
            if ((key.data().archive == false) && (key.data().delete == false) && (key.data().pin == false)) {
                return (
                    <div className="getcard-div">
                        <div className="note-card-div" id={List} style={{ background: key.data().color }}>
                            <card>
                                <div className="take_note">
                                    <div>
                                        <InputBase style={{ color: "black" }}
                                            placeholder="Title"
                                            value={key.data().title}
                                            onClick={() => this.handleNote(key.data().title, key.data().takeNote, key.id)} />
                                    </div>
                                    <div>
                                        <InputBase placeholder="take a note....."
                                            value={key.data().takeNote}
                                            onClick={() => this.handleNote(key.data().title, key.data().takeNote, key.id)}>
                                        </InputBase>
                                        <div className="date_and_time">
                                        {(key.data().remainder) != null ? (
                                       
                                       <div className="date_and_time">
                                           <InputBase id="inner_date_and_time" value={key.data().remainder}></InputBase>
                                           </div>
                                           )
                                       :
                                       (
                                           <div></div>
                                       )}
                                            {/* <InputBase id="inner_date_and_time" value={key.data().remainder}></InputBase> */}
                                            <div id="inner_map_function">
                                                {this.state.noteArray1.map(key1 => {
                                                    console.log("to get labels in get note component", key1.data().label, key1.data().checkBox)
                                                    if ((key1.data().checkBox == true) && (key1.data().key == key.id)) {
                                                        return (
                                                            <div className="chip1" >
                                                                <InputBase id="labelssize" value={key1.data().label} />
                                                            </div>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dailogue-icons-div">
                                        <Reminder
                                            noteId={key.id}></Reminder>
                                        <IconButton className="personadd2" >
                                            <div className="personAdd-div" title="collabarator"><PersonAddIcon />
                                            </div>
                                        </IconButton>
                                        <ColorComponent noteId={key.id}></ColorComponent>
                                        <IconButton className="originalicon2" >
                                            <div className="originalIcon-div" title="add image" ><CropOriginalIcon />
                                            </div>
                                        </IconButton>
                                        <IconButton className="archeive1" onClick={this.handleArchive} >
                                            <div className="Archeive1" title="Archive"><ArchiveOutlinedIcon />
                                            </div>
                                        </IconButton>
                                        <MoreComponent
                                            noteId={key.id}></MoreComponent>
                                        <IconButton  id="pin-btn">
                                            <img className="pindrop2" src={image1} onClick={() => this.handlePin(key.data().title, key.data().takeNote, key.id)} />
                                        </IconButton>
                                    </div>
                                </div>
                            </card>
                        </div>
                        <MuiThemeProvider theme={theme}>
                            <Dialog aria-labelledby="simple-dialog-title" open={this.state.open} style={{ background: "white" }}>
                                <div className="card_getNote">
                                    <div id="getNotes-align">
                                        <InputBase placeholder="title" value={this.state.title} onChange={this.handlechangeTitle}>
                                        </InputBase>
                                        {/* <PinDropIcon className="pindrop2" onClick={this.handlePin}></PinDropIcon> */}
                                        <IconButton  >
                                            <img className="pindrop2" src={image1} onClick={() => this.handlePin(this.state.title,this.state.takeNote, this.state.key)} />
                                        </IconButton>
                                    </div>
                                    <div className="takeNoteCard">
                                        <InputBase placeholder="take a note" value={this.state.takeNote} onChange={this.handlechangetakeNote}>
                                        </InputBase>
                                    </div>
                                    <div className="dailogue-icons">
                                        <Reminder
                                            noteId={this.state.key}></Reminder>
                                        <IconButton className="personadd1" >
                                            <div className="personAdd1" title="collabarator"><PersonAddIcon />
                                            </div>
                                        </IconButton>
                                        <ColorComponent noteId={key.id}></ColorComponent>
                                        <IconButton className="originalicon1" >
                                            <div className="originalIcon1" title="add image" ><CropOriginalIcon />
                                            </div>
                                        </IconButton>
                                        <IconButton className="archeive1" onClick={this.handleArchive} >
                                            <div className="Archeive1" title="Archive"><ArchiveOutlinedIcon />
                                            </div>
                                        </IconButton>
                                        <MoreComponent
                                            noteId={this.state.key}></MoreComponent>
                                        <IconButton className="undo1">
                                            <div className="undo1" title="redo"><UndoIcon />
                                            </div>
                                        </IconButton>

                                        <IconButton className="redo1" >
                                            <div className="redo1" ><RedoIcon />
                                            </div>
                                        </IconButton>
                                        <IconButton className="close1" onClick={this.handleClose} >
                                            close
                                   </IconButton>

                                    </div>
                                </div>
                            </Dialog>
                        </MuiThemeProvider>
                    </div>
                )
            }
        })
        return (
            <div id="allNotes">
                {/* <div id="pinned-div-component">Pinned:</div> */}
                {pinData}
                {/* <div id="others-div-component">UnPinned:</div> */}
                {noteData}
            </div>
        )
    }
}
export default withRouter(Getnotes)
