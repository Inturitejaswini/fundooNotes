/******************************************************************************
* Execution : 1. default node cmd> node archive.jsx 
* 2. if nodemon installed cmd> nodemodule archive.jsx
* Purpose : create archive page.
* @description 
* 
* @file :archive.jsx
* @overview :archive form problem.
* @module :archive - This is optional if expeclictly its an npm or local package
* @author :tejaswini<chowdarytejaswini2@gmail.com>
* @version :1.0
* @since :-28-01-2020
******************************************************************************/
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getnotes, noteUpdate, unArchiveNotes, } from '../controller/noteController'
import { CropOriginalIcon, AddAlertIcon, PersonAddIcon, OpenInBrowserIcon, RedoIcon, UndoIcon, } from '@material-ui/icons';
import { Card, InputBase, IconButton } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import image1 from '../assets/pushpin.jpeg'
import ColorComponent from '../component/colorComponent'
import MoreComponent from '../component/moreComponent'
import { AppBar1 } from './appBar';
import { Reminder } from './reminder'
class Archive extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
            noteArray: [],
            open: false,
            title: "",
            takeNote: "",
            archive: true,
            key: "",
            anchorEl: null
        }
    }
    handlechangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        });
    }
    handlechangetakeNote = (event) => {
        this.setState({ takeNote: event.target.value });
    }
    handleNote = async (title, takeNote, key) => {
        await this.setState({
            title: title,
            open: !this.state.open,
            takeNote: takeNote,
            key: key
        })
    }

    handleunArchive = () => {
        this.setState({
            open: false,
            archive: this.state.archive,
            key: this.state.key
        });
        let archive1 = {
            archive: this.state.archive,
            key: this.state.key,
        }
        unArchiveNotes(archive1).then((res) => {
        })
    }
    handleUpdate = () => {
        this.setState({
            open: false,
            title: this.state.title,
            takeNote: this.state.takeNote,
            key: this.state.key
        });
        let update = {
            title: this.state.title,
            takeNote: this.state.takeNote,
            key: this.state.key
        }
        noteUpdate(update).then((res) => {
        })
    };
    componentDidMount = () => {
        getnotes()
            .then(res => {
                this.setState({
                    noteArray: res
                })
                this.state.noteArray.map((key) => {
                })
            })
        this.setState({
            open: false
        })
    }
    handlemoremenu = (event) => {
        this.setState({
            anchorEl: (this.state.anchorEl ? null : event.currentTarget)
        })
    }
    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popper' : undefined;
        var noteData = this.state.noteArray.map(key => {
            if (key.data().archive == true) {
                return (
                    <div className="archive-notecard-div">
                        <Card className="archive-card">
                            <div >
                                <div>
                                    <InputBase
                                        placeholder="title" value={key.data().title}
                                        id="take_note12" onClick={() => this.handleNote(key.data().title, key.data().takeNote, key.id)} />
                                </div>
                                <div>
                                    <InputBase placeholder="take a note....." value={key.data().takeNote}
                                        id="take_note12" onClick={() => this.handleNote(key.data().title, key.data().takeNote, key.id)}></InputBase>
                                </div>
                                <div className="dailogue-icons-divcard">

                                    <Reminder
                                        noteId={key.id}></Reminder>
                                    <IconButton className="personadd23" >
                                        <div className="personAdd-div" title="collabarator"><PersonAddIcon />
                                        </div>
                                    </IconButton>
                                    <ColorComponent noteId={key.id}></ColorComponent>
                                    <IconButton className="originalicon23" >
                                        <div className="originalIcon-div" title="add image" ><CropOriginalIcon />
                                        </div>
                                    </IconButton>
                                    <IconButton className="unarcheive1" title="unArchive" onClick={this.handleunArchive}>
                                        <div className="unArcheive1" ><OpenInBrowserIcon />
                                        </div>
                                    </IconButton>
                                    <MoreComponent
                                        noteId={key.id}></MoreComponent>
                                    <IconButton  >
                                        <img className="pindrop2" src={image1} onClick={this.handlePin} />
                                    </IconButton>
                                </div>
                            </div>
                        </Card>

                        <Dialog aria-labelledby="simple-dialog-title" open={this.state.open}>
                            <div className="card_getNote123">

                                <div id="getNotes-align">
                                    <InputBase placeholder="title" value={this.state.title} onChange={this.handlechangeTitle}>
                                    </InputBase>
                                    <IconButton  >
                                        <img className="pindrop2" src={image1} onClick={this.handlePin} />
                                    </IconButton>
                                </div>
                                <div className="takeNoteCard">
                                    <InputBase placeholder="take a note" value={this.state.takeNote} onChange={this.handlechangetakeNote}>
                                    </InputBase>
                                </div>
                                <div className="getnoteicons">
                                    <IconButton className="alert1" >
                                        <div className="alert1" ><AddAlertIcon />
                                        </div>
                                    </IconButton>
                                    <IconButton className="personadd1" >
                                        <div className="personAdd1"><PersonAddIcon />
                                        </div>
                                    </IconButton>
                                    <ColorComponent noteId={key.id}></ColorComponent>
                                    <IconButton className="originalicon1" >
                                        <div className="originalIcon1" ><CropOriginalIcon />
                                        </div>
                                    </IconButton>
                                    <IconButton className="unarcheive1" title="unArchive" onClick={this.handleunArchive}>
                                        <div className="unArcheive1" ><OpenInBrowserIcon />
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
        })
        return (
            <div>
                <AppBar1></AppBar1>
                {noteData}
            </div>
        )
    }
}
export default withRouter(Archive)