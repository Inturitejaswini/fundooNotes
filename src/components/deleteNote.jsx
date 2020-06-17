import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getnotes ,restoreNotes,deleteNotesPermenently} from '../controller/noteController'
import { Card, InputBase, IconButton ,Dialog} from '@material-ui/core';
import {DeleteForeverIcon,RestoreFromTrashIcon} from '@material-ui/icons';
import AppBar1 from '../components/appBar'
class Trash extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
            noteArray: [],
            open: false,
            title: "",
            takeNote: "",
            delete: false,
            key: "",
            archive: false,
            anchorEl: null
        }
    }
    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        });
    }
    handleChangeTakeNote = (event) => {
        this.setState({ takeNote: event.target.value });
    }
    handleNote =(title, takeNote, key) => {
         this.setState({
            title: title,
            open: !this.state.open,
            takeNote: takeNote,
            key: key
        })
    }
    handlePermenentDelete = (key) => {
        this.setState({
            open: false,
            key: key,
        });
        let delete1 = {
            key: key,
        }
        deleteNotesPermenently(delete1).then((res) => {
        })
    }

    handleDelete = async (key) => {
        await this.setState({
            open: false,
            delete: !this.state.delete,
            title: this.state.title,
            takeNote: this.state.takeNote,
            key: key,
        });
        let delete1 = {
            title: this.state.title,
            takeNote: this.state.takeNote,
            key:key,
            delete: this.state.delete,
        }
        restoreNotes(delete1).then((res) => {
        })
    }
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
    handleMoremenu = (event) => {
        this.setState({
            anchorEl: (this.state.anchorEl ? null : event.currentTarget)
        })
    }
    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popper' : undefined;
        var noteData = this.state.noteArray.map(key => {
            if ((key.data().delete == true) && (key.data().archive == false)) {
                return (
                    <div className="delete-notecard-div">
                        <Card className="delete-card-div">
                            <div id="take_note1" >
                                <div>
                                    <InputBase
                                        placeholder="title" value={key.data().title}
                                        onClick={() => this.handleNote(key.data().title, key.data().takeNote, key.id)} />
                                </div>
                                <div>
                                    <InputBase
                                        placeholder="take a note....." value={key.data().takeNote}
                                        onClick={() => this.handleNote(key.data().title, key.data().takeNote, key.id)}></InputBase>
                                </div>
                                <div className="deleteicons">
                                    <IconButton className="DeleteForever1" >
                                        <div className="DeleteForeverIcon1"
                                            title="deleteforever"
                                            onClick={() => this.handlePermenentDelete(key.id)}>
                                            <DeleteForeverIcon />
                                        </div>
                                    </IconButton>
                                    <IconButton className="RestoreFromTrash1" >
                                        <div className="RestoreFromTrashIcon1"
                                            title="restore"
                                            onClick={() =>this.handleDelete(key.id)}>
                                            <RestoreFromTrashIcon />
                                        </div>
                                    </IconButton>
                                </div>
                            </div>
                        </Card>
                        <Dialog aria-labelledby="simple-dialog-title2"
                            open={this.state.open} onClick={this.handleUpdate}>
                            <div className="card_getNote">

                                <div id="getNotes-align1">
                                    <InputBase placeholder="title" 
                                    value={this.state.title} 
                                    onChange={this.handleChangeTitle}>
                                    </InputBase>
                                </div>
                                <div className="takeNoteCard1">
                                    <InputBase placeholder="take a note" 
                                    value={this.state.takeNote} 
                                    onChange={this.handleChangeTakeNote}>
                                    </InputBase>
                                </div>
                                <div className="getnoteicons12">
                                    <IconButton className="DeleteForever"
                                     onClick={() => this.handlePermenentDelete(key.id)}>
                                        <div className="DeleteForeverIcon" 
                                        title="deleteforever" >
                                            <DeleteForeverIcon />
                                        </div>
                                    </IconButton>
                                    <IconButton className="RestoreFromTrash">
                                        <div className="RestoreFromTrashIcon"
                                         title="restore"
                                         onClick={() =>this.handleDelete(this.state.key)}><RestoreFromTrashIcon />
                                        </div>
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
                <AppBar1 />
                {noteData}
            </div>
        )
    }
}
export default withRouter(Trash)