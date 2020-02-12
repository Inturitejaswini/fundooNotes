import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getnotes } from '../controller/noteController'
import { Card, InputBase, IconButton } from '@material-ui/core';
import { restoreNotes } from '../controller/noteController'
import { deleteNotesPermenently } from '../controller/noteController'
import Dialog from '@material-ui/core/Dialog'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import AppBar1 from '../component/appBar'
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
    handlepermenentDelete = (key) => {
        console.log("data come to delete function", key);
        this.setState({
            open: false,
            key: key,
        });
        console.log("response is coming", this.state.key)
        let delete1 = {
            key: key,
        }
        console.log("response is coming to handle delete", delete1, this.state.key)
        deleteNotesPermenently(delete1).then((res) => {
            console.log("data is deleted came to in get note component", res)
        })
    }

    handleDelete = async (key) => {
        console.log("data come to delete function", this.state.key);
        await this.setState({
            open: false,
            delete: !this.state.delete,
            title: this.state.title,
            takeNote: this.state.takeNote,
            key: key,
        });
        console.log("response is coming to handle delete------->", this.state.key, this.state.delete)
        let delete1 = {
            title: this.state.title,
            takeNote: this.state.takeNote,
            key:key,
            delete: this.state.delete,
        }
        console.log("response is coming to handle delete", delete1)
        restoreNotes(delete1).then((res) => {
            console.log("data is deleted came to in get note component", res)
        })
    }
    componentDidMount = () => {
        getnotes()
            .then(res => {
                // console.log("dataaaaaaa", res);
                this.setState({
                    noteArray: res
                })
                // console.log("noteData", this.state.noteArray)
                this.state.noteArray.map((key) => {
                    //console.log(key.title,key.delete, "title is coming")
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
            console.log("dataaaaa-in key----->", key.id, key.data().title, key.data().delete);
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
                                            onClick={() => this.handlepermenentDelete(key.id)}>
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
                                    onChange={this.handlechangeTitle}>
                                    </InputBase>
                                </div>
                                <div className="takeNoteCard1">
                                    <InputBase placeholder="take a note" 
                                    value={this.state.takeNote} 
                                    onChange={this.handlechangetakeNote}>
                                    </InputBase>
                                </div>
                                <div className="getnoteicons12">
                                    <IconButton className="DeleteForever"
                                     onClick={() => this.handlepermenentDelete(key.id)}>
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