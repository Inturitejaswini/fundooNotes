/******************************************************************************
* Execution : 1. default node cmd> node getLabels.jsx 
* 2. if nodemon installed cmd> nodemodule getLabels.jsx
* 
* Purpose : create getLabels page.
* @description 
* 
* @file :getLabels.jsx
* @overview :getLabels form problem.
* @module :getLabels - This is optional if expeclictly its an npm or local package
* @author :tejaswini<chowdarytejaswini2@gmail.com>
* @version :1.0
* @since :-28-01-2020
******************************************************************************/
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { InputBase } from '@material-ui/core';
import { Button, IconButton, Card } from '@material-ui/core';
import { getnotes } from '../controller/noteController'
import { getlabelscard } from '../controller/noteController'
import image1 from '../assets/pushpin.jpeg'
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import AppBar1 from '../component/appBar'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import RedoIcon from '@material-ui/icons/Redo';
import UndoIcon from '@material-ui/icons/Undo'
import MoreComponent from '../component/moreComponent';
import { noteUpdate } from '../controller/noteController'
import { ArchiveNotes } from '../controller/noteController'
import { deleteNotes } from '../controller/noteController'
import Dialog from '@material-ui/core/Dialog';
import Reminder from '../component/reminder'
import Color from '../component/colorComponent'
import { updatePin } from '../controller/noteController'
import { updateunPin } from '../controller/noteController'
import ScheduleIcon from '@material-ui/icons/Schedule';
class Labelcomponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteArray: [],
            noteArray1: [],
            anchorEl: null,
            open: false,
            delete: false,
            key: ""
        }
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
    handleNote = async (title, takeNote, key) => {
        //console.log("id in get",key);
        await this.setState({
            title: title,
            open: !this.state.open,
            takeNote: takeNote,
            key: key
        })
        // console.log("taking title", this.state.title,this.state.takeNote,this.state.key);
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
        //console.log("response is coming to handle delete",this.state.key,this.state.delete)
        let delete1 = {
            title: this.state.title,
            takeNote: this.state.takeNote,
            key: this.state.key,
            delete: this.state.delete
        }
        //console.log("response is coming to handle delete",delete1)
        deleteNotes(delete1).then((res) => {
            //console.log("data is deleted came to in get note component", res)
        })
    }
    handlePin = () => {
        console.log("gggggg--->");
        this.setState({
            // selectedValue: value, 
            open: false,
            pin: this.state.pin,
            title: this.state.title,
            takeNote: this.state.takeNote,
            key: this.state.key
        });
        // console.log("response is coming to handle pin",this.state.pin)
        let pin = {
            title: this.state.title,
            pin: this.state.pin,
            takeNote: this.state.takeNote,
            key: this.state.key
        }
        //console.log("response is coming to handle pin", pin.pin)
        updatePin(pin).then((res) => {
            // console.log("data is updated came to in get note component", res)
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
        console.log("response is coming to handle upade", this.state.pin)
        let pin = {
            title: title,
            pin: !this.state.pin,
            takeNote: takeNote,
            key: key
        }
        console.log("response is coming to handle pin upadation", pin.pin)
        updateunPin(pin).then((res) => {
            console.log("data is updated came to in get note component", res)
        })
    }
    handleArchive = (title, takeNote, key) => {
        console.log("data come to archive function", title, takeNote, key);
        this.setState({
            open: false,
            delete: this.state.delete,
            title: title,
            takeNote: takeNote,
            key: key,
            archive: this.state.archive
        });
        console.log("response is coming to handle archive", this.state.key, this.state.archive)
        let archive1 = {
            title: title,
            takeNote: takeNote,
            key: key,
            delete: this.state.delete,
            archive: this.state.archive
        }
        console.log("response is coming to handle delete", archive1.title, archive1.key, archive1.archive)
        ArchiveNotes(archive1).then((res) => {
            console.log("data is archived came to in get note component")
        })
    }
    handleUpdate = () => {
        // console.log("gggggg--->",value);
        this.setState({
            // selectedValue: value, 
            open: false,
            title: this.state.title,
            takeNote: this.state.takeNote,
            key: this.state.key
        });
        // console.log("response is coming to handle upade",this.state.key)
        let update = {
            title: this.state.title,
            takeNote: this.state.takeNote,
            key: this.state.key
        }
        //console.log("response is coming to handle upade", update)
        noteUpdate(update).then((res) => {
            // console.log("data is updated came to in get note component", res)
        })
    };
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
    handlemoremenu = (event) => {
        this.setState({
            anchorEl: (this.state.anchorEl ? null : event.currentTarget)
        })
    }
    handleAddLabelClick = () => {
        this.setState({
            addLabel: true
        })
    }
    handleAddLabel = (event) => {
        console.log("in event");
    }
    render() {
        // const keyidlabel=this.props.location.state
        // console.log("key is coming to label component",this.props,keyidlabel)
        var pinData = this.state.noteArray1.map(key1 => {
            console.log("to get labels in get note component", key1.data().label, key1.data().labelkey, key1.id)
            if (this.props.location.state == key1.data().label) {
                //  console.log("to get labels in get note component", key1.data().label, keyid)
                return (
                    <div className="getting_labels_inDrawercomponent_inlabelComponent">
                        {this.state.noteArray.map(key => {
                            if (key.id == key1.data().key) {
                                return (
                                    <div className="noteContainer_labelcomponent">
                                        <div className="getnotecomponetnotecard_labelcomponnet" style={{ background: key.data().color }}>
                                            <Card id="labelComponent-card" >
                                                <div id="take_note_labelcompnent" onClick={() => this.handleNote(key.data().title, key.data().takeNote, key.id)}>
                                                    <div id="inner_take_note_labelcomponent">
                                                        <div className="gettnote_img_label">
                                                            <InputBase
                                                                placeholder="title" value={key.data().title} />

                                                        </div>
                                                        <div>
                                                            <InputBase placeholder="take a note....." value={key.data().takeNote}></InputBase>
                                                        </div>
                                                    </div>
                                                    {(key.data().remainder) != null ? (
                                                        <div className="date_and_time">
                                                            {/* <ScheduleIcon></ScheduleIcon> */}
                                                            <InputBase id="inner_date_and_time" value={key.data().remainder}></InputBase></div>)
                                                        :
                                                        (
                                                            <div></div>
                                                        )}
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
                                                        })}</div>
                                                </div>
                                                <div className="note-card-div-label">

                                                    <Reminder
                                                        noteId={key.id}></Reminder>
                                                    <IconButton className="personadd">
                                                        <div className="personAdd"><PersonAddIcon />
                                                        </div>
                                                    </IconButton>
                                                    <Color
                                                        noteId={key.id}></Color>

                                                    <IconButton className="originalicon">
                                                        <div id="originalIcon"><CropOriginalIcon />
                                                        </div>
                                                    </IconButton>
                                                    <IconButton className="archeive" onClick={() => this.handleArchive(key.data().title, key.data().takeNote, key.id)}>
                                                        <div id="Archeive"><ArchiveOutlinedIcon />
                                                        </div>
                                                    </IconButton>
                                                    <MoreComponent
                                                        noteId={key.id}></MoreComponent>
                                                    <IconButton className="gettnote_img_img">
                                                        <img className="pindrop2" src={image1} onClick={this.handlePin} />
                                                    </IconButton>
                                                </div>

                                            </Card>
                                        </div>
                                        <Dialog aria-labelledby="simple-dialog-title" open={this.state.open}>
                                            <div className="card_getNote">

                                                <div id="getNotes-align">
                                                    <InputBase placeholder="title" value={this.state.title} onChange={this.handlechangeTitle}>
                                                    </InputBase> <IconButton className="gettnote_img_img">
                                                        <img className="pindrop2" src={image1} onClick={this.handlePin} />
                                                    </IconButton>
                                                </div>
                                                <div className="takeNoteCard">
                                                    <InputBase placeholder="take a note" value={this.state.takeNote} onChange={this.handlechangetakeNote}>
                                                    </InputBase>
                                                </div>
                                                <div className="getnoteicons">
                                                    <Reminder
                                                        noteId={key.id}></Reminder>
                                                    <IconButton className="personadd1" >
                                                        <div className="personAdd1"><PersonAddIcon />
                                                        </div>
                                                    </IconButton>
                                                    <IconButton className="Colorlens1" >
                                                        <div className="ColorLens1" ><ColorLensIcon />
                                                        </div>
                                                    </IconButton>
                                                    <IconButton className="originalicon1" >
                                                        <div className="originalIcon1" ><CropOriginalIcon />
                                                        </div>
                                                    </IconButton>
                                                    <IconButton className="archeive1" onClick={() => this.handleArchive(key.data().title, key.data().takeNote, this.state.key)} >
                                                        <div className="Archeive1" ><ArchiveOutlinedIcon />
                                                        </div>
                                                    </IconButton>
                                                    <MoreComponent
                                                        noteId={key.id}></MoreComponent>
                                                    <IconButton className="undo1">
                                                        <div className="undo1" ><UndoIcon />
                                                        </div>
                                                    </IconButton>
                                                    <IconButton className="redo1" >
                                                        <div className="redo1" ><RedoIcon />
                                                        </div>
                                                    </IconButton>
                                                    <IconButton className="close1" onClick={this.handleUpdate}>
                                                        close
                              </IconButton>
                                                </div>
                                            </div>
                                        </Dialog>
                                    </div>
                                )
                            }
                        })}
                    </div>
                )
            }
        })
        return (
            <div>
                <AppBar1 />
                {pinData}</div>
        )
    }
}
export default withRouter(Labelcomponent)
